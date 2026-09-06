# Quick Start Guide

## View the Website Locally

### Option 1: Double-Click (Simplest)
1. Navigate to: `c:\Users\USER\OneDrive\Desktop\Mbelmer Enterprises`
2. Double-click `index.html`
3. The website will open in your default browser

### Option 2: Use Live Server (Recommended for Development)
If you have VS Code with Live Server extension:
1. Open the folder in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"
4. The site will open with auto-refresh on changes

### Option 3: Python Simple Server
If you have Python installed:
```powershell
cd "c:\Users\USER\OneDrive\Desktop\Mbelmer Enterprises"
python -m http.server 8000
```
Then open: http://localhost:8000

### Option 4: Node.js http-server
If you have Node.js installed:
```powershell
npx http-server "c:\Users\USER\OneDrive\Desktop\Mbelmer Enterprises" -p 8000
```
Then open: http://localhost:8000

## Testing the Website

### Desktop Testing
1. Open `index.html` in your browser
2. Check the header navigation
3. Scroll to view the hero section with logo
4. Click "Contact Us" to navigate to the form
5. Test form validation by:
   - Trying to submit empty form (should show errors)
   - Entering invalid email (should show error)
   - Filling out correctly and submitting

### Mobile Testing
1. Open browser developer tools (F12)
2. Toggle device toolbar (Ctrl+Shift+M in Chrome/Edge)
3. Select different device sizes:
   - iPhone SE (375px)
   - iPhone 12/13 (390px)
   - iPad (768px)
   - iPad Pro (1024px)
4. Test navigation and form on each size

### What to Check
- ✓ Logo displays clearly and scales properly
- ✓ Header remains fixed when scrolling
- ✓ Contact form validates inputs correctly
- ✓ Success message appears after submission
- ✓ Privacy Policy link works
- ✓ All text is readable
- ✓ Layout looks professional on all devices

## Next Steps

### Before Going Live
1. **Backend Integration** - Set up email/database backend for contact form
2. **Domain Setup** - Register and configure your domain name
3. **SSL Certificate** - Ensure HTTPS is enabled
4. **Email Configuration** - Set up where form submissions should be sent
5. **Analytics** - Add tracking if desired (Google Analytics, etc.)
6. **Final Review** - Check all content is accurate

### Customization
- Update company name if needed (currently: "Mbelmar Enterprises")
- Adjust colors in `styles.css` if desired
- Modify form fields in `index.html` if needed
- Update Privacy Policy with specific details

## Troubleshooting

### Logo Not Displaying
- Ensure `logo.jpg` is in the same folder as `index.html`
- Check file name matches exactly (case-sensitive on some servers)

### Form Not Submitting
- This is expected - backend integration required (see README.md)
- The form will show success message but won't actually send emails yet

### Styles Not Loading
- Ensure `styles.css` is in the same folder as `index.html`
- Clear browser cache (Ctrl+Shift+R)

### Mobile View Issues
- Test in actual mobile devices when possible
- Use browser developer tools device emulation

## File Structure
```
Mbelmer Enterprises/
├── index.html          # Main homepage
├── privacy.html        # Privacy policy page
├── styles.css          # All styling
├── script.js           # Form validation & interactivity
├── logo.jpg            # Company logo
├── README.md           # Full documentation
└── QUICK_START.md      # This file
```

## Support Resources
- HTML/CSS reference: https://developer.mozilla.org/
- Web hosting guides: https://www.netlify.com/blog/
- Form backends: https://formspree.io/, https://www.emailjs.com/

---

**Ready to view?** Just double-click `index.html` to get started!
