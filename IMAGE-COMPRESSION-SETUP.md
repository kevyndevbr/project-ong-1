# Image Compression Configuration Guide

## Overview
This guide provides instructions for compressing images in the Ong Sport project.

## Supported Formats
- PNG (Portable Network Graphics) - Lossless compression
- JPEG (JPG) - Lossy compression
- WebP - Modern format with better compression
- GIF - Animated or static

## Compression Methods

### Method 1: Using ImageMagick (convert command)
```bash
# Install ImageMagick
sudo apt-get install imagemagick

# Compress JPEG with 85% quality
convert input.jpg -quality 85 output.jpg

# Compress PNG
convert input.png -strip output.png
```

### Method 2: Using OptiPNG for PNG
```bash
sudo apt-get install optipng
optipng -o2 image.png
```

### Method 3: Using cjpeg for JPEG
```bash
sudo apt-get install libjpeg-turbo-progs
cjpeg -quality 85 input.jpg > output.jpg
```

### Method 4: Convert to WebP (Modern & Efficient)
```bash
sudo apt-get install webp
cwebp input.jpg -o output.webp -q 80
```

## Automated Compression Script

Create a batch compression script:

```bash
#!/bin/bash
for file in *.jpg; do convert "$file" -quality 85 "compressed_$file"; done
for file in *.png; do optipng -o2 "$file"; done
```

## Best Practices

1. Always backup original images
2. Use lossy compression (JPEG) for photographs
3. Use lossless compression (PNG) for graphics with text
4. Consider WebP for modern browsers (with fallbacks)
5. Resize images before compression
6. Use appropriate quality levels:
   - JPEG quality 75-85 for photos
   - PNG optimization level 2 for graphics
   - WebP quality 75-80 for web

## Configuration in HTML/CSS

Update image tags to support modern formats:
```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description" loading="lazy">
</picture>
```

