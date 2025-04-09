/**
 * FAQ Accordion Functionality
 * Handles the toggle behavior for FAQ items
 */
document.addEventListener('DOMContentLoaded', function() {
    // Get all FAQ toggle buttons
    const faqToggles = document.querySelectorAll('.faq-toggle');
    
    // Add click event listener to each toggle button
    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            // Toggle the rotation of the arrow
            const arrow = this.querySelector('svg');
            arrow.classList.toggle('rotate-180');
            
            // Toggle the visibility of the answer
            const answer = this.nextElementSibling;
            
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
});