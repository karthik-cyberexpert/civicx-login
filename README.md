# CivicX Login & Registration

A modern, responsive login and registration application for the CivicX platform, built with React, TypeScript, and Vite.

## 🚀 Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI**: Professional government-grade interface
- **Secure Authentication**: Password validation with strength indicator
- **Social Login Integration**: Support for Google, Facebook, and Apple
- **TypeScript Support**: Type-safe development
- **Accessibility**: WCAG compliant design

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1 + TypeScript
- **Build Tool**: Vite 7.1.5
- **Routing**: React Router DOM 7.9.1
- **Icons**: Lucide React
- **Styling**: Custom CSS with responsive design

## 📦 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## 🔧 Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Building for Production

Build the application:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🚀 Deployment

### Netlify Deployment

The application is configured for seamless Netlify deployment:

1. **Automatic Setup**: The `netlify.toml` configuration file includes:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - SPA routing redirects
   - Security headers
   - Cache optimization

2. **Manual Deployment**:
   - Connect your repository to Netlify
   - Build settings are automatically detected
   - Deploy command: `npm run build`
   - Publish directory: `dist`

3. **Environment Variables**: No environment variables required for basic functionality

### Other Platforms

The built application in the `dist` folder can be deployed to:
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 769px - 1024px
- **Desktop**: 1025px+
- **Ultra-wide**: 1440px+

## 🔒 Security Features

- Input validation and sanitization
- XSS protection headers
- Content Security Policy
- Secure password requirements
- HTTPS ready

## 🎨 Design Features

- Professional gradient backgrounds
- Glass-morphism effects
- Smooth animations and transitions
- Touch-friendly interfaces
- Dark mode ready structure

## 🧪 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run typecheck` - Run TypeScript checks

## 📄 License

This project is part of the CivicX platform.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

---

**CivicX** - Modern Civic Engagement Platform