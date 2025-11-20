# Deployment Guide for Bin Rental Pricing Dashboard

## Overview
This is a standalone HTML dashboard that displays competitive pricing analysis for waste bin rentals. It's a single-file application that can be deployed to any web server.

## Files Required for Deployment

### Essential Files:
- `price.html` - The main dashboard file (contains everything embedded)

### Optional Files (for reference):
- `waste-pricing-database.json` - Source data file (data is embedded in price.html)
- `MWS_Main-Logo.svg` - Logo file (if you want to update branding)

## Dependencies (All Loaded via CDN - No Installation Needed)

The dashboard uses these external resources (already included in the HTML):
- **TailwindCSS** - via CDN (for styling)
- **Chart.js** - via CDN (for charts)
- **Chart.js Annotation Plugin** - via CDN (for chart annotations)
- **Google Fonts** - Plus Jakarta Sans (for typography)

## Deployment Options

### Option 1: Simple Web Server Upload
1. Upload `price.html` to your web server
2. Rename it to `index.html` if you want it as the default page
3. Access via: `https://yourdomain.com/price.html` or `https://yourdomain.com/`

### Option 2: Webflow Custom Code
If integrating into Webflow:
1. Extract the HTML content (everything inside `<body>`)
2. Extract the CSS (everything inside `<style>`)
3. Extract the JavaScript (everything inside `<script>`)
4. Add to Webflow:
   - CSS: Add to Project Settings > Custom Code > Head Code
   - JavaScript: Add to Project Settings > Custom Code > Footer Code
   - HTML: Add to your page using Embed elements

### Option 3: Static Hosting (Netlify, Vercel, GitHub Pages)
1. Create a new repository/folder
2. Upload `price.html`
3. Configure as static site
4. Deploy

## File Structure
```
/
├── price.html          # Main dashboard (deploy this)
├── waste-pricing-database.json  # Source data (optional)
└── DEPLOYMENT_GUIDE.md  # This file
```

## Technical Details

### Data Storage
- All pricing data is embedded directly in the HTML file (in the `databaseData` JavaScript variable)
- No database or API calls required
- Data is static and updates require editing the HTML file

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- Responsive design (mobile-friendly)

### Performance
- File size: ~300KB (mostly embedded data)
- Loads all dependencies from CDN
- No server-side processing required

## Customization

### Updating Data
1. Edit `price.html`
2. Find the `const databaseData = { ... }` section (around line 459)
3. Update the JSON data structure
4. Save and re-upload

### Updating Branding
1. Search for "Miller Waste" in the HTML to find branding references
2. Update logo path if using custom logo
3. Update color scheme in CSS variables (search for `--brand-` or color codes)

### Updating Styling
- TailwindCSS classes are used throughout
- Custom CSS is in the `<style>` section
- Brand colors can be changed in the CSS variables

## Testing Checklist
- [ ] Page loads without errors
- [ ] Charts render correctly
- [ ] Filters work (Region, Material, Pricing Model)
- [ ] Data table displays correctly
- [ ] Responsive on mobile devices
- [ ] All external CDN resources load

## Support
For questions or issues, refer to:
- Chart.js documentation: https://www.chartjs.org/docs/
- TailwindCSS documentation: https://tailwindcss.com/docs

## Notes for Webflow Developer

### If Converting to Webflow:
1. **Data Management**: Consider moving the embedded JSON data to Webflow CMS or a custom code solution
2. **Styling**: Webflow's built-in styles can replace TailwindCSS classes
3. **Charts**: Chart.js will still work in Webflow via custom code
4. **Performance**: Consider lazy-loading charts if page performance is a concern

### Recommended Approach:
- Keep as standalone HTML file for easiest deployment
- Or extract JavaScript/CSS and integrate into Webflow custom code sections
- Use Webflow's native styling where possible to reduce custom code

