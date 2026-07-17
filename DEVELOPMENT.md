# Development Guide - F2F Coaching Group Website

## Project Structure

```
f2f-coaching-group-main/
├── index.html                 # Homepage
├── components/
│   ├── navbar.html           # Shared navigation (loaded dynamically)
│   └── footer.html           # Shared footer (loaded dynamically)
├── pages/
│   ├── about.html            # About Us page
│   ├── coaches.html          # Meet Our Coaches page
│   ├── services.html         # Services page
│   ├── pricing.html          # Pricing page
│   ├── contact.html          # Contact / Booking page
│   ├── testimonials.html     # Testimonials page
│   ├── documents.html        # Document downloads
│   ├── private-coaching.html # Private coaching info
│   └── usbc-silver.html      # USBC Silver Lesson info
├── assets/
│   ├── css/
│   │   └── styles.css        # Main stylesheet (centralized)
│   ├── js/
│   │   ├── loadComponents.js # Dynamically loads navbar/footer
│   │   ├── announcement.js   # Announcement banner
│   │   └── testimonials.js   # Testimonials functionality
│   ├── img/                  # Images and logo
│   └── data/
│       └── testimonials.json # Testimonials data
├── README.md                 # Project overview
└── DEVELOPMENT.md            # This file
```

## CSS Organization

All styles are centralized in `assets/css/styles.css` with clear section comments:

### CSS Sections:
- **:root** - Design tokens (colors, spacing, typography, transitions)
- **RESET & BASE STYLES** - Global element resets
- **TYPOGRAPHY** - Heading and text styles
- **LAYOUT UTILITIES** - Container and grid utilities
- **BUTTONS** - Button styles (.btn, .btn-primary, .btn-outline, etc.)
- **CARDS** - Card component styling
- **UTILITY CLASSES** - Helper classes (.text-center, .mb-lg, etc.)
- **NAVBAR** - Navigation bar styles
- **HERO SECTION** - Hero banner styles
- **PAGE HEADER** - Shared page header styles
- **CTA SECTION** - Call-to-action sections
- **PRICING PAGE STYLES** - Pricing page specific styles
- **SERVICES PAGE STYLES** - Services page specific styles
- **CONTACT PAGE STYLES** - Contact page specific styles
- **UTILITY HELPER CLASSES** - Additional utility classes

### Design Tokens:
```css
Colors:        --navy-deep, --navy-medium, --navy-light, --silver, --red-primary
Spacing:       --spacing-xs, --spacing-sm, --spacing-md, --spacing-lg, --spacing-xl, --spacing-2xl
Typography:    --font-primary (Segoe UI), --font-heading (Arial Black)
Transitions:   --transition-fast (0.2s), --transition-normal (0.3s), --transition-slow (0.5s)
```

## JavaScript Organization

### loadComponents.js
Handles dynamic loading of shared components:
- Detects current page depth (root vs /pages/)
- Loads navbar and footer components
- Sets active navigation link
- Updates copyright year dynamically

**Usage:** Automatically runs on page load. Every page has:
```html
<div id="navbar-placeholder"></div>
<!-- Page content -->
<div id="footer-placeholder"></div>
<script src="/assets/js/loadComponents.js"></script>
```

### Other Scripts
- **announcement.js** - Manages announcement banner
- **testimonials.js** - Handles testimonials carousel/display

## HTML Best Practices

### Page Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title - F2F Coaching Group</title>
    <link rel="stylesheet" href="../assets/css/styles.css">
</head>
<body>
    <div id="navbar-placeholder"></div>
    
    <!-- Page content sections -->
    <section class="page-header">
        <div class="container">
            <h1>Page Title</h1>
            <p class="page-subtitle">Subtitle text</p>
        </div>
    </section>
    
    <section class="container">
        <!-- Content -->
    </section>
    
    <div id="footer-placeholder"></div>
    <script src="/assets/js/loadComponents.js"></script>
</body>
</html>
```

### Key Points:
- **No inline styles** - All styling goes in CSS file with proper section comments
- **Use CSS classes** - Reference design tokens via CSS variables
- **Component comments** - Add HTML comments explaining component purpose
- **Relative paths in /pages/** - Use `../` for assets in subdirectory pages
- **Absolute paths in root** - Use `/` for root-level pages

## Adding New Pages

1. **Create HTML file** in appropriate directory (/pages/ or root)
2. **Add navbar/footer placeholders**:
   ```html
   <div id="navbar-placeholder"></div>
   <!-- Page content -->
   <div id="footer-placeholder"></div>
   <script src="/assets/js/loadComponents.js"></script>
   ```
3. **Use CSS classes** from styles.css (no inline styles)
4. **If page needs unique styles**:
   - Add section to styles.css with `/* Page Name STYLES */` comment
   - Include reference comment in HTML head
5. **Update navbar** in `components/navbar.html` to link to new page
6. **Test relative paths** - Verify all links work from both root and /pages/

## Common CSS Classes

### Layout
- `.container` - Max-width wrapper (1200px)
- `.container-wide` - Wider wrapper (1400px)
- `.page-header` - Page title section

### Spacing
- `.mb-sm`, `.mb-md`, `.mb-lg`, `.mb-xl` - Margin bottom
- `.mt-sm`, `.mt-md`, `.mt-lg`, `.mt-xl` - Margin top

### Text
- `.text-center` - Center aligned text
- `.text-navy`, `.text-red`, `.text-silver` - Text colors

### Components
- `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-outline` - Buttons
- `.card` - Card component
- `.section-heading-center` - Centered heading
- `.link-emphasis` - Emphasized link styling

## Color Palette

| Color | Variable | Hex |
|-------|----------|-----|
| Navy Deep | --navy-deep | #0a1e3d |
| Navy Medium | --navy-medium | #1a3a5c |
| Navy Light | --navy-light | #2d4a6f |
| Red Primary | --red-primary | #d32f2f |
| Red Dark | --red-dark | #b71c1c |
| Red Light | --red-light | #ef5350 |
| Silver | --silver | #c0c0c0 |
| Silver Light | --silver-light | #e8e8e8 |
| Silver Dark | --silver-dark | #a0a0a0 |

## Maintenance Tips

1. **Keep styles organized** - Add CSS sections with comments for new page-specific styles
2. **Use CSS variables** - Reference design tokens, don't hardcode values
3. **Avoid inline styles** - Everything should go in styles.css
4. **Test component loading** - Verify navbar/footer load correctly on all pages
5. **Update navbar links** - When adding new pages, update components/navbar.html
6. **Test relative paths** - Ensure paths work from both root and /pages/ directories
7. **Use semantic HTML** - Proper heading hierarchy and semantic elements

## Deployment Notes

- All files are static HTML/CSS/JS - no build process needed
- Uses relative paths that work with GitHub Pages
- Component loading via fetch() requires CORS headers on some servers
- CSS is minification-ready if needed for production

## Recent Improvements (Code Cleanup)

- ✅ Extracted all inline styles to main CSS file
- ✅ Created organized CSS sections with clear comments
- ✅ Added utility helper classes for common patterns
- ✅ Improved JavaScript documentation with JSDoc-style comments
- ✅ Added component explanations in HTML files
- ✅ Removed BYOL references from pricing
- ✅ Unified component structure across all pages
