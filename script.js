// script.js

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('href'); // Get target section
        const targetSection = document.querySelector(targetId); // Select target section
        
        // Smooth scroll to the target section
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight active section on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let scrollPos = window.scrollY; // Current scroll position

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            const currentId = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentId}`) {
                    link.classList.add('active'); // Highlight the active link
                }
            });
        }
    });
});

// Toggle details in timeline
function toggleDetails(detailsId) {
    const details = document.getElementById(detailsId);
    details.style.display = details.style.display === 'block' ? 'none' : 'block'; // Show or hide details
}

// Log a message when the page is loaded
window.onload = function() {
    console.log("Welcome to Shreya Joshi's Portfolio!");
};
