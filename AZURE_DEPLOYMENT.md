# Deploy to Azure Static Web Apps

This guide will help you deploy Dr. Latika Jindal's portfolio to Azure Static Web Apps.

## Prerequisites

- Azure account ([Create free account](https://azure.microsoft.com/free/))
- GitHub repository already set up ✅
- Azure CLI (optional, for command-line deployment)

## Deployment Methods

### Method 1: Azure Portal (Recommended for Beginners)

#### Step 1: Configure Next.js for Static Export

The project is already configured, but ensure `next.config.js` has:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```

#### Step 2: Create Azure Static Web App

1. **Login to Azure Portal**
   - Go to [portal.azure.com](https://portal.azure.com)
   - Sign in with your Microsoft account

2. **Create New Resource**
   - Click "Create a resource"
   - Search for "Static Web App"
   - Click "Create"

3. **Configure Basic Settings**
   - **Subscription**: Select your Azure subscription
   - **Resource Group**: Create new (e.g., `rg-latika-portfolio`)
   - **Name**: `latika-jindal-portfolio` (this will be part of your URL)
   - **Plan type**: Free (perfect for portfolio sites)
   - **Region**: Choose closest to your target audience (e.g., Central US, East Asia)

4. **Configure Deployment**
   - **Source**: GitHub
   - Click "Sign in with GitHub" and authorize Azure
   - **Organization**: vivekjindal24
   - **Repository**: Latikajindal-portfolio
   - **Branch**: main

5. **Build Configuration**
   - **Build Presets**: Next.js
   - **App location**: `/` (root)
   - **Api location**: (leave empty)
   - **Output location**: `out`

6. **Review and Create**
   - Click "Review + Create"
   - Click "Create"

#### Step 3: Wait for Deployment

- Azure will automatically:
  - Add a GitHub Actions workflow to your repository
  - Build your Next.js site
  - Deploy to Azure Static Web Apps
- First deployment takes 2-5 minutes
- You'll get a URL like: `https://latika-jindal-portfolio.azurestaticapps.net`

---

### Method 2: Azure CLI (Advanced)

```bash
# Install Azure CLI (if not installed)
# macOS
brew install azure-cli

# Login to Azure
az login

# Create resource group
az group create --name rg-latika-portfolio --location centralus

# Create Static Web App
az staticwebapp create \
  --name latika-jindal-portfolio \
  --resource-group rg-latika-portfolio \
  --source https://github.com/vivekjindal24/Latikajindal-portfolio \
  --location centralus \
  --branch main \
  --app-location "/" \
  --output-location "out" \
  --login-with-github
```

---

### Method 3: VS Code Extension

1. **Install Extension**
   - Install "Azure Static Web Apps" extension in VS Code

2. **Sign in to Azure**
   - Click Azure icon in sidebar
   - Sign in to your Azure account

3. **Create Static Web App**
   - Right-click on Static Web Apps
   - Select "Create Static Web App..."
   - Follow the prompts:
     - Name: `latika-jindal-portfolio`
     - Region: Choose your preferred region
     - Build preset: Next.js
     - App location: `/`
     - Output location: `out`

---

## Post-Deployment Steps

### 1. Verify Deployment

- Visit your deployed site: `https://<your-app-name>.azurestaticapps.net`
- Check all sections load correctly
- Test navigation and responsiveness

### 2. Configure Custom Domain (Optional)

1. Go to Azure Portal → Your Static Web App
2. Click "Custom domains" in the left menu
3. Click "Add"
4. Enter your domain (e.g., `www.latikajindal.com`)
5. Follow DNS configuration instructions
6. Azure will automatically provision SSL certificate

### 3. Monitor Your Site

- **View Logs**: Azure Portal → Your App → "Deployment History"
- **Check Analytics**: Azure Portal → "Application Insights" (if enabled)

---

## GitHub Actions Workflow

After creating the Azure Static Web App, a workflow file will be added to:
`.github/workflows/azure-static-web-apps-*.yml`

This workflow automatically:
- Triggers on every push to `main` branch
- Builds your Next.js app
- Deploys to Azure
- Runs on every pull request (preview deployments)

---

## Build Configuration

Your `package.json` should have these scripts (already configured):

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "export": "next export"
  }
}
```

---

## Environment Variables (If Needed)

If you need environment variables:

1. Go to Azure Portal → Your Static Web App
2. Click "Configuration" in left menu
3. Add variables under "Application settings"
4. Prefix with `NEXT_PUBLIC_` for client-side access

---

## Troubleshooting

### Build Fails

**Error**: `Module not found`
- **Solution**: Ensure all dependencies are in `package.json`
- Run `npm install` locally to verify

**Error**: `Output directory not found`
- **Solution**: Check `output_location` is set to `out` in workflow
- Verify `next.config.js` has `output: 'export'`

### 404 Errors

- **Solution**: Ensure `staticwebapp.config.json` is in root directory
- Check navigation fallback configuration

### Slow Load Times

- **Solution**: Enable Azure CDN in Static Web App settings
- Optimize images (already configured with `unoptimized: true`)

---

## Costs

- **Free Tier Includes**:
  - 100 GB bandwidth/month
  - 0.5 GB storage
  - Free SSL certificate
  - Custom domains
  - Perfect for portfolio sites!

- **Standard Tier** ($9/month):
  - 100 GB bandwidth included
  - Additional bandwidth: $0.20/GB

---

## Useful Commands

```bash
# View deployment status
az staticwebapp show --name latika-jindal-portfolio --resource-group rg-latika-portfolio

# List all static web apps
az staticwebapp list --output table

# Delete static web app
az staticwebapp delete --name latika-jindal-portfolio --resource-group rg-latika-portfolio
```

---

## Next Steps After Deployment

1. ✅ **Share the URL** with Dr. Latika Jindal
2. ✅ **Set up custom domain** (optional)
3. ✅ **Enable Application Insights** for analytics
4. ✅ **Configure alerts** for downtime monitoring
5. ✅ **Add the URL to LinkedIn** and other profiles

---

## Support

- Azure Static Web Apps Docs: https://docs.microsoft.com/azure/static-web-apps/
- Next.js Static Export: https://nextjs.org/docs/app/building-your-application/deploying/static-exports
- GitHub Actions: https://docs.github.com/actions

---

**Your site will be live at**: `https://latika-jindal-portfolio.azurestaticapps.net`

*(Actual URL will be provided after deployment)*
