# Mbelmar Enterprises Corporate Website

## Overview

A clean, professional, minimal corporate website designed for Mbelmar Enterprises, a private parent company. The website establishes a legitimate professional online presence while maintaining privacy and discretion.

## Files Included

- `index.html` - Main homepage with hero section and contact form
- `styles.css` - Complete stylesheet with responsive design
- `script.js` - Form validation and interactive functionality
- `privacy.html` - Privacy Policy page
- `logo.jpg` - Company logo (gold lion emblem)
- `README.md` - This file

## Features

### Design Elements
- Sophisticated, minimal corporate aesthetic
- Gold and charcoal color scheme based on company logo
- Plenty of whitespace for premium feel
- Fully responsive (desktop, tablet, mobile)
- Clean typography and professional layout

### Sections
1. **Fixed Header** - Logo and Contact Us navigation
2. **Hero Section** - Centered logo with company name and tagline
3. **Contact Form** - Professional inquiry form with validation
4. **Footer** - Copyright and Privacy Policy link

### Contact Form Fields
- Title (required dropdown)
- Full Name (required)
- Email Address (required, validated)
- Phone Number (optional)
- Reason for Inquiry (required dropdown)
- Message (optional textarea)

### Form Validation
- Real-time field validation
- Email format verification
- Required field enforcement
- Error message display
- Spam protection (rate limiting)

## Deployment Considerations

### IMPORTANT: Backend Integration Required

The current contact form is **frontend-only** and does not actually send emails or store data. Before deploying to production, you must:

1. **Set up a backend API or service** to handle form submissions
2. **Options include:**
   - Custom backend (Node.js, Python, PHP, etc.)
   - Form service providers (Formspree, Netlify Forms, EmailJS, etc.)
   - Serverless functions (AWS Lambda, Vercel, Netlify)

3. **Update `script.js`** to POST data to your backend endpoint instead of the current simulation

### Example Backend Integration

Replace the simulated submission in `script.js` (around line 120) with:

```javascript
// Send to backend API
fetch('https://your-backend-api.com/submit-inquiry', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
})
.then(response => response.json())
.then(data => {
    // Show success message
    form.style.display = 'none';
    successMessage.classList.remove('hidden');
})
.catch(error => {
    console.error('Error:', error);
    alert('There was an error submitting your inquiry. Please try again.');
})
.finally(() => {
    submitBtn.disabled = false;
    submitBtn.textContent = originalBtnText;
});
```

### Security Recommendations

1. **Never expose credentials in frontend code**
2. **Use HTTPS in production**
3. **Implement proper CORS policies**
4. **Add CAPTCHA or reCAPTCHA** to prevent automated spam
5. **Implement rate limiting** on backend
6. **Sanitize all inputs** on the server side
7. **Use environment variables** for API keys and secrets

### Hosting Options

The website can be hosted on:
- Traditional web hosting (cPanel, shared hosting)
- Static site hosts (Netlify, Vercel, GitHub Pages)
- Cloud platforms (AWS S3, Google Cloud, Azure)
- VPS or dedicated servers

### SEO Optimization

Current SEO elements:
- Semantic HTML structure
- Meta descriptions
- Proper heading hierarchy
- Alt text for images
- Fast loading times

Consider adding:
- Sitemap.xml
- robots.txt
- Structured data markup
- Analytics tracking (Google Analytics, etc.)

## Browser Compatibility

Tested and compatible with:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

To update company information:
1. Replace logo.jpg with your logo file (keep the same filename)
2. Update company name in HTML files (search for "Mbelmar Enterprises")
3. Modify colors in styles.css (`:root` CSS variables)
4. Adjust content as needed

## Privacy and Information Disclosure

The website is intentionally minimal and does not disclose:
- Subsidiaries or portfolio companies
- Ownership structure
- Financial information
- Team members or leadership
- Business operations details
- Office locations or addresses

This privacy-focused approach aligns with the requirements for a private parent company.

## Support

For questions about deployment or customization, refer to the documentation of your chosen hosting and backend services.

---

**Note:** This website is ready for local testing but requires backend integration before production deployment.
