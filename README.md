# MWS Market Intelligence Dashboard

A comprehensive pricing intelligence dashboard for waste bin rental market analysis.

## 🚀 Quick Start

This is a self-contained HTML dashboard - no build process required!

### View Locally
Simply open `price.html` in your web browser.

### Deploy to Vercel
```bash
npm i -g vercel
vercel
```

## 📁 Files

- `price.html` - Main dashboard (all-in-one file)
- `MWS_Main-Logo.svg` - Miller Waste Systems logo
- `vercel.json` - Vercel deployment configuration
- `package.json` - Project metadata

## ✨ Features

- **Market Overview**: Average pricing across all regions
- **Regional Analysis**: Location-based price comparisons
- **Gap Analysis**: Miller Waste vs. market average
- **Value Matrix**: Price vs. included weight analysis
- **Interactive Charts**: Filter by region, material, pricing model
- **PDF Export**: Optimized for print/export

## 🛠️ Technology

- **TailwindCSS** (via CDN)
- **Chart.js** (via CDN)
- **Vanilla JavaScript**
- No dependencies to install

## 📊 Data

All pricing data is embedded in the HTML file. To update:
1. Edit `price.html`
2. Find `const databaseData = { ... }` (around line 459)
3. Update the JSON structure
4. Save and redeploy

## 🔗 Deployment

### Vercel (Recommended)
```bash
vercel
```

### Other Platforms
Upload `price.html` and `MWS_Main-Logo.svg` to any static hosting service.

## 📝 License

Internal use only - Miller Waste Systems
