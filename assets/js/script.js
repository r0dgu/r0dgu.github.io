particlesJS("particles", {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width:0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.8,
            random: true,
            animation: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed:2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce:false
        }
    },
    interactivity:{
        detectsOn: "canvas",
        events: {
            onHover:{
                enable: true,
                mode: "push"
            },
            onClick:{
                enable:true,
                mode: "push"
            },
            resize:true
        },
        modes: {
            repulse: {
                distance: 400,
                duration: 0.4
            },
            push:{
                particles_nb:4
            }
        }
    },
    retina_detect: true
});

function scrollToTop(){
    window.scrollTo({
        top: 0,
    });
}

window.addEventListener('scroll', function(){
    var scrollToTopButton = document.querySelector('.scroll-top')
    if(this.window.pageYOffset > 200){
        scrollToTopButton.style.display = 'block';
    }else{
        scrollToTopButton.style.display = 'none';
    }
});

window.onload = function() {
    var header = document.querySelector('.container'); // Almacenar una referencia al elemento "header"
    
    window.addEventListener('scroll', function (e) {
        if (window.scrollY >= 100) {
            header.classList.remove('is-scrolling-up');
            header.classList.add('is-scrolling-down'); // Usar la referencia almacenada
        } else {
            header.classList.remove('is-scrolling-down');
            header.classList.add('is-scrolling-up'); // Usar la referencia almacenada
        }
    });
    
    const menu_btn= document.querySelector('.hamburguer');
    const mobile_menu = document.querySelector('.mobile-nav');
    const opt_btn = document.querySelector('.btnOpt');

    menu_btn.addEventListener('click', function() {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
        opt_btn.classList.toggle('is-active');
    });

    mobile_menu.addEventListener('click', function() {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
        opt_btn.classList.toggle('is-active');
    });
    opt_btn.addEventListener('click', function() {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
        opt_btn.classList.toggle('is-active');
    });
}

document.querySelector('.mobile-nav').addEventListener('wheel', preventScroll, {passive: false});

function preventScroll(e){
    e.preventDefault();
    e.stopPropagation();

    return false;
}