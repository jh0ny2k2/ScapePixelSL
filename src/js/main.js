// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded successfully!'); // Debug message
    
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMenuButton = document.getElementById('close-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileServicesButton = document.getElementById('mobile-services-button');
    const mobileServicesDropdown = document.getElementById('mobile-services-dropdown');
    const servicesArrow = document.getElementById('services-arrow');
    
    // Toggle mobile menu
    if (mobileMenuButton) {
        console.log('Mobile menu button found'); // Debug message
        mobileMenuButton.addEventListener('click', () => {
            console.log('Mobile menu button clicked'); // Debug message
            mobileMenu.classList.remove('translate-x-full');
            document.body.classList.add('overflow-hidden');
        });
    } else {
        console.log('Mobile menu button not found'); // Debug message
    }
    
    if (closeMenuButton) {
        closeMenuButton.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
            document.body.classList.remove('overflow-hidden');
        });
    }
    
    // Toggle services dropdown in mobile menu
    if (mobileServicesButton) {
        mobileServicesButton.addEventListener('click', () => {
            mobileServicesDropdown.classList.toggle('hidden');
            servicesArrow.classList.toggle('rotate-180');
        });
    }
});