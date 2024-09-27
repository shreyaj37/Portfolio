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

// Skill animation on scroll
const skillRatings = document.querySelectorAll('.skill .filled');

function fillSkills() {
    skillRatings.forEach(skill => {
        const width = skill.style.width; // Get the width value
        skill.style.width = 0; // Reset width to 0 for animation

        // Animate skill width
        setTimeout(() => {
            skill.style.width = width; // Set to original width
        }, 100);
    });
}

// Check if Skills section is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Listen for scroll event
window.addEventListener('scroll', () => {
    const skillsSection = document.getElementById('skills');
    if (isInViewport(skillsSection)) {
        fillSkills(); // Fill skills when in viewport
    }
});

// Mobile navigation toggle
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const navMenu = document.querySelector('nav ul');

mobileNavToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Toggle visibility of navigation menu
});

// Log a message when the page is loaded
window.onload = function() {
    console.log("Welcome to Shreya Joshi's Portfolio!");
};
