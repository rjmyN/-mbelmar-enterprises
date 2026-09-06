// Form Validation and Submission Handler
document.addEventListener('DOMContentLoaded', function() {
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
        field.addEventListener('blur', function() {
            if (this.value.trim() || this.hasAttribute('required')) {
                validateField(this);
            }
        });

        // Clear error on input
        field.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                this.classList.remove('error');
                const errorElement = document.getElementById(this.id + 'Error');
                if (errorElement) {
                    errorElement.style.display = 'none';
                }
            }
        });
    });

    // Form submission handler
    form.addEventListener('submit', function(e) {
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

        // Collect form data
        const formData = {
            title: document.getElementById('title').value,
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            reason: document.getElementById('reason').value,
            message: document.getElementById('message').value,
            timestamp: new Date().toISOString(),
            honeypot: '' // Anti-spam field (would be hidden in production)
        };

        // Basic spam protection - check submission frequency
        const lastSubmission = localStorage.getItem('lastSubmission');
        const now = Date.now();
        
        if (lastSubmission && (now - parseInt(lastSubmission)) < 60000) {
            alert('Please wait before submitting another inquiry.');
            return;
        }

        // Disable submit button
        const submitBtn = form.querySelector('.submit-btn');
        const originalBtnText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';

        // Simulate form submission (in production, this would POST to a backend API)
        setTimeout(() => {
            // Store submission time
            localStorage.setItem('lastSubmission', now.toString());

            // Log form data (in production, this would be sent to server)
            console.log('Form submitted:', formData);

            // Hide form and show success message
            form.style.display = 'none';
            successMessage.classList.remove('hidden');

            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Reset form and button after delay
            setTimeout(() => {
                form.reset();
                form.style.display = 'block';
                successMessage.classList.add('hidden');
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            }, 5000);

        }, 1000);
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
});
