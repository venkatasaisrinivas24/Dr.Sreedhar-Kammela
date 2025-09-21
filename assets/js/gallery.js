// Gallery Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize gallery
    initializeGallery();
    
    // Initialize filter functionality
    initializeFilters();
    
    // Initialize animations
    initializeAnimations();
});

// Initialize Gallery
function initializeGallery() {
    // Add fade-in animation to gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('fade-in');
        }, index * 100);
    });
}

// Initialize Filter Functionality
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter gallery items
            filterGalleryItems(galleryItems, filter);
        });
    });
}

// Filter Gallery Items
function filterGalleryItems(items, filter) {
    items.forEach(item => {
        const categories = item.getAttribute('data-category');
        
        if (filter === 'all' || (categories && categories.includes(filter))) {
            item.classList.remove('hide');
            item.classList.add('show');
            setTimeout(() => {
                item.style.display = 'block';
            }, 50);
        } else {
            item.classList.remove('show');
            item.classList.add('hide');
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
}

// Initialize Animations
function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe all gallery sections
    const sections = document.querySelectorAll('.doctor-gallery-section, .additional-gallery-section');
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Lightbox Functionality
function openLightbox(imageId) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    // Set image source and caption based on imageId
    const imageData = getLightboxImageData(imageId);
    
    if (imageData) {
        lightboxImage.src = imageData.src;
        lightboxCaption.textContent = imageData.caption;
        lightbox.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Get lightbox image data
function getLightboxImageData(imageId) {
    const imageData = {
        'dr-sreedhar-1': {
            src: 'assets/images/gallery/dr-sreedhar-achievement.jpg',
            caption: 'Dr. Kammela Sreedhar - Medical Achievements'
        },
        'dr-sridevi-1': {
            src: 'assets/images/gallery/dr-sridevi-achievement.jpg',
            caption: 'Dr. Kammela Sridevi - Vaidya Ratna Purasakar Award 2014'
        },
        'hospital-1': {
            src: 'assets/images/gallery/hospital-facilities.jpg',
            caption: 'Hospital Facilities - Multi Speciality Hospital'
        },
        'hospital-2': {
            src: 'assets/images/gallery/medical-team.jpg',
            caption: 'Our Expert Medical Team'
        },
        'awards-1': {
            src: 'assets/images/gallery/awards-recognition.jpg',
            caption: 'Awards & Recognition'
        }
    };
    
    return imageData[imageId] || null;
}

// Close lightbox when clicking outside the image
document.addEventListener('click', function(e) {
    const lightbox = document.getElementById('lightbox');
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Close lightbox with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// Smooth scroll for internal links
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

// Add hover effects to gallery items
function addHoverEffects() {
    const galleryItems = document.querySelectorAll('.gallery-image-placeholder, .achievement-image-placeholder > div');
    
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Initialize hover effects
addHoverEffects();

// Lazy loading for images (when actual images are added)
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
initializeLazyLoading();