# Quick Vercel Deployment Guide

## Option 1: Deploy via Vercel CLI (Fastest)

### Prerequisites
- Node.js installed
- Vercel account (free)

### Steps:

1. **Install Vercel CLI** (if not already installed):
```bash
npm i -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy**:
```bash
vercel
```

4. **Follow prompts**:
   - Set up and deploy? **Y**
   - Which scope? (select your account)
   - Link to existing project? **N**
   - Project name? (press Enter for default)
   - Directory? **./** (press Enter)
   - Override settings? **N**

5. **Done!** You'll get a URL like: `https://your-project.vercel.app`

## Option 2: Deploy via GitHub (Recommended for updates)

### Steps:

1. **Create a GitHub repository**:
   - Go to GitHub and create a new repo
   - Push your files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect settings
   - Click "Deploy"

3. **Done!** Your site will be live automatically

## Option 3: Drag & Drop (Simplest)

1. **Install Vercel CLI**:
```bash
npm i -g vercel
```

2. **Deploy**:
```bash
vercel --prod
```

Or use the Vercel dashboard:
- Go to [vercel.com](https://vercel.com)
- Drag and drop your project folder

## Files Needed

Make sure these files are in your project:
- ✅ `price.html` - Main dashboard file
- ✅ `MWS_Main-Logo.svg` - Logo file
- ✅ `vercel.json` - Deployment config (optional, but recommended)

## Custom Domain (Optional)

After deployment:
1. Go to your project settings in Vercel
2. Click "Domains"
3. Add your custom domain

## Environment Variables

Not needed for this project - everything is self-contained!

## Updating

After making changes:
```bash
vercel --prod
```

Or if connected to GitHub, just push:
```bash
git push
```

Vercel will auto-deploy!

## Troubleshooting

### Logo not showing?
- Make sure `MWS_Main-Logo.svg` is in the same directory as `price.html`
- Check the file path in the HTML: `src="MWS_Main-Logo.svg"`

### 404 errors?
- Check that `vercel.json` routes are correct
- Or rename `price.html` to `index.html`

### Need to update?
- Just run `vercel --prod` again
- Or push to GitHub if connected

