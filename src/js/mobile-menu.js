document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMenuButton = document.getElementById('close-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuItems = document.querySelectorAll('#mobile-menu li');
    const mobileServicesButton = document.getElementById('mobile-services-button');
    const mobileServicesDropdown = document.getElementById('mobile-services-dropdown');
    const mobileServicesIcon = document.getElementById('mobile-services-icon');
    
    // Toggle mobile menu
    mobileMenuButton.addEventListener('click', function() {
        // Abrir el menú con animación
        mobileMenu.classList.add('w-full');
        mobileMenu.classList.remove('w-0');
        
        // Mostrar el botón de cierre
        setTimeout(() => {
            closeMenuButton.classList.add('opacity-100');
            closeMenuButton.classList.remove('opacity-0');
        }, 200);
        
        // Animar cada elemento del menú con un retraso escalonado
        setTimeout(() => {
            mobileMenuItems.forEach(item => {
                item.classList.remove('translate-x-8', 'opacity-0');
                item.classList.add('translate-x-0', 'opacity-100');
            });
        }, 300);
        
        document.body.classList.add('overflow-hidden');
    });
    
    // Close mobile menu
    closeMenuButton.addEventListener('click', function() {
        // Ocultar el botón de cierre
        closeMenuButton.classList.remove('opacity-100');
        closeMenuButton.classList.add('opacity-0');
        
        // Animar cada elemento del menú de vuelta
        mobileMenuItems.forEach(item => {
            item.classList.remove('translate-x-0', 'opacity-100');
            item.classList.add('translate-x-8', 'opacity-0');
        });
        
        // Después de un pequeño retraso, cerrar el menú
        setTimeout(() => {
            mobileMenu.classList.remove('w-full');
            mobileMenu.classList.add('w-0');
        }, 300);
        
        document.body.classList.remove('overflow-hidden');
    });
    
    // Toggle services dropdown in mobile menu
    mobileServicesButton.addEventListener('click', function() {
        mobileServicesDropdown.classList.toggle('hidden');
        mobileServicesIcon.classList.toggle('rotate-180');
    });
});