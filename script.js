// =======================================================
// Enhanced script.js for Ebenezer Bible Training Institute
// =======================================================

document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle & Dropdown Functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');
    const header = document.querySelector('header');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        menuToggle.setAttribute('aria-expanded', navLinks.classList.contains('show'));
    });

    // Handle dropdowns for mobile (click to expand)
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            if (window.innerWidth <= 992) { // Increased breakpoint for tablet support
                // Prevent navigation if the link itself is clicked on mobile
                if (e.target.tagName.toLowerCase() === 'a' && e.target.closest('.dropdown')) {
                    e.preventDefault();
                }
                dropdown.querySelector('.dropdown-menu').classList.toggle('show');
            }
        });
    });


    // 2. Sticky Header & Back-to-Top Button Logic
    const backToTopButton = createBackToTopButton();
    const scrollThreshold = 100;

    function handleScroll() {
        const isScrolled = window.scrollY > scrollThreshold;

        // Sticky Header: Add a class for styling changes (e.g., background color)
        header.classList.toggle('scrolled', isScrolled);

        // Back-to-Top: Show/hide button
        backToTopButton.style.display = isScrolled ? 'block' : 'none';

        // Optional: Call reveal on scroll for maximum compatibility
        revealOnScroll();
        
        // Parallax Effect - only if needed for hero background
        // document.querySelector('.hero').style.backgroundPositionY = -window.scrollY * 0.2 + 'px';
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll); // Run on load for initial state

    // 3. Advanced Scroll-Reveal Effect
    const revealElements = document.querySelectorAll('.reveal');

    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        revealElements.forEach((el, index) => {
            const elementTop = el.getBoundingClientRect().top;
            
            // Trigger animation when 80% of the element is visible
            if (elementTop < windowHeight * 0.8) {
                // Add a slight delay for a staggered effect
                el.style.transitionDelay = `${index * 0.1}s`; 
                el.classList.add('active');
            } else {
                // Optional: Remove active class for repeating animation (better to keep it simple)
                // el.classList.remove('active');
                el.style.transitionDelay = '0s';
            }
        });
    }

    // 4. Dark Mode Toggle Feature (Requires CSS classes: .dark-mode, .dark-button)
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDarkMode = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
            darkModeToggle.textContent = isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
        });

        // Check for saved user preference on load
        if (localStorage.getItem('darkMode') === 'enabled') {
            document.body.classList.add('dark-mode');
            darkModeToggle.textContent = '☀️ Light Mode';
        } else {
            darkModeToggle.textContent = '🌙 Dark Mode';
        }
    }
    
    // 5. Back to Top Button Creation
    function createBackToTopButton() {
        const btn = document.createElement('button');
        btn.id = 'backToTopBtn';
        btn.textContent = '↑';
        btn.style.cssText = `
            display: none; 
            position: fixed; 
            bottom: 20px; 
            right: 30px; 
            z-index: 99; 
            border: none; 
            outline: none; 
            background-color: var(--color-primary, #007bff); 
            color: white; 
            cursor: pointer; 
            padding: 15px 20px; 
            border-radius: 50%; 
            font-size: 18px;
            transition: opacity 0.3s;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        `;
        document.body.appendChild(btn);

        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        return btn;
    }
});

