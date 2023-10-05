window.onload = function() {
    var header = document.querySelector("header"); // Almacenar una referencia al elemento "header"
    
    window.addEventListener('scroll', function (e) {
        if (window.scrollY >= 250) {
            header.classList.remove('is-scrolling'); // Usar la referencia almacenada
        } else {
            header.classList.add('is-scrolling'); // Usar la referencia almacenada
        }
    });
    
    const menu_btn= document.querySelector('.hamburguer');
    const mobile_menu = document.querySelector('.mobile-nav');

    menu_btn.addEventListener('click', function() {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });
}