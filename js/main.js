/**
 * AAA Duplication - Main JavaScript
 * Handles navigation, form validation, and interactivity
 */

// ========== Mobile Menu Toggle ==========
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = this.querySelectorAll('span');
            spans.forEach((span, index) => {
                if (navMenu.classList.contains('active')) {
                    if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    if (index === 1) span.style.opacity = '0';
                    if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                }
            });
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const spans = mobileToggle.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                });
            });
        });
    }
});

// ========== Smooth Scrolling ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ========== Contact Form Handling ==========
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            service: document.getElementById('service').value,
            location: document.getElementById('location').value,
            message: document.getElementById('message').value.trim()
        };
        
        // Validate form
        const errors = validateForm(formData);
        
        if (errors.length > 0) {
            showFormMessage(errors.join('<br>'), 'error');
            return;
        }
        
        // Simulate form submission (in production, this would send to a server)
        simulateFormSubmission(formData);
    });
}

// ========== Form Validation ==========
function validateForm(data) {
    const errors = [];
    
    // Name validation
    if (!data.name || data.name.length < 2) {
        errors.push('Please enter a valid name (minimum 2 characters)');
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
        errors.push('Please enter a valid email address');
    }
    
    // Phone validation (if provided)
    if (data.phone) {
        const phoneRegex = /^[\d\s\-\+\(\)]{8,}$/;
        if (!phoneRegex.test(data.phone)) {
            errors.push('Please enter a valid phone number');
        }
    }
    
    // Message validation
    if (!data.message || data.message.length < 10) {
        errors.push('Please enter a message (minimum 10 characters)');
    }
    
    return errors;
}

// ========== Show Form Message ==========
function showFormMessage(message, type) {
    const messageDiv = document.getElementById('formMessage');
    if (messageDiv) {
        messageDiv.className = `form-message ${type}`;
        messageDiv.innerHTML = message;
        
        // Scroll to message
        messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Auto-hide success message after 5 seconds
        if (type === 'success') {
            setTimeout(() => {
                messageDiv.style.display = 'none';
            }, 5000);
        }
    }
}

// ========== Simulate Form Submission ==========
function simulateFormSubmission(data) {
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Show success message
        showFormMessage(
            `<strong>Thank you, ${data.name}!</strong><br>` +
            `We've received your enquiry and will get back to you within 2-4 business hours.<br>` +
            `A copy of your submission has been sent to ${data.email}.`,
            'success'
        );
        
        // Reset form
        contactForm.reset();
        
        // In production, you would send data to a server here:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // })
        // .then(response => response.json())
        // .then(result => { /* handle success */ })
        // .catch(error => { /* handle error */ });
        
        console.log('Form submitted with data:', data);
    }, 1500);
}

// ========== Scroll to Top Button ==========
// Create and add scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #2563eb, #0ea5e9);
    color: white;
    border: none;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
    z-index: 999;
    transition: all 0.3s ease;
`;

document.body.appendChild(scrollTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'flex';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

// Scroll to top on click
scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Hover effect
scrollTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px)';
    this.style.boxShadow = '0 6px 16px rgba(37, 99, 235, 0.5)';
});

scrollTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.4)';
});

// ========== Active Navigation Highlighting ==========
// Highlight active nav item based on current page
window.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath || 
            (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// ========== Animate on Scroll ==========
// Simple intersection observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply to elements that should animate
window.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll(
        '.feature-card, .service-card, .process-step, ' +
        '.location-card, .faq-item, .visit-card, .stat-item'
    );
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ========== Phone Number Formatting ==========
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        // Remove non-numeric characters
        let value = e.target.value.replace(/\D/g, '');
        
        // Format as Australian phone number
        if (value.length > 0) {
            if (value.startsWith('0')) {
                // Format: 0412 345 678
                if (value.length > 4) {
                    value = value.slice(0, 4) + ' ' + value.slice(4);
                }
                if (value.length > 8) {
                    value = value.slice(0, 8) + ' ' + value.slice(8, 11);
                }
            }
        }
        
        e.target.value = value;
    });
}

// ========== Form Field Real-time Validation ==========
const formInputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.hasAttribute('required') && !this.value.trim()) {
            this.style.borderColor = '#ef4444';
        } else {
            this.style.borderColor = '';
        }
    });
    
    input.addEventListener('input', function() {
        if (this.style.borderColor === 'rgb(239, 68, 68)') {
            this.style.borderColor = '';
        }
    });
});

// ========== Pricing Calculator (Optional Enhancement) ==========
// Add a simple calculator to estimate costs
function calculateVideoPrice(quantity) {
    const basePrice = 35.00;
    const discount = quantity >= 10 ? 0.9 : 1;
    return (basePrice * quantity * discount).toFixed(2);
}

// You can extend this for other services as needed

// ========== Console Welcome Message ==========
console.log('%c🎬 AAA Duplication', 'font-size: 24px; font-weight: bold; color: #2563eb;');
console.log('%cProfessional Video Digitisation Services', 'font-size: 14px; color: #64748b;');
console.log('%cCall us: 0419 149 051', 'font-size: 12px; color: #10b981;');
console.log('');
console.log('Website developed with ❤️ using modern web technologies');
