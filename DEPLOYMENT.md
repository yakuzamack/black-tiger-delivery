# 🚀 GitHub Pages Deployment Guide

## 📋 Prerequisites
- GitHub account
- Git installed on your computer
- Node.js and npm installed

## 🔧 Step-by-Step Setup

### 1. Create GitHub Repository

1. **Go to GitHub.com** and create a new repository
2. **Repository name**: `black-tiger-delivery` 
3. **Make it Public** (required for free GitHub Pages)
4. **Don't initialize** with README (we already have files)

### 2. Connect Local Project to GitHub

```bash
# Navigate to your project
cd "/Users/home/Downloads/Telegram Desktop/index.html"

# Initialize git (if not already done)
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial commit: Black Tiger Delivery website"

# Set main branch
git branch -M main

# Add GitHub remote (REPLACE 'USERNAME' with your GitHub username)
git remote add origin https://github.com/USERNAME/black-tiger-delivery.git

# Push to GitHub
git push -u origin main
```

### 3. Update Configuration

**Replace `USERNAME` with your actual GitHub username in these files:**

1. **package.json** - Lines with homepage URL
2. **vite.config.ts** - Base path configuration  
3. **README.md** - Demo link

### 4. Enable GitHub Pages

1. **Go to your repository** on GitHub
2. **Click Settings** tab
3. **Scroll to "Pages"** in left sidebar
4. **Under Source**: Select **"GitHub Actions"**
5. **Save** - The workflow will trigger automatically

### 5. Automatic Deployment

✅ **Every time you push to `main` branch:**
- GitHub Actions builds the project
- Deploys to GitHub Pages automatically
- Available at: `https://USERNAME.github.io/black-tiger-delivery/`

## 🔄 Making Updates

```bash
# Make your changes to code
# Then commit and push:

git add .
git commit -m "Update: description of changes"
git push

# Website updates automatically in ~2-3 minutes
```

## 🛠️ Manual Deployment (Alternative)

```bash
# Build and deploy manually
npm run deploy

# Or step by step:
npm run build
npx gh-pages -d dist
```

## 🌐 Your Live Website

After setup, your website will be available at:
**https://USERNAME.github.io/black-tiger-delivery/**

Replace `USERNAME` with your GitHub username.

## 🔍 Troubleshooting

### Build Fails
```bash
# Check for errors
npm run build

# Fix any TypeScript or build errors
npm run lint
```

### Pages Not Updating
1. Check **Actions** tab in GitHub repository
2. Look for failed deployments (red X)
3. Click on failed action to see error details

### 404 Error
- Ensure repository is **public**
- Check **Settings → Pages** is configured correctly
- Verify the base path in `vite.config.ts` matches your repo name

### Custom Domain (Optional)
1. **Settings → Pages → Custom domain**
2. **Add your domain** (e.g., `delivery.yoursite.com`)
3. **Enable HTTPS**
4. **Update DNS** to point to GitHub Pages

## 📈 Performance Tips

- **Images**: Optimize images before adding
- **Fonts**: Use font-display: swap
- **Bundle**: Keep dependencies minimal
- **Cache**: GitHub Pages has built-in CDN

## 🔐 Security Notes

- **API Keys**: Never commit sensitive keys
- **Environment Variables**: Use GitHub Secrets for production
- **HTTPS**: Always enabled by default on GitHub Pages

---

**Need help?** Check GitHub Pages documentation or create an issue in your repository.

**🎉 Congratulations!** Your delivery website is now live and auto-deploying!