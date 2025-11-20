# Webflow Integration Files

This folder contains all files needed to integrate the Bin Rental Pricing Dashboard into Webflow.

## Quick Start

1. Read `WEBFLOW_INTEGRATION_GUIDE.md` for detailed instructions
2. Follow the step-by-step integration process
3. Test and publish

## Files

- **webflow-head.html** - CDN links for Head Code
- **webflow-custom-css.css** - Custom styles for Head Code  
- **webflow-tailwind-config.js** - Tailwind config for Head Code
- **webflow-body-content.html** - HTML content for page Embed
- **webflow-main-script.js** - JavaScript for Footer Code
- **WEBFLOW_INTEGRATION_GUIDE.md** - Complete integration instructions

## Integration Order

1. Head Code: CDN links → CSS → Tailwind config
2. Page: Add HTML body content via Embed
3. Footer Code: Add main JavaScript

## Notes

- All dependencies load from CDN (no file uploads needed)
- Data is embedded in the JavaScript file
- Charts require canvas elements to exist in DOM
- Test thoroughly before publishing

