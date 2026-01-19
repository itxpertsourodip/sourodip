// ===== main.js =====

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    // Initialize mobile menu toggle
    initMobileMenu();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
});

// ===== MOBILE MENU TOGGLE =====
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
            
            // Toggle body scroll
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
}

// ===== SMOOTH SCROLLING =====
function initSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#" or external link
            if (href === '#' || href.startsWith('#!')) return;
            
            // Check if it's an on-page anchor
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const header = document.querySelector('.header');
                    const headerHeight = header ? header.offsetHeight : 80;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ===== CONTACT FORM HANDLING =====
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form
            if (!validateContactForm()) {
                return;
            }
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span>Sending...</span>';
            submitBtn.disabled = true;
            
            // Collect form data
            const formData = {
                from_name: contactForm.querySelector('input[type="text"]').value,
                from_email: contactForm.querySelector('input[type="email"]').value,
                subject: contactForm.querySelector('select').value,
                message: contactForm.querySelector('textarea').value,
                emergency: contactForm.querySelector('input[type="checkbox"]').checked ? 'Yes' : 'No',
                remote_support: contactForm.querySelectorAll('input[type="checkbox"]')[1].checked ? 'Yes' : 'No',
                timestamp: new Date().toLocaleString('en-BD')
            };
            
            // Here you would typically send to a server
            // For now, we'll just show the alert and log data
            console.log('Support Request Submitted:', formData);
            
            // Show success message
            showFormMessage('success', 'Thank you for your message! I will get back to you within 4-6 hours. For emergencies, expect a response in 1-2 hours.');
            
            // Reset form
            contactForm.reset();
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Scroll to top of form
            contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
}

// Form validation
function validateContactForm() {
    const contactForm = document.getElementById('contact-form');
    const inputs = contactForm.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    
    // Clear previous error messages
    clearFormErrors();
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            showInputError(input, 'This field is required');
            isValid = false;
        } else if (input.type === 'email' && !isValidEmail(input.value)) {
            showInputError(input, 'Please enter a valid email address');
            isValid = false;
        }
    });
    
    return isValid;
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show input error
function showInputError(input, message) {
    const formGroup = input.closest('div');
    if (!formGroup) return;
    
    // Remove existing error
    const existingError = formGroup.querySelector('.error-message');
    if (existingError) existingError.remove();
    
    // Add error message
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    errorElement.style.color = '#ff6b6b';
    errorElement.style.fontSize = '0.875rem';
    errorElement.style.marginTop = '0.5rem';
    
    // Add error class to input
    input.style.borderColor = '#ff6b6b';
    
    formGroup.appendChild(errorElement);
}

// Clear form errors
function clearFormErrors() {
    const errors = document.querySelectorAll('.error-message');
    errors.forEach(error => error.remove());
    
    const inputs = document.querySelectorAll('#contact-form input, #contact-form select, #contact-form textarea');
    inputs.forEach(input => {
        input.style.borderColor = '';
    });
}

// Show form message (success/error)
function showFormMessage(type, message) {
    // Remove existing message
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) existingMessage.remove();
    
    // Create message element
    const messageElement = document.createElement('div');
    messageElement.className = `form-message form-message-${type}`;
    messageElement.textContent = message;
    
    // Style the message
    messageElement.style.padding = '1rem';
    messageElement.style.borderRadius = 'var(--radius-md)';
    messageElement.style.marginBottom = '1.5rem';
    messageElement.style.textAlign = 'center';
    messageElement.style.fontWeight = '500';
    
    if (type === 'success') {
        messageElement.style.backgroundColor = 'rgba(46, 204, 113, 0.1)';
        messageElement.style.color = '#2ecc71';
        messageElement.style.border = '1px solid #2ecc71';
    } else {
        messageElement.style.backgroundColor = 'rgba(231, 76, 60, 0.1)';
        messageElement.style.color = '#e74c3c';
        messageElement.style.border = '1px solid #e74c3c';
    }
    
    // Insert message before form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.parentNode.insertBefore(messageElement, contactForm);
    }
}

// WhatsApp Form Submission
function sendToWhatsAppDirect(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('clientName').value.trim();
    const phone = document.getElementById('clientPhone').value.trim();
    const issue = document.getElementById('clientIssue').value;
    const description = document.getElementById('clientDescription').value.trim();
    const emergency = document.getElementById('clientEmergency').checked;
    
    // Validate
    if (!name || !phone || !issue || !description) {
        alert('Please fill all required fields');
        return false;
    }
    
    // Create WhatsApp message
    const message = `New IT Support Request:\n\n` +
                   `Name: ${name}\n` +
                   `Phone: ${phone}\n` +
                   `Issue: ${issue}\n` +
                   `Emergency: ${emergency ? 'YES (1-2 hour response)' : 'NO'}\n\n` +
                   `Problem Details:\n${description}\n\n` +
                   `Sent from website contact form`;
    
    // Encode for URL
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp URL
    const whatsappURL = `https://wa.me/8801738671739?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Show success message
    const successMsg = document.getElementById('formSuccess');
    if (successMsg) {
        successMsg.style.display = 'block';
        successMsg.innerHTML = '✅ WhatsApp opened! Please click <strong>SEND</strong> in WhatsApp.';
    }
    
    // Reset form
    setTimeout(() => {
        document.getElementById('whatsapp-form').reset();
        if (successMsg) {
            successMsg.scrollIntoView({ behavior: 'smooth' });
        }
    }, 1000);
    
    // Show instructions
    setTimeout(() => {
        alert(`📱 Message sent to WhatsApp!\n\n` +
              `1. WhatsApp should be open now\n` +
              `2. Your message is ready\n` +
              `3. Click the GREEN SEND button\n` +
              `4. I'll contact you on ${phone}\n\n` +
              `If WhatsApp didn't open, contact directly:\n` +
              `📞 Call: 01738671739\n` +
              `💬 WhatsApp: Same number`);
    }, 1500);
    
    return false;
}

// Copy phone number to clipboard
function copyPhoneNumber() {
    const phoneNumber = '01738671739';
    navigator.clipboard.writeText(phoneNumber).then(() => {
        alert('Phone number copied to clipboard: ' + phoneNumber);
    }).catch(err => {
        prompt('Copy this number:', phoneNumber);
    });
}

// Save contact instructions
function saveContact() {
    alert('To save my contact:\n\n' +
          '1. Open your phone contacts\n' +
          '2. Add new contact\n' +
          '3. Name: Sourodip (IT Support)\n' +
          '4. Phone: 01738671739\n' +
          '5. Save contact\n\n' +
          'You can call or WhatsApp anytime!');
}

// Simple form submission (backup)
function simpleSubmitForm() {
    const name = prompt('Your name?');
    if (!name) return;
    
    const phone = prompt('Your phone number?');
    if (!phone) return;
    
    const issue = prompt('What IT problem do you have?');
    if (!issue) return;
    
    alert('✅ Thank you ' + name + '!\n\n' +
          'I will contact you on ' + phone + ' shortly.\n' +
          'For immediate help, call: 01738671739');
}
