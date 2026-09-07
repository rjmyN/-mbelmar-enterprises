// Form Validation and Submission Handler with Formspree
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Phone validation regex (basic international format)
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;

    // Form field validation
    function validateField(field) {
        const fieldId = field.id;
        const errorElement = document.getElementById(fieldId + 'Error');
        let isValid = true;
        let errorMessage = '';

        // Clear previous error
        field.classList.remove('error');
        if (errorElement) {
            errorElement.style.display = 'none';
            errorElement.textContent = '';
        }

        // Check required fields
        if (field.hasAttribute('required') && !field.value.trim()) {
            isValid = false;
            errorMessage = 'This field is required.';
        }
        // Email validation
        else if (fieldId === 'email' && field.value.trim()) {
            if (!emailRegex.test(field.value.trim())) {
                isValid = false;
                errorMessage = 'Please enter a valid email address.';
            }
        }
        // Phone validation (if provided)
        else if (fieldId === 'phone' && field.value.trim()) {
            if (!phoneRegex.test(field.value.trim())) {
                isValid = false;
                errorMessage = 'Please enter a valid phone number.';
            }
        }

        // Display error if validation failed
        if (!isValid && errorElement) {
            field.classList.add('error');
            errorElement.textContent = errorMessage;
            errorElement.style.display = 'block';
        }

        return isValid;
    }

    // Validate all form fields
    function validateForm() {
        const title = document.getElementById('title');
        const fullName = document.getElementById('fullName');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const reason = document.getElementById('reason');

        let isValid = true;

        // Validate each required field
        if (!validateField(title)) isValid = false;
        if (!validateField(fullName)) isValid = false;
        if (!validateField(email)) isValid = false;
        if (!validateField(reason)) isValid = false;

        // Validate phone only if it has a value
        if (phone.value.trim()) {
            if (!validateField(phone)) isValid = false;
        }

        return isValid;
    }

    // Real-time validation on blur
    const formFields = form.querySelectorAll('input, select, textarea');
    formFields.forEach(field => {
        field.addEventListener('blur', function () {
            if (this.value.trim() || this.hasAttribute('required')) {
                validateField(this);
            }
        });

        // Clear error on input
        field.addEventListener('input', function () {
            if (this.classList.contains('error')) {
                this.classList.remove('error');
                const errorElement = document.getElementById(this.id + 'Error');
                if (errorElement) {
                    errorElement.style.display = 'none';
                }
            }
        });
    });

    // Form submission handler with Formspree
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Validate form
        if (!validateForm()) {
            // Scroll to first error
            const firstError = form.querySelector('.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstError.focus();
            }
            return;
        }

        // Disable submit button
        const submitBtn = form.querySelector('.submit-btn');
        const originalBtnText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';

        // Submit to Formspree
        const formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    // Hide form and show success message
                    form.style.display = 'none';
                    successMessage.classList.remove('hidden');
                    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

                    // Reset form after delay
                    setTimeout(() => {
                        form.reset();
                        form.style.display = 'block';
                        successMessage.classList.add('hidden');
                        submitBtn.disabled = false;
                        submitBtn.textContent = originalBtnText;
                    }, 5000);
                } else {
                    throw new Error('Form submission failed');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error submitting your inquiry. Please try again or contact us directly at admin@belmarenterprises.com');
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll effect (subtle shadow on scroll)
    let lastScroll = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
        } else {
            header.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });

    // Remove Netlify Badge
    function removeNetlifyBadge() {
        // Remove by various selectors
        const selectors = [
            'a[href*="netlify"]',
            '.netlify-badge',
            '[class*="netlify"]',
            '[id*="netlify"]',
            'a[href="https://www.netlify.com"]',
            'a[href="https://netlify.com"]'
        ];

        selectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => {
                el.remove();
            });
        });

        // Check for any fixed positioned links at bottom
        const allLinks = document.querySelectorAll('a');
        allLinks.forEach(link => {
            const styles = window.getComputedStyle(link);
            if (styles.position === 'fixed' && link.href.includes('netlify')) {
                link.remove();
            }
        });
    }

    // Run immediately and after page load
    removeNetlifyBadge();
    window.addEventListener('load', removeNetlifyBadge);

    // Keep checking for 5 seconds (in case badge loads later)
    let checkCount = 0;
    const badgeInterval = setInterval(() => {
        removeNetlifyBadge();
        checkCount++;
        if (checkCount > 10) {
            clearInterval(badgeInterval);
        }
    }, 500);
});

// Additional aggressive Netlify badge removal for mobile
(function () {
    'use strict';

    function aggressiveRemoveBadge() {
        // Get all elements
        document.querySelectorAll('*').forEach(function (el) {
            try {
                // Check text content
                var text = el.textContent || el.innerText || '';
                var href = el.href || '';

                // If contains netlify or powered by
                if (text.toLowerCase().includes('netlify') ||
                    text.toLowerCase().includes('powered by netlify') ||
                    href.includes('netlify.com')) {

                    // Check if it's positioned (likely a badge)
                    var style = window.getComputedStyle(el);
                    if (style.position === 'fixed' || style.position === 'absolute') {
                        if (el.parentNode) {
                            el.parentNode.removeChild(el);
                        }
                    }
                }
            } catch (e) { }
        });
    }

    // Run on load
    aggressiveRemoveBadge();
    window.addEventListener('load', aggressiveRemoveBadge);
    document.addEventListener('DOMContentLoaded', aggressiveRemoveBadge);

    // Keep running for 15 seconds
    for (var i = 0; i < 30; i++) {
        setTimeout(aggressiveRemoveBadge, i * 500);
    }

    // Watch for new elements being added
    if (typeof MutationObserver !== 'undefined') {
        var observer = new MutationObserver(aggressiveRemoveBadge);
        observer.observe(document.documentElement, {
            childList: true,
            subtree: true
        });
    }
})();
