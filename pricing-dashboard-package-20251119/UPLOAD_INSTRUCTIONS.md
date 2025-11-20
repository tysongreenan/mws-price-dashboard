# Upload Instructions

## What to Upload

### Minimum Required (for basic deployment):
```
price.html
```

### Complete Package (recommended):
```
price.html
DEPLOYMENT_GUIDE.md
DEVELOPER_NOTES.md
README.md
```

## Upload Methods

### Method 1: FTP/SFTP Upload
1. Connect to your web server via FTP client (FileZilla, Cyberduck, etc.)
2. Navigate to your website's root directory (usually `public_html`, `www`, or `htdocs`)
3. Upload `price.html`
4. Access at: `https://yourdomain.com/price.html`

### Method 2: cPanel File Manager
1. Log into cPanel
2. Open File Manager
3. Navigate to `public_html` folder
4. Click "Upload" and select `price.html`
5. Access at: `https://yourdomain.com/price.html`

### Method 3: Command Line (SSH)
```bash
# Upload via SCP
scp price.html username@yourdomain.com:/path/to/public_html/

# Or via SFTP
sftp username@yourdomain.com
put price.html /path/to/public_html/
```

### Method 4: Webflow Custom Code
If deploying to Webflow:
1. Extract the `<body>` content from `price.html`
2. Extract the `<style>` content
3. Extract the `<script>` content
4. Add to Webflow:
   - **Head Code**: Add CSS in Project Settings > Custom Code
   - **Footer Code**: Add JavaScript in Project Settings > Custom Code
   - **Page Content**: Add HTML body content to your page

## After Upload

1. **Test the page**: Visit `https://yourdomain.com/price.html`
2. **Check browser console**: Press F12, look for any errors
3. **Test filters**: Make sure region/material filters work
4. **Test charts**: Verify all charts render correctly

## Troubleshooting

### Page shows blank
- Check browser console for JavaScript errors
- Verify file uploaded completely (check file size)
- Ensure server allows `.html` files

### Charts not showing
- Check internet connection (CDN resources need to load)
- Verify Chart.js CDN URLs are accessible
- Check browser console for CDN loading errors

### Styling looks broken
- Verify TailwindCSS CDN is loading
- Check browser console for CSS errors
- Try clearing browser cache

## File Permissions
Ensure file has read permissions:
```bash
chmod 644 price.html
```

## Renaming to Index
If you want this as your homepage:
1. Upload `price.html`
2. Rename it to `index.html`
3. Access at: `https://yourdomain.com/`

