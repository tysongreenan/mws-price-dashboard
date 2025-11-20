# Bin Rental Pricing Research Dashboard

A comprehensive pricing intelligence dashboard for waste bin rental market analysis.

## Features

- **Market Overview**: Average pricing across all regions for 14yd, 20yd, and 40yd bins
- **Location Analysis**: Regional pricing comparisons with interactive charts
- **Value Matrix**: Visual comparison of price vs. included weight
- **Gap Analysis**: Miller Waste pricing vs. market average
- **Price Distribution**: Scatter plot showing market positioning
- **Pricing Models**: Most popular pricing model by region
- **Interactive Filters**: Filter by region, material type, and pricing model
- **Detailed Data Table**: Complete competitor pricing data

## Quick Start

1. Open `price.html` in any modern web browser
2. No installation or setup required - everything is self-contained

## Files

- `price.html` - Main dashboard (deploy this file)
- `waste-pricing-database.json` - Source data file
- `DEPLOYMENT_GUIDE.md` - Deployment instructions
- `DEVELOPER_NOTES.md` - Technical documentation

## Dependencies

All dependencies are loaded via CDN (no installation needed):
- TailwindCSS (styling)
- Chart.js (charts)
- Chart.js Annotation Plugin (chart labels)

## Deployment

See `DEPLOYMENT_GUIDE.md` for detailed deployment instructions.

## Data Updates

To update pricing data:
1. Edit `price.html`
2. Find `const databaseData = { ... }` (around line 459)
3. Update the JSON structure
4. Save and re-upload

## Browser Support

- Chrome/Edge: ✅
- Firefox: ✅
- Safari: ✅
- IE11: ❌

## License

Internal use only.
