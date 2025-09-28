// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'linear-gradient(90deg, #1C3761, #2C528B)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'linear-gradient(90deg, #1C3761, #2C528B)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.insight-card, .features-text, .features-image');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add loading animation to hero section
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(50px)';
        heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
        
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
    
    if (heroImage) {
        heroImage.style.opacity = '0';
        heroImage.style.transform = 'translateX(50px)';
        heroImage.style.transition = 'opacity 1s ease, transform 1s ease';
        
        setTimeout(() => {
            heroImage.style.opacity = '1';
            heroImage.style.transform = 'translateX(0)';
        }, 600);
    }
});

// Add hover effects to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add click animation to insight cards
document.querySelectorAll('.insight-card').forEach(card => {
    card.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'translateY(-10px)';
        }, 150);
    });
});

// Form validation and submission (for contact forms)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#ef4444';
            isValid = false;
        } else {
            input.style.borderColor = '#10b981';
        }
    });
    
    return isValid;
}

// Add form submission handler if contact form exists
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateForm(this)) {
                // Show success message
                const successMsg = document.createElement('div');
                successMsg.className = 'success-message';
                successMsg.textContent = 'Thank you! Your message has been sent successfully.';
                successMsg.style.cssText = `
                    background: #10b981;
                    color: white;
                    padding: 1rem;
                    border-radius: 8px;
                    margin-top: 1rem;
                    text-align: center;
                `;
                this.appendChild(successMsg);
                
                // Reset form
                this.reset();
                
                // Remove success message after 5 seconds
                setTimeout(() => {
                    successMsg.remove();
                }, 5000);
            }
        });
    }
});

// Add scroll-to-top functionality
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: #2563eb;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    z-index: 1000;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add typing effect to hero title

// Typewriter effect that preserves HTML tags
function typeWriter(element, html, speed = 100) {
    let i = 0;
    let isTag = false;
    let tagBuffer = '';
    element.innerHTML = '';

    function type() {
        if (i < html.length) {
            let char = html.charAt(i);
            if (char === '<') {
                isTag = true;
                tagBuffer = '';
            }
            if (isTag) {
                tagBuffer += char;
                if (char === '>') {
                    element.innerHTML += tagBuffer;
                    isTag = false;
                }
            } else {
                element.innerHTML += char;
            }
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Set hero title as fixed HTML (no animation)
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = '<span class="highlight">REVVING UP</span><br><span class="highlight">RELIABILITY</span>';
    }
});

// FAQ functionality
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ...existing code...

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.insight-card, .features-text, .features-image, .product-card, .service-item, .team-member, .mv-card, .impact-card, .tech-item, .cert-item, .goal-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/\D/g, ''));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            if (counter.textContent.includes('%')) {
                counter.textContent = Math.floor(current) + '%';
            } else if (counter.textContent.includes('+')) {
                counter.textContent = Math.floor(current) + '+';
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 16);
    });
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add form validation enhancements
function enhanceFormValidation() {
    const form = document.querySelector('#contact-form');
    if (!form) return;
    
    const inputs = form.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });
}

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Remove existing error styling
    field.classList.remove('error');
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Required field validation
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'This field is required';
    }
    
    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    }
    
    // Phone validation
    if (field.type === 'tel' && value) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
            isValid = false;
            errorMessage = 'Please enter a valid phone number';
        }
    }
    
    if (!isValid) {
        field.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = errorMessage;
        errorDiv.style.cssText = 'color: #ef4444; font-size: 0.875rem; margin-top: 0.25rem;';
        field.parentNode.appendChild(errorDiv);
    }
    
    return isValid;
}

// Initialize form validation
document.addEventListener('DOMContentLoaded', enhanceFormValidation);

// Add CSS for error states
const style = document.createElement('style');
style.textContent = `
    .form-group input.error,
    .form-group select.error,
    .form-group textarea.error {
        border-color: #ef4444;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
`;
document.head.appendChild(style);

// Chatbot Functionality
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing chatbot...');
    
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotContainer = document.getElementById('chatbotContainer');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotSend = document.getElementById('chatbotSend');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const quickActionBtns = document.querySelectorAll('.quick-action-btn');

    console.log('Chatbot elements found:', { 
        chatbotToggle: !!chatbotToggle, 
        chatbotContainer: !!chatbotContainer, 
        chatbotClose: !!chatbotClose 
    });

    // Simple toggle function
    function toggleChatbot() {
        console.log('Toggling chatbot...');
        if (chatbotContainer && chatbotToggle) {
            const isActive = chatbotContainer.classList.contains('active');
            console.log('Current state:', isActive);
            
            if (isActive) {
                chatbotContainer.classList.remove('active');
                chatbotToggle.classList.remove('active');
                console.log('Chatbot closed');
            } else {
                chatbotContainer.classList.add('active');
                chatbotToggle.classList.add('active');
                console.log('Chatbot opened');
                
                if (chatbotInput) {
                    setTimeout(() => chatbotInput.focus(), 100);
                }
                
                // Hide badge when opened
                const badge = document.querySelector('.chatbot-badge');
                if (badge) {
                    badge.style.display = 'none';
                }
            }
        }
    }

    // Add click event to toggle button
    if (chatbotToggle) {
        chatbotToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Toggle button clicked');
            toggleChatbot();
        });
    } else {
        console.error('Chatbot toggle button not found!');
    }

    // Add click event to close button
    if (chatbotClose) {
        chatbotClose.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Close button clicked');
            if (chatbotContainer && chatbotToggle) {
                chatbotContainer.classList.remove('active');
                chatbotToggle.classList.remove('active');
            }
        });
    }

    // Close chatbot when clicking outside
    document.addEventListener('click', (e) => {
        if (chatbotContainer && chatbotToggle && 
            !chatbotContainer.contains(e.target) && 
            !chatbotToggle.contains(e.target)) {
            chatbotContainer.classList.remove('active');
            chatbotToggle.classList.remove('active');
        }
    });

    // Send message function
    function sendMessage(message, isUser = true) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chatbot-message ${isUser ? 'user-message' : 'bot-message'}`;
        
        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.innerHTML = isUser ? '<i class="fas fa-user"></i>' : '<i class="fas fa-robot"></i>';
        
        const content = document.createElement('div');
        content.className = 'message-content';
        content.innerHTML = `
            <p>${message}</p>
            <span class="message-time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
        `;
        
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(content);
        chatbotMessages.appendChild(messageDiv);
        
        // Scroll to bottom
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Bot responses
    function getBotResponse(userMessage) {
        const message = userMessage.toLowerCase();
        
        if (message.includes('service') || message.includes('machinery')) {
            return "We offer a comprehensive range of industrial machinery including Laser Machines, Metal Fabricating, Pipe Bending, CNC Turning, Robotic Welding, and more. Would you like to know about a specific machine?";
        } else if (message.includes('quote') || message.includes('price')) {
            return "I'd be happy to help you get a quote! Please provide details about your project requirements, and I'll connect you with our sales team. You can also call us at +91 11 4567 8900.";
        } else if (message.includes('book') || message.includes('consultation')) {
            return "Great! I can help you book a consultation. Our experts are available Monday-Friday 8AM-6PM. Please let me know your preferred date and time, or call us directly at +91 11 4567 8900.";
        } else if (message.includes('contact') || message.includes('phone')) {
            return "You can reach us at:\n📞 Phone: +91 11 4567 8900\n📧 Email: info@enrayautocomp.com\n📍 Address: Industrial Area, Phase 2, Gurgaon, Haryana 122015";
        } else if (message.includes('hvac')) {
            return "ENRAY AUTOCOMP specializes in innovative HVAC solutions for the automotive industry. We provide specialized service, professional maintenance, and cost-effective solutions with 100% sincerity in continuous improvement.";
        // Removed sustainability response
        } else if (message.includes('hello') || message.includes('hi')) {
            return "Hello! Welcome to ENRAY AUTOCOMP. I'm here to help you with information about our HVAC solutions, machinery, or any questions you might have. How can I assist you today?";
        } else {
            return "Thank you for your message! I'm here to help with information about our HVAC solutions, industrial machinery, or general inquiries. For immediate assistance, please call us at +91 11 4567 8900 or email info@enrayautocomp.com.";
        }
    }

    // Send message on button click
    if (chatbotSend && chatbotInput) {
        chatbotSend.addEventListener('click', () => {
            const message = chatbotInput.value.trim();
            if (message) {
                sendMessage(message, true);
                chatbotInput.value = '';
                
                // Simulate bot typing
                setTimeout(() => {
                    const botResponse = getBotResponse(message);
                    sendMessage(botResponse, false);
                }, 1000);
            }
        });

        // Send message on Enter key
        chatbotInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                chatbotSend.click();
            }
        });
    }

    // Quick action buttons
    quickActionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const message = btn.getAttribute('data-message');
            sendMessage(message, true);
            chatbotInput.value = '';
            
            setTimeout(() => {
                const botResponse = getBotResponse(message);
                sendMessage(botResponse, false);
            }, 1000);
        });
    });

    // Auto-hide badge after opening
    if (chatbotToggle) {
        chatbotToggle.addEventListener('click', () => {
            const badge = document.querySelector('.chatbot-badge');
            if (badge) {
                badge.style.display = 'none';
            }
        });
    }

    // Show welcome message after 3 seconds
    setTimeout(() => {
        if (!chatbotContainer.classList.contains('active')) {
            const badge = document.querySelector('.chatbot-badge');
            if (badge) {
                badge.style.display = 'flex';
            }
        }
    }, 3000);
});