# PWA Icons Setup

## Current Status
A placeholder SVG icon has been created (`icon-placeholder.svg`) that you can use as a template.

## Required Icons
The PWA manifest requires the following PNG icons:

- icon-16x16.png
- icon-32x32.png
- icon-72x72.png
- icon-96x96.png
- icon-128x128.png
- icon-144x144.png
- icon-152x152.png
- icon-192x192.png
- icon-384x384.png
- icon-512x512.png

## How to Generate Icons

### Option 1: Use an Online Tool
1. Visit https://www.pwabuilder.com/imageGenerator or https://realfavicongenerator.net/
2. Upload a 512x512 PNG image (you can convert the SVG placeholder first)
3. Download the generated icon pack
4. Place all icons in this `/public/icons/` directory

### Option 2: Use ImageMagick (Command Line)
If you have a 512x512 source image (logo.png):

```bash
# Install ImageMagick first
# Then run these commands:

magick logo.png -resize 16x16 icon-16x16.png
magick logo.png -resize 32x32 icon-32x32.png
magick logo.png -resize 72x72 icon-72x72.png
magick logo.png -resize 96x96 icon-96x96.png
magick logo.png -resize 128x128 icon-128x128.png
magick logo.png -resize 144x144 icon-144x144.png
magick logo.png -resize 152x152 icon-152x152.png
magick logo.png -resize 192x192 icon-192x192.png
magick logo.png -resize 384x384 icon-384x384.png
magick logo.png -resize 512x512 icon-512x512.png
```

### Option 3: Convert the SVG Placeholder
You can convert the provided `icon-placeholder.svg` to PNG at various sizes using:
- Inkscape (free, cross-platform)
- Adobe Illustrator
- Online SVG to PNG converters

## Design Tips
- Keep the design simple and recognizable at small sizes
- Use the kawaii egg theme (yellow/amber colors #f59e0b, #fef3c7)
- Include a cute egg character or timer symbol
- Ensure good contrast for visibility
- Test icons at all sizes to ensure clarity

## Temporary Solution
Until you create custom icons, the app will work but may show broken image icons on mobile devices. The PWA functionality will still work perfectly!
