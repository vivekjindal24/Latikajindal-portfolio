# 🔧 Troubleshooting Guide

## Common Issues & Solutions

---

## 1. Installation Issues

### ❌ "npm install" fails

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### ❌ Node version too old

**Error**: "The engine "node" is incompatible..."

**Solution:**
```bash
# Check your Node version
node --version

# Should be v18 or higher. If not, update:
# Using nvm:
nvm install 18
nvm use 18

# Or download from: https://nodejs.org/
```

---

## 2. TypeScript Errors

### ❌ Lots of red squiggly lines in VS Code

**Solution:**
These are expected BEFORE running `npm install`. After installation:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Restart VS Code:
   - Cmd+Shift+P (Mac) or Ctrl+Shift+P (Windows)
   - Type: "Reload Window"

3. If still there, restart TypeScript server:
   - Cmd+Shift+P → "TypeScript: Restart TS Server"

### ❌ "Cannot find module 'react'" errors

**Solution:**
```bash
# Ensure React is installed
npm install react react-dom

# Restart your editor
```

---

## 3. Development Server Issues

### ❌ "Port 3000 is already in use"

**Solution:**

**Option 1** - Use different port:
```bash
PORT=3001 npm run dev
```

**Option 2** - Kill process on port 3000:
```bash
# Mac/Linux:
lsof -ti:3000 | xargs kill -9

# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### ❌ "npm run dev" doesn't work

**Solution:**
```bash
# Make sure you're in the right directory
cd latika-portfolio

# Check if package.json exists
ls package.json

# Try:
npm install
npm run dev
```

---

## 4. Build Issues

### ❌ Build fails with errors

**Solution:**
```bash
# Clean build cache
rm -rf .next

# Rebuild
npm run build
```

### ❌ "Module not found" during build

**Solution:**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 5. Styling Issues

### ❌ Tailwind classes not working

**Solution:**

1. Check `tailwind.config.ts` exists
2. Verify `globals.css` has:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
3. Restart dev server:
   ```bash
   # Ctrl+C to stop, then:
   npm run dev
   ```

### ❌ Colors not showing (navy, gold, etc.)

**Solution:**
The custom colors are defined in `tailwind.config.ts`. Make sure this file exists and hasn't been modified.

---

## 6. Animation Issues

### ❌ Framer Motion animations not working

**Solution:**
```bash
# Ensure Framer Motion is installed
npm install framer-motion

# Restart dev server
```

### ❌ Animations are laggy

**Solution:**
1. Close other browser tabs
2. Check browser DevTools Performance tab
3. Reduce `transition.delay` values in components if needed

---

## 7. Mobile/Responsive Issues

### ❌ Site doesn't look good on mobile

**Solution:**
1. Open DevTools (F12)
2. Click device toolbar icon (Cmd+Shift+M)
3. Test different devices
4. If issues persist, check:
   - Tailwind responsive classes (`md:`, `lg:`)
   - Mobile menu working

---

## 8. Link Issues

### ❌ Smooth scroll not working

**Solution:**
Ensure `globals.css` has:
```css
* {
  scroll-behavior: smooth;
}
```

### ❌ External links don't open

**Check:**
```tsx
// Should have:
target="_blank"
rel="noopener noreferrer"
```

---

## 9. Content Issues

### ❌ Want to update publications/patents

**Solution:**
Edit the arrays in component files:
- Publications: `components/PublicationsSection.tsx`
- Patents: `components/PatentsSection.tsx`
- Certifications: `components/CertificationsSection.tsx`

Example:
```typescript
const publications = [
  {
    title: "Your New Paper Title",
    authors: "Author Names",
    journal: "Journal Name",
    year: "2025",
    doi: "https://doi.org/...",
    type: "International Journal"
  },
  // ... add more
];
```

---

## 10. Deployment Issues

### ❌ Vercel deployment fails

**Common causes:**
1. Build errors (check build logs)
2. Missing dependencies
3. Wrong build command

**Solution:**
```bash
# Test build locally first:
npm run build

# If successful, commit and push:
git add .
git commit -m "Fix build"
git push
```

### ❌ Site shows old version after deploy

**Solution:**
1. Clear browser cache (Cmd+Shift+R)
2. Wait 2-3 minutes for CDN propagation
3. Check Vercel dashboard for deploy status

---

## 11. Git Issues

### ❌ Git not initialized

**Solution:**
```bash
git init
git add .
git commit -m "Initial commit"
```

### ❌ Can't push to GitHub

**Solution:**
```bash
# Set up remote
git remote add origin https://github.com/username/repo.git

# Push
git branch -M main
git push -u origin main
```

---

## 12. Performance Issues

### ❌ Site loads slowly

**Check:**
1. Run Lighthouse audit in Chrome DevTools
2. Optimize images (use WebP format)
3. Check network tab for large files

**Solutions:**
```bash
# Build optimized version
npm run build
npm start

# Should be much faster than dev mode
```

---

## 13. Browser Compatibility

### ❌ Site doesn't work in Safari/Firefox

**Solution:**
Modern browsers (last 2 versions) are supported. Ensure:
1. Browser is up to date
2. JavaScript is enabled
3. Cookies/localStorage enabled

**Supported Browsers:**
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

---

## 14. Contact Form Issues

### ❌ Form doesn't submit

**Note:** The current form is a demo. To make it functional:

**Option 1** - EmailJS (Free):
```bash
npm install @emailjs/browser
```

**Option 2** - Formspree (Free):
```html
<form action="https://formspree.io/f/YOUR_FORM_ID">
```

**Option 3** - API Route:
Create `app/api/contact/route.ts` with email logic

---

## 15. Environment-Specific Issues

### ❌ Works locally but fails on Vercel

**Common causes:**
1. Environment variables missing
2. API routes misconfigured
3. Build optimizations too aggressive

**Solution:**
```bash
# Test production build locally
npm run build
npm start

# Check Vercel logs for specific errors
```

---

## 🆘 Still Having Issues?

### Check These:

1. **Node.js version**: `node --version` (should be 18+)
2. **npm version**: `npm --version` (should be 8+)
3. **Files exist**: All files from project structure present?
4. **Dependencies installed**: `node_modules` folder exists?

### Get Help:

1. **Check logs**:
   ```bash
   # Development logs show in terminal
   npm run dev
   
   # Build logs
   npm run build
   ```

2. **Browser Console**:
   - Open DevTools (F12)
   - Check Console tab for errors

3. **Documentation**:
   - Next.js: [nextjs.org/docs](https://nextjs.org/docs)
   - Tailwind: [tailwindcss.com/docs](https://tailwindcss.com/docs)
   - Framer Motion: [framer.com/motion](https://www.framer.com/motion/)

---

## Quick Reset (Nuclear Option)

If nothing works:

```bash
# Delete everything except source files
rm -rf node_modules .next package-lock.json

# Reinstall
npm install

# Try again
npm run dev
```

---

## System Requirements

**Minimum:**
- Node.js 18+
- npm 8+
- 2GB RAM
- Modern browser

**Recommended:**
- Node.js 20+
- npm 10+
- 4GB+ RAM
- Chrome/Edge browser
- SSD storage

---

**Most issues resolve with a fresh `npm install` and restarting the dev server! 🎉**
