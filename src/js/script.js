// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add some animation to the shapes
    const shapes = document.querySelectorAll('.shape');
    
    // Add random delay to each shape's animation
    shapes.forEach(shape => {
        const delay = Math.random() * 5;
        shape.style.animationDelay = `${delay}s`;
    });
    
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default behavior for now (until we have sections to scroll to)
            e.preventDefault();
            
            // You can add smooth scrolling functionality here when you have more sections
            console.log('Navigation link clicked');
        });
    });
    
    // Add a simple hover effect to the logo
    const logo = document.querySelector('.logo');
    
    logo.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s';
    });
    
    logo.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});