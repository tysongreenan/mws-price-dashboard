# Webflow Integration Guide

## Overview
This guide will help you integrate the Bin Rental Pricing Dashboard into your Webflow project.

## Files Included

1. **webflow-head.html** - CDN links (add to Head Code)
2. **webflow-custom-css.css** - Custom styles (add to Head Code)
3. **webflow-tailwind-config.js** - Tailwind configuration (add to Head Code)
4. **webflow-body-content.html** - HTML content (add to page via Embed element)
5. **webflow-main-script.js** - Main JavaScript with data (add to Footer Code)

## Step-by-Step Integration

### Step 1: Add CDN Links to Head Code

1. Go to **Project Settings** > **Custom Code**
2. In the **Head Code** section, paste the contents of `webflow-head.html`
3. This includes:
   - TailwindCSS CDN
   - Chart.js CDN
   - Chart.js Annotation Plugin
   - Google Fonts (Plus Jakarta Sans)

### Step 2: Add Custom CSS

1. Still in **Head Code**, add the contents of `webflow-custom-css.css`
2. This adds custom styles for charts, cards, and scrollbars

### Step 3: Add Tailwind Configuration

1. Still in **Head Code**, add the contents of `webflow-tailwind-config.js`
2. This configures TailwindCSS with your brand colors

### Step 4: Add HTML Body Content

1. Go to your Webflow page where you want the dashboard
2. Add an **Embed** element (from the Add panel)
3. Paste the contents of `webflow-body-content.html` into the Embed code
4. This contains all the HTML structure (navigation, sections, charts, table)

**Note:** You may want to break this into sections and use Webflow's native elements where possible for better editing.

### Step 5: Add JavaScript

1. Go back to **Project Settings** > **Custom Code**
2. In the **Footer Code** section, paste the contents of `webflow-main-script.js`
3. This includes all the data and chart initialization logic

### Step 6: Publish and Test

1. Publish your site
2. Test that:
   - Charts render correctly
   - Filters work
   - Data displays properly
   - Page is responsive

## Alternative Approach: Using Webflow Native Elements

Instead of using the full HTML body content, you can:

1. **Use Webflow's native styling** for cards, sections, and layout
2. **Keep only the chart canvas elements** in Embed code
3. **Use Webflow's native text elements** for headings and descriptions
4. **Use Webflow's native form elements** for filters (with custom classes)

### Recommended Structure:

```
Page Structure:
├── Navigation (Webflow Navbar)
├── Section: Market Overview
│   ├── Heading (Webflow Heading)
│   ├── 3 KPI Cards (Webflow Divs with Embed for data)
├── Section: Charts
│   ├── Chart Card 1 (Webflow Div + Embed for canvas)
│   ├── Chart Card 2 (Webflow Div + Embed for canvas)
│   └── ... more charts
├── Section: Data Table
│   ├── Filters (Webflow Form elements)
│   └── Table (Webflow Table or Embed)
└── Footer (Webflow Footer)
```

## Important Notes

### Canvas Elements
All charts use `<canvas>` elements with IDs:
- `gapAnalysisChart`
- `distributionChart`
- `valueMatrixChart`
- `pricingModelChart`
- `locationPriceChart`
- `torontoPriceChart`
- `peelPriceChart`
- `markhamPriceChart`
- `pickeringPriceChart`
- `niagaraPriceChart`
- `atlanticPriceChart`

These must exist in the DOM before the JavaScript runs.

### Data Updates
To update pricing data:
1. Edit `webflow-main-script.js`
2. Find `const databaseData = { ... }`
3. Update the JSON structure
4. Re-publish

### Styling Conflicts
If Webflow's default styles conflict:
- Use `!important` in custom CSS
- Or wrap content in a div with a unique class
- Or use Webflow's native styling instead of TailwindCSS classes

## Troubleshooting

### Charts Not Showing
- Check browser console for errors
- Verify all CDN links are loading
- Ensure canvas elements exist before script runs
- Check that Chart.js is loaded: `console.log(typeof Chart)`

### Styling Issues
- Verify TailwindCSS CDN is loading
- Check for CSS conflicts with Webflow styles
- Use browser DevTools to inspect elements

### Data Not Displaying
- Check JavaScript console for errors
- Verify `databaseData` object is defined
- Check that `processData()` function runs

### Filters Not Working
- Verify event listeners are attached
- Check that filter elements have correct IDs
- Ensure JavaScript runs after DOM is ready

## Performance Optimization

### Lazy Loading Charts
Consider loading charts only when they're visible:
```javascript
// Use Intersection Observer API
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Initialize chart
        }
    });
});
```

### Data Separation
For easier updates, consider:
- Moving data to a separate JSON file
- Loading via fetch() instead of embedding
- Using Webflow CMS for data management

## Support

For issues or questions:
- Check browser console for errors
- Verify all files are added correctly
- Test in incognito mode to rule out cache issues
- Review Chart.js documentation: https://www.chartjs.org/docs/

