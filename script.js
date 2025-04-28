// Smooth scrolling for navigation
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Typing animation
const roleElement = document.getElementById('role');
const roles = ['Data Analyst', 'Deep Learning Enthusiast', 'Geo Spatial AI Researcher'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 50 : 100; // Faster when deleting

    if (!isDeleting && charIndex <= currentRole.length) {
        // Typing
        roleElement.textContent = currentRole.substring(0, charIndex);
        charIndex++;
    } else if (isDeleting && charIndex >= 0) {
        // Deleting
        roleElement.textContent = currentRole.substring(0, charIndex);
        charIndex--;
    }

    if (!isDeleting && charIndex > currentRole.length) {
        // Pause after typing
        setTimeout(() => {
            isDeleting = true;
        }, 1000); // 1-second pause before deleting
    } else if (isDeleting && charIndex < 0) {
        // Move to next role after deleting
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(type, speed);
}

// Start the typing animation
setTimeout(type, 1000); // Start after 1 second