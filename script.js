// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Expand/Collapse for experience section
document.querySelectorAll('.job').forEach(job => {
    job.addEventListener('click', function() {
        const details = this.querySelector('ul');
        if (details.style.display === 'block') {
            details.style.display = 'none';
        } else {
            details.style.display = 'block';
        }
    });
});

// Scroll to top button (optional feature)
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = "⬆️";
scrollToTopBtn.id = "scrollToTop";
scrollToTopBtn.style.position = "fixed";
scrollToTopBtn.style.bottom = "20px";
scrollToTopBtn.style.right = "20px";
scrollToTopBtn.style.display = "none";
scrollToTopBtn.style.padding = "10px";
scrollToTopBtn.style.backgroundColor = "#007bff";
scrollToTopBtn.style.color = "white";
scrollToTopBtn.style.border = "none";
scrollToTopBtn.style.borderRadius = "5px";
scrollToTopBtn.style.cursor = "pointer";
document.body.appendChild(scrollToTopBtn);

// Show scroll-to-top button when scrolling down
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Scroll to top when button is clicked
scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Dynamic content for social media hover tooltips (optional feature)
const socialLinks = document.querySelectorAll('.social-links a');

socialLinks.forEach(link => {
    link.addEventListener('mouseover', function() {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.innerHTML = `Visit my ${this.textContent.trim()}`;
        tooltip.style.position = 'absolute';
        tooltip.style.backgroundColor = '#333';
        tooltip.style.color = '#fff';
        tooltip.style.padding = '5px';
        tooltip.style.borderRadius = '5px';
        tooltip.style.top = `${this.getBoundingClientRect().top - 30}px`;
        tooltip.style.left = `${this.getBoundingClientRect().left}px`;
        tooltip.style.zIndex = '1000';
        document.body.appendChild(tooltip);

        this.addEventListener('mouseleave', () => {
            document.body.removeChild(tooltip);
        });
    });
});
