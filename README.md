# Dr. Latika Jindal - Academic Portfolio

A modern, responsive, and elegant academic portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Stack**: Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS
- **Smooth Animations**: Framer Motion for elegant page transitions and scroll effects
- **Fully Responsive**: Optimized for all screen sizes from mobile to desktop
- **Accessible**: Semantic HTML and ARIA-compliant components
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Performance**: Optimized images, code splitting, and fast page loads

## 📋 Sections

- **Hero**: Eye-catching introduction with social links
- **About**: Professional bio and personal details
- **Experience**: 15+ years of academic career timeline
- **Education**: Ph.D., M.Tech, and B.E. credentials
- **Awards**: Srijan awards and recognitions
- **Certifications**: IIT workshops, AICTE programs, and more
- **Programs**: Blue Prism and Coursera certifications
- **Publications**: 16 research papers with DOI links
- **Patents**: 6 published patents in India
- **Hobbies**: Personal interests and activities
- **Contact**: Contact form and social media links

## 🛠️ Installation

### Prerequisites

- Node.js 18.18+ or 20+ installed (required for Next.js 15)
- npm or yarn package manager

### Setup Instructions

1. **Clone or navigate to the project directory**:
   ```bash
   cd latika-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 🎨 Customization

### Colors

Edit the color palette in `tailwind.config.ts`:

```typescript
colors: {
  background: "#FDFDFB",  // Off-white
  navy: "#0A192F",        // Dark navy
  gold: "#D4AF37",        // Gold accent
  text: "#1A1A1A",        // Dark text
}
```

### Content

All content is stored in the component files under `/components`. Edit the data arrays and objects to update:

- Personal information
- Experience timeline
- Publications list
- Patents
- And more...

### Fonts

The default font is **Inter** from Google Fonts. Change it in `app/layout.tsx`:

```typescript
import { Inter } from "next/font/google";
// Change to your preferred font
```

## 📂 Project Structure

```
latika-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page importing all sections
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ExperienceSection.tsx
│   ├── EducationSection.tsx
│   ├── AwardsSection.tsx
│   ├── CertificationsSection.tsx
│   ├── ProgramsSection.tsx
│   ├── PublicationsSection.tsx
│   ├── PatentsSection.tsx
│   ├── HobbiesSection.tsx
│   ├── DeclarationSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── lib/
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

- **Netlify**: Connect GitHub repo and deploy
- **AWS Amplify**: Use the Next.js SSR template
- **Docker**: Build and deploy as a container

## 📝 License

This project is open source and available for personal and academic use.

## 👤 Author

**Dr. Latika Jindal**
- Email: latika.mehrotra@medicaps.ac.in
- LinkedIn: [Dr. Latika Jindal](https://in.linkedin.com/in/dr-latika-jindal)
- Institution: Medi-Caps University, Indore

---

**Built with ❤️ for Academic Excellence**
