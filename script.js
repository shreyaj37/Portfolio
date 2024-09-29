// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Expand/Collapse job details on click
document.querySelectorAll('.job').forEach(job => {
    const header = job.querySelector('.job-header');
    const role = job.querySelector('.role');
    const details = job.querySelector('.job-details');

    const toggleDetails = () => {
        if (details.style.display === 'none') {
            details.style.display = 'block';
        } else {
            details.style.display = 'none';
        }
    };

    // Add click listeners to both the header and role elements
    header.addEventListener('click', toggleDetails);
    role.addEventListener('click', toggleDetails);
});

// Scroll-to-top button (optional feature)
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
