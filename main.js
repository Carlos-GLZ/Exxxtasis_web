document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const heroContent = document.querySelector('.hero-content');
    const suiteCards = document.querySelectorAll('.suite-card');

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - navbar.offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `slideInUp 1s ease-in-out forwards`;
            }
        });
    }, { threshold: 0.1 });

    // Observe hero content
    if (heroContent) {
        observer.observe(heroContent);
    }

    // Observe suite cards
    suiteCards.forEach(card => {
        observer.observe(card);
    });
});

function openReservationModal() {
    // Function to open reservation modal
    console.log('Open reservation modal');
}

