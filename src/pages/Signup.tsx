import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, XCircle } from 'lucide-react';
import Input from '../components/Input';
import Button from '../components/Button';
import SocialLoginButton from '../components/SocialLoginButton';
import { validatePassword, getPasswordValidationMessage } from '../utils/passwordValidation';

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    emailOrMobile: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(validatePassword(''));

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData({ ...formData, [field]: value });
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }

    // Real-time password validation
    if (field === 'password') {
      setPasswordValidation(validatePassword(value));
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateMobile = (mobile: string) => {
    const mobileRegex = /^[+]?[\d\s\-()]{10,}$/;
    return mobileRegex.test(mobile);
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    if (!formData.emailOrMobile.trim()) {
      newErrors.emailOrMobile = 'Email or mobile number is required';
    } else {
      const isEmail = formData.emailOrMobile.includes('@');
      if (isEmail && !validateEmail(formData.emailOrMobile)) {
        newErrors.emailOrMobile = 'Please enter a valid email address';
      } else if (!isEmail && !validateMobile(formData.emailOrMobile)) {
        newErrors.emailOrMobile = 'Please enter a valid mobile number';
      }
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!passwordValidation.isValid) {
      newErrors.password = getPasswordValidationMessage(passwordValidation);
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Signup attempt:', formData);
      alert('Account created successfully! (This is a demo)');
    } catch (error) {
      console.error('Signup error:', error);
      setErrors({ general: 'Signup failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`${provider} signup clicked`);
    alert(`${provider} signup integration would be implemented here`);
  };

  const PasswordStrengthIndicator = () => {
    if (!formData.password) return null;

    return (
      <div className="password-strength">
        <div className="password-requirements">
          <div className={`requirement ${passwordValidation.hasMinLength ? 'met' : ''}`}>
            {passwordValidation.hasMinLength ? <CheckCircle size={16} /> : <XCircle size={16} />}
            <span>At least 8 characters</span>
          </div>
          <div className={`requirement ${passwordValidation.hasLowerCase ? 'met' : ''}`}>
            {passwordValidation.hasLowerCase ? <CheckCircle size={16} /> : <XCircle size={16} />}
            <span>One lowercase letter</span>
          </div>
          <div className={`requirement ${passwordValidation.hasUpperCase ? 'met' : ''}`}>
            {passwordValidation.hasUpperCase ? <CheckCircle size={16} /> : <XCircle size={16} />}
            <span>One uppercase letter</span>
          </div>
          <div className={`requirement ${passwordValidation.hasNumber ? 'met' : ''}`}>
            {passwordValidation.hasNumber ? <CheckCircle size={16} /> : <XCircle size={16} />}
            <span>One number</span>
          </div>
          <div className={`requirement ${passwordValidation.hasSpecialChar ? 'met' : ''}`}>
            {passwordValidation.hasSpecialChar ? <CheckCircle size={16} /> : <XCircle size={16} />}
            <span>One special character</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="auth-container">
      <div className="auth-card signup-card">
        <div className="auth-header">
          <div className="auth-icon">
            <Shield size={40} />
          </div>
          <h1 className="auth-title">Create Account</h1>
          <p className="auth-subtitle">Join the CivicX platform</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {errors.general && (
            <div className="error-message general-error">
              {errors.general}
            </div>
          )}

          <Input
            label="Full Name"
            type="text"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleInputChange('name')}
            error={errors.name}
            required
          />

          <Input
            label="Username"
            type="text"
            placeholder="Your username"
            value={formData.username}
            onChange={handleInputChange('username')}
            error={errors.username}
            required
          />

          <Input
            label="Email or Mobile Number"
            type="text"
            placeholder="Email/mobile number"
            value={formData.emailOrMobile}
            onChange={handleInputChange('emailOrMobile')}
            error={errors.emailOrMobile}
            required
          />

          <Input
            label="Password"
            type="password"
            placeholder="Create password"
            value={formData.password}
            onChange={handleInputChange('password')}
            error={errors.password}
            required
            showPasswordToggle
          />

          <PasswordStrengthIndicator />

          <Input
            label="Confirm Password"
            type="password"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleInputChange('confirmPassword')}
            error={errors.confirmPassword}
            required
            showPasswordToggle
          />

          <Button
            type="submit"
            variant="primary"
            size="large"
            fullWidth
            loading={loading}
          >
            Create Account
          </Button>
        </form>

        <div className="auth-divider">
          <span>or continue with</span>
        </div>

        <div className="social-login-section">
          <SocialLoginButton
            provider="google"
            onClick={() => handleSocialLogin('Google')}
          />
          <SocialLoginButton
            provider="facebook"
            onClick={() => handleSocialLogin('Facebook')}
          />
          <SocialLoginButton
            provider="apple"
            onClick={() => handleSocialLogin('Apple')}
          />
        </div>

        <div className="auth-footer">
          <p>
            Already have an account?{' '}
            <Link to="/login" className="auth-link">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;