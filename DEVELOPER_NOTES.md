# Developer Notes - Bin Rental Pricing Dashboard

## Quick Start
1. Open `price.html` in a browser
2. That's it! Everything is self-contained.

## Architecture

### Single-File Application
- All HTML, CSS, and JavaScript in one file
- All data embedded in JavaScript object
- No build process required
- No dependencies to install

### Key Components

#### 1. Data Structure
Located at: `const databaseData = { ... }` (around line 459)

Structure:
```javascript
{
  providers: [
    {
      id: "unique-id",
      name: "Company Name",
      region: "Toronto",
      pricing: {
        "14yd": { basePrice: 300, ... },
        "20yd": { basePrice: 400, ... },
        "40yd": { basePrice: 500, ... }
      },
      pricingModel: "Flat Rate",
      ...
    }
  ]
}
```

#### 2. Data Processing
Function: `processData(databaseData)` (around line 1840)
- Converts raw database structure to chart-friendly format
- Handles different pricing models (flat rate, tonnage cap, etc.)
- Normalizes 15yd bins to 14yd bins
- Extracts fees and additional information

#### 3. Charts
All charts use Chart.js library:
- **Market Overview Cards**: Simple calculations (averages)
- **Location Analysis Chart**: Bar chart with stacked data
- **Value Matrix**: Bubble chart
- **Gap Analysis**: Horizontal bar chart
- **Distribution Chart**: Bubble/scatter chart
- **Pricing Model Chart**: Horizontal bar chart

#### 4. Filtering System
- Region filter: Filters by `location` field
- Material filter: Filters by `p14Materials` field
- Pricing Model filter: Filters by `pricingModel` field

## Key Functions

### `calculateAverage(dataset, key)`
Calculates average price excluding Miller Waste
- Used for market averages
- Filters out null values

### `getMillerPrice(location, size)`
Gets Miller Waste price for specific location/size
- Used for comparison calculations

### `getMillerAvg(key)`
Gets average Miller Waste price across all regions
- Used for Market Overview cards

## Data Updates

### Adding a New Company
Add to `databaseData.providers` array:
```javascript
{
  id: "company-name-region",
  name: "Company Name",
  region: "Toronto",
  pricing: {
    "14yd": { basePrice: 300 },
    "20yd": { basePrice: 400 },
    "40yd": { basePrice: 500 }
  },
  pricingModel: "Flat Rate",
  sourceUrl: "https://example.com"
}
```

### Updating Prices
1. Find the provider in `databaseData.providers`
2. Update `pricing[binSize].basePrice`
3. Save and refresh

### Adding a New Region
1. Add region name to filter dropdown (HTML)
2. Add to `locationMeta` object in JavaScript
3. Ensure data uses correct region name

## Common Issues

### Charts Not Rendering
- Check browser console for errors
- Verify Chart.js CDN is loading
- Ensure canvas elements exist in DOM

### Data Not Showing
- Check `processData` function is running
- Verify data structure matches expected format
- Check for JavaScript errors in console

### Filters Not Working
- Verify filter event listeners are attached
- Check filter values match data values
- Ensure `updateCharts()` is called after filtering

## Performance Considerations

### Current Implementation
- All data loaded upfront
- All charts rendered on page load
- No lazy loading

### Optimization Opportunities
- Lazy load charts below fold
- Debounce filter inputs
- Virtualize large data tables
- Cache calculations

## Browser Support
- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- IE11: Not supported (uses modern JavaScript)

## File Size
- HTML file: ~300KB
- Most of size is embedded JSON data
- External resources loaded from CDN

## Security Notes
- No user input validation needed (read-only)
- No API calls (all data embedded)
- No sensitive data exposure
- XSS protection: Data is static, not user-generated

