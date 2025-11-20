#!/bin/bash
# Create deployment package

PACKAGE_NAME="pricing-dashboard-package-$(date +%Y%m%d)"
mkdir -p "$PACKAGE_NAME"

# Copy essential files
cp price.html "$PACKAGE_NAME/"
cp DEPLOYMENT_GUIDE.md "$PACKAGE_NAME/"
cp DEVELOPER_NOTES.md "$PACKAGE_NAME/"
cp UPLOAD_INSTRUCTIONS.md "$PACKAGE_NAME/"
cp PACKAGE_CHECKLIST.md "$PACKAGE_NAME/"
cp START_HERE.md "$PACKAGE_NAME/"
cp README.md "$PACKAGE_NAME/"

# Optional: include source data
cp waste-pricing-database.json "$PACKAGE_NAME/" 2>/dev/null || true

echo "✅ Package created: $PACKAGE_NAME/"
echo ""
echo "Files included:"
ls -lh "$PACKAGE_NAME"/
echo ""
echo "To create zip file:"
echo "  zip -r ${PACKAGE_NAME}.zip $PACKAGE_NAME"
