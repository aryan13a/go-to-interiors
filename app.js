// Aria Mehta Portfolio — Script

// --- Project Data ---
const projectsData = {
    1: {
        title: "The Mansarovar Residence",
        category: "Residential",
        city: "Jaipur",
        description: "A modern, minimalist residential villa in Mansarovar, Jaipur. The space features clean lines, bespoke custom curtains in natural linen, and warm wood tones that complement the expansive layouts. Tactile textures and copper fittings bring quiet luxury to the home.",
        images: [
            "images/unnamed.webp",
            "images/unnamed (1).webp",
            "images/unnamed (2).webp"
        ]
    },
    2: {
        title: "The C-Scheme Penthouse",
        category: "Residential",
        city: "Jaipur",
        description: "A sophisticated duplex penthouse in C-Scheme. The design integrates elegant double-height drapery with automated tracks, hand-curated materials, and custom-designed furniture that emphasizes Jaipur's warm sunlight.",
        images: [
            "images/unnamed (1).webp",
            "images/unnamed (3).webp",
            "images/unnamed (4).webp"
        ]
    },
    3: {
        title: "The Vaishali Salon",
        category: "Commercial",
        city: "Jaipur",
        description: "A premium commercial salon in Vaishali Nagar, styled to feel like an editorial lounge. Sage green cabinets, brass accents, and custom fluted glass partitions pair with layered roman shades to define the spatial flow.",
        images: [
            "images/unnamed (2).webp",
            "images/unnamed (6).webp",
            "images/unnamed.webp"
        ]
    },
    4: {
        title: "The Civil Lines Sanctuary",
        category: "Residential",
        city: "Jaipur",
        description: "A residential retreat in the historic Civil Lines area. Designed with raw plaster finishes, custom motor blinds, and carefully curated antiques that bridge heritage architecture with modern functionality.",
        images: [
            "images/unnamed (3).webp",
            "images/unnamed (2).webp",
            "images/unnamed (1).webp"
        ]
    },
    5: {
        title: "The Amer Boutique Stay",
        category: "Hospitality",
        city: "Jaipur",
        description: "An exclusive guest boutique hotel on the foothills of Amer Fort. Utilizing locally sourced stone, raw teakwood, and rustic canvas drapery to create an organic connection with the historic landscape.",
        images: [
            "images/unnamed (4).webp",
            "images/unnamed (6).webp",
            "images/unnamed.webp"
        ]
    },
    6: {
        title: "The Malviya Nagar Office",
        category: "Commercial",
        city: "Jaipur",
        description: "A contemporary creative office in Malviya Nagar. Designed with open-plan layouts, sound-absorbing custom felt drapery, and minimalist workspaces that foster collaboration and deep work.",
        images: [
            "images/unnamed (6).webp",
            "images/unnamed (4).webp",
            "images/unnamed (3).webp"
        ]
    }
};

// --- DOM Elements ---
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinksContainer = document.getElementById('navLinks');
const navLinks = document.querySelectorAll('.nav-links a');
const portfolioCards = document.querySelectorAll('.portfolio-card');
const projectModal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const modalContent = document.getElementById('modalContent');
const contactForm = document.getElementById('contactForm');

// --- Sticky Navigation Scroll Listener ---
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// --- Hamburger Mobile Navigation ---
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinksContainer.classList.toggle('open');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinksContainer.classList.remove('open');
    });
});

// --- Portfolio Detail Modal Opening/Closing ---
function openModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;
    
    // Build Modal Layout
    modalContent.innerHTML = `
        <div class="modal-header">
            <h3 class="modal-title">${project.title}</h3>
            <span class="modal-meta">${project.category} &mdash; ${project.city}</span>
        </div>
        <div class="modal-body">
            <div class="modal-info-col">
                <p class="modal-desc">${project.description}</p>
            </div>
            <div class="modal-images">
                ${project.images.map((imgUrl, i) => `
                    <img src="${imgUrl}" alt="${project.title} photo ${i + 1}" loading="lazy">
                `).join('')}
            </div>
        </div>
    `;
    
    projectModal.classList.add('open');
    document.body.style.overflow = 'hidden'; // Lock background scroll
}

function closeModal() {
    projectModal.classList.remove('open');
    document.body.style.overflow = ''; // Restore scroll
    modalContent.innerHTML = '';
}

portfolioCards.forEach(card => {
    const projectId = card.getAttribute('data-project');
    
    // Open on click
    card.addEventListener('click', () => openModal(projectId));
    
    // Open on Enter key for accessibility
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            openModal(projectId);
        }
    });
});

modalClose.addEventListener('click', closeModal);

// Close on clicking outside the modal box
projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        closeModal();
    }
});

// Close on Escape key press
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.classList.contains('open')) {
        closeModal();
    }
});

// --- Testimonials Slider Logic ---
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.slider-dots .dot');
const prevBtn = document.getElementById('prevTestimonial');
const nextBtn = document.getElementById('nextTestimonial');
let currentSlideIndex = 0;
let slideInterval;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Handle wrap-around index
    if (index >= slides.length) currentSlideIndex = 0;
    else if (index < 0) currentSlideIndex = slides.length - 1;
    else currentSlideIndex = index;
    
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlideIndex + 1);
}

function prevSlide() {
    showSlide(currentSlideIndex - 1);
}

// Start auto slideshow
function startSlideShow() {
    slideInterval = setInterval(nextSlide, 7000); // changes every 7s
}

// Reset auto slideshow interval
function resetSlideShowInterval() {
    clearInterval(slideInterval);
    startSlideShow();
}

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetSlideShowInterval();
    });
    
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetSlideShowInterval();
    });
}

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        const targetIndex = parseInt(e.target.getAttribute('data-index'));
        showSlide(targetIndex);
        resetSlideShowInterval();
    });
});

// Initialize testimonials slideshow
if (slides.length > 0) {
    startSlideShow();
}

// --- Scroll Reveal Animations ---
const revealElements = document.querySelectorAll('.reveal-fade');

const revealOnScrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Trigger only once
        }
    });
}, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
});

revealElements.forEach(el => revealOnScrollObserver.observe(el));

// --- Contact Form Submission Feedback ---
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const projectType = document.getElementById('projectType').value;
        
        // Custom elegant notification popup
        const notification = document.createElement('div');
        notification.style.position = 'fixed';
        notification.style.bottom = '2rem';
        notification.style.right = '2rem';
        notification.style.backgroundColor = '#1C1C1A';
        notification.style.color = '#F7F5F0';
        notification.style.padding = '1.5rem 2.5rem';
        notification.style.border = '1px solid #B07D5B';
        notification.style.zIndex = '100000';
        notification.style.fontFamily = 'Jost, sans-serif';
        notification.style.fontSize = '0.9rem';
        notification.style.letterSpacing = '0.05em';
        notification.style.textTransform = 'uppercase';
        notification.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.2)';
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(20px)';
        notification.style.transition = 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
        
        notification.innerText = `Thank you, ${name}. We will connect shortly.`;
        
        document.body.appendChild(notification);
        
        // Trigger reveal reflow
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateY(0)';
        }, 100);
        
        // Clear Form
        contactForm.reset();
        
        // Fade out notification
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(20px)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 500);
        }, 4000);
    });
}
