// Burger Menu Toggle
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');

burgerMenu.addEventListener('click', () => {
    // Toggle Nav
    navLinks.classList.toggle('active');
    
    // Burger Animation
    burgerMenu.classList.toggle('toggle');
    
    // Animate Links
    navLinksItems.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            burgerMenu.classList.remove('toggle');
            navLinksItems.forEach(link => {
                link.style.animation = '';
            });
        }
    });
});

// Sticky Header on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Animation on Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .about-image, .about-text');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animated elements
window.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.service-card, .about-image, .about-text');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.5s ease';
    });
    
    // Trigger animation after a short delay
    setTimeout(() => {
        animateOnScroll();
    }, 500);
});

window.addEventListener('scroll', animateOnScroll);

// WhatsApp Button Functionality
const whatsappButtons = document.querySelectorAll('.whatsapp-btn');
whatsappButtons.forEach(button => {
    button.addEventListener('click', () => {
        const phoneNumber = '01066669170';
        const message = 'مرحباً، أريد الاستفسار عن خدمات الشحن الدولي';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    });
});
// FAQ functionality
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        question.classList.toggle('active');
        const answer = question.nextElementSibling;
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});
// إضافة إلى ملف script.js

// Client image hover effect
const clientImages = document.querySelectorAll('.client-img');

clientImages.forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.parentElement.style.transform = 'rotate(5deg)';
        img.parentElement.style.boxShadow = '0 5px 15px rgba(216, 0, 0, 0.3)';
    });
    
    img.addEventListener('mouseleave', () => {
        img.parentElement.style.transform = 'rotate(0)';
        img.parentElement.style.boxShadow = 'none';
    });
});
// إضافة إلى ملف script.js

// Form Submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the data to a server
        // For demonstration, we'll just show an alert
        alert(`شكراً ${name} على تواصلك معنا!\nسنقوم بالرد على استفسارك حول ${service} في أقرب وقت.`);
        
        // Reset form
        contactForm.reset();
        
        // You can add AJAX code here to actually send the form data
        /*
        fetch('send_email.php', {
            method: 'POST',
            body: JSON.stringify({name, email, phone, service, message}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            contactForm.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('حدث خطأ أثناء إرسال الرسالة، يرجى المحاولة مرة أخرى.');
        });
        */
    });
}

// Animate contact cards on scroll
const animateContactCards = () => {
    const infoCards = document.querySelectorAll('.info-card');
    const formElements = document.querySelectorAll('.form-group');
    
    infoCards.forEach((card, index) => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (cardPosition < screenPosition) {
            card.style.animation = `fadeInRight 0.5s ease forwards ${index * 0.1}s`;
        }
    });
    
    formElements.forEach((element, index) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.animation = `fadeInLeft 0.5s ease forwards ${index * 0.1}s`;
        }
    });
};

// Set initial state for animated elements
if (document.querySelector('.contact-section')) {
    const infoCards = document.querySelectorAll('.info-card');
    const formElements = document.querySelectorAll('.form-group');
    
    infoCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateX(20px)';
    });
    
    formElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateX(-20px)';
    });
    
    // Add new keyframes dynamically
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
        @keyframes fadeInRight {
            from {
                opacity: 0;
                transform: translateX(20px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `, styleSheet.cssRules.length);
    
    styleSheet.insertRule(`
        @keyframes fadeInLeft {
            from {
                opacity: 0;
                transform: translateX(-20px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `, styleSheet.cssRules.length);
    
    // Trigger animation after a short delay
    setTimeout(() => {
        animateContactCards();
    }, 500);
}

window.addEventListener('scroll', animateContactCards);