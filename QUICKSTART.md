# 🚀 Quick Start Guide

## Getting Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

This will install:
- Next.js 15 (latest stable)
- React 19 (latest)
- Tailwind CSS 3.4.14
- Framer Motion 11.11 (animations)
- Lucide React 0.454 (icons)
- TypeScript 5.6
- And all other latest dependencies

**All packages are using the latest stable versions - no deprecated packages!**

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Navigate to **http://localhost:3000**

---

## What You'll See

✅ **Complete Portfolio Website** with:
- Sticky navigation bar with smooth scroll
- Hero section with social links
- About section with personal details
- Experience timeline (15+ years)
- Education cards (Ph.D., M.Tech, B.E.)
- Awards & certifications
- 16 research publications with DOI links
- 6 patents
- Contact form
- Responsive design (mobile, tablet, desktop)

---

## Build for Production

```bash
# Create optimized build
npm run build

# Start production server
npm start
```

---

## Customization Tips

### Update Personal Info
Edit components in `/components` folder:
- `HeroSection.tsx` - Name, title, links
- `AboutSection.tsx` - Bio, contact details
- `PublicationsSection.tsx` - Research papers
- `PatentsSection.tsx` - Patent information

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  navy: "#0A192F",    // Change navy color
  gold: "#D4AF37",    // Change gold accent
}
```

### Modify Content
All data is in component files as arrays/objects - easy to edit!

---

## Tech Stack

- **Framework**: Next.js 15.0.3 (App Router)
- **React**: 19.0.0
- **Language**: TypeScript 5.6.3
- **Styling**: Tailwind CSS 3.4.14
- **Animations**: Framer Motion 11.11.17
- **Icons**: Lucide React 0.454.0
- **Font**: Inter (Google Fonts)

**✅ All latest stable versions - No deprecated packages!**

---

## Deployment

### Deploy to Vercel (Free & Easy)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import GitHub repository
4. Click Deploy ✨

Your site will be live at: `https://your-project.vercel.app`

---

## Need Help?

- Check `README.md` for detailed documentation
- All TypeScript errors will resolve after `npm install`
- Contact: latika.mehrotra@medicaps.ac.in

---

**Happy Coding! 🎉**
