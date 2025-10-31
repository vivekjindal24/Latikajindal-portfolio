# 🌐 Deployment Guide

## Deploy to Vercel (Recommended - Free)

Vercel is the company behind Next.js and provides the best hosting experience.

### Step-by-Step:

1. **Create a GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Dr. Latika Portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/latika-portfolio.git
   git push -u origin main
   ```

2. **Sign up at Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

3. **Import Project**
   - Click "New Project"
   - Select your GitHub repository
   - Click "Deploy"

4. **Done!** 🎉
   - Your site will be live in ~2 minutes
   - URL: `https://your-project.vercel.app`
   - Free SSL certificate included
   - Auto-deploys on every Git push

---

## Deploy to Netlify (Alternative - Free)

### Step-by-Step:

1. **Push to GitHub** (same as above)

2. **Sign up at Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub

3. **Deploy**
   - Click "Add new site"
   - Connect to GitHub
   - Select repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy"

---

## Custom Domain Setup

### On Vercel:

1. Go to Project Settings → Domains
2. Add your domain (e.g., `drlatikajindal.com`)
3. Update DNS records as instructed
4. SSL automatically configured

### Recommended Domain Registrars:
- Namecheap
- Google Domains
- GoDaddy
- Cloudflare

---

## Environment Variables (if needed)

If you add features like contact form with email service:

### In Vercel:
1. Settings → Environment Variables
2. Add variables (e.g., `EMAIL_API_KEY`)
3. Redeploy

### In Code:
```typescript
process.env.EMAIL_API_KEY
```

---

## Performance Tips

✅ **Included in this project**:
- Image optimization (Next.js automatic)
- Code splitting
- Lazy loading
- Minified CSS/JS
- SEO meta tags

### Test Performance:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

---

## Monitoring & Analytics

### Add Google Analytics:

1. **Get Tracking ID** from Google Analytics

2. **Add to `app/layout.tsx`**:
```typescript
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

---

## Post-Deployment Checklist

- [ ] Test all links work
- [ ] Verify responsive design on mobile
- [ ] Check contact form functionality
- [ ] Test page load speed
- [ ] Submit to Google Search Console
- [ ] Add to LinkedIn profile
- [ ] Share on social media

---

## Continuous Deployment

Once connected to Vercel/Netlify:

```bash
# Make changes to your code
git add .
git commit -m "Update publications"
git push

# Site automatically rebuilds and deploys! 🚀
```

---

## Cost

- **Vercel Free Plan**: Perfect for this site
  - Unlimited deployments
  - Auto SSL
  - Global CDN
  - 100GB bandwidth/month

- **Netlify Free Plan**: Also great
  - 100GB bandwidth/month
  - Unlimited deployments

**This portfolio will run FREE on either platform!**

---

## Support

Need help deploying?
- Vercel Docs: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)
- Netlify Docs: [docs.netlify.com](https://docs.netlify.com/)

---

**Your professional academic portfolio will be live in minutes! 🎓✨**
