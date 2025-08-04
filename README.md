# Basti Ki Pathshala Foundation

A modern, responsive website for the Basti Ki Pathshala Foundation - an educational non-profit organization dedicated to empowering underserved communities through quality education.

## 🎯 Project Overview

This project was developed as an assignment for the Basti Ki Pathshala Foundation. It's a comprehensive website that showcases the foundation's mission, impact, and provides donation functionality to support their educational initiatives.

## ✨ Features

### 🏠 Homepage
- **Hero Section**: Compelling introduction with call-to-action
- **About Section**: Foundation's story, mission, and values
- **Impact Section**: Animated statistics showing the foundation's reach
- **Volunteer Section**: Information about volunteering opportunities
- **Call-to-Action**: Encouraging community involvement

### 💝 Donation System
- **Donation Page**: Dedicated page for accepting contributions
- **Multiple Amount Options**: Predefined donation amounts with impact descriptions
- **Custom Amount**: Flexible donation amounts
- **Frequency Options**: One-time, monthly, or yearly donations
- **Donor Information**: Comprehensive form for donor details
- **Payment Integration Ready**: Prepared for payment gateway integration

### 🎨 Design Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional design with warm color scheme
- **Smooth Animations**: Animated counters and smooth scrolling
- **Accessibility**: Built with accessibility best practices
- **Interactive Elements**: Hover effects and user-friendly navigation

## 🛠 Technology Stack

- **Framework**: Next.js 15.2.4 with React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Font**: Bricolage Grotesque (Google Fonts)
- **Development**: ESLint, Turbopack

## 📊 Foundation Impact

The website showcases the foundation's impressive impact:
- **31,245+ Lives Changed** through education programs
- **28,976+ Meals Served** to support learning
- **19,854+ Interns** trained and empowered
- **10,989+ Supporters** in the community
- **15+ Years** of active service
- **50+ Communities** reached across India

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd basti_ki_pathshala
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
basti_ki_pathshala/
├── app/                    # Next.js app directory
│   ├── donate/            # Donation page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── donate/           # Donation-specific components
│   ├── about-section.tsx # About section component
│   ├── hero-section.tsx  # Hero section component
│   ├── impact-section.tsx # Impact statistics
│   ├── volunteer-section.tsx # Volunteer information
│   └── navigation.tsx    # Navigation component
├── lib/                  # Utility functions
├── public/               # Static assets
└── package.json          # Dependencies and scripts
```

## 🎨 Design System

The website uses a warm, community-focused color palette:
- **Primary Orange**: #FF6B35 (Foundation's brand color)
- **Secondary Yellow**: #FFB800 (Warm accent)
- **Background**: #FDF6E3 (Soft cream)
- **Text**: Various grays for readability

## 🔧 Customization

### Adding New Sections
1. Create a new component in the `components/` directory
2. Import and add it to `app/page.tsx`
3. Update navigation if needed

### Modifying Content
- Update text content directly in component files
- Replace images in the `public/` directory
- Modify colors in `app/globals.css`

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

## 🔒 Security & Privacy

- Form validation implemented
- Ready for HTTPS deployment
- Prepared for payment gateway integration
- GDPR-compliant form handling

## 🚀 Deployment

The project is ready for deployment on:
- Vercel (recommended for Next.js)
- Netlify
- Any Node.js hosting platform

## 📞 Contact & Support

This project was developed as an assignment for the Basti Ki Pathshala Foundation. For questions about the foundation's work, please visit their official channels.

## 📄 License

This project is developed for educational purposes as part of the Basti Ki Pathshala Foundation assignment.

---

**Built with ❤️ for Basti Ki Pathshala Foundation**
