$(function(){
    $('.slider').slick({
        arrows: false,
        autoplay: true,
        fade: true,
        dots: true
    });
    $('.reviews-slider').slick({
        arrows: true,
        autoplay: false,
        fade: false,
        dots: false,
        responsive: [
            {
              breakpoint: 481,
              settings: {
                  arrows: false
              }
            }]
    });
    
    $('.slider-footer').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: true
    });

    $(".nav__menu-link, .menu__mobile-list, .contacts").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
       });
});




(function () {
    const burgerItem = document.querySelector('.menu-mobile')
    const menu = document.querySelector('.menu__mobile')
    const menuCloseItem = document.querySelector('.close-btn')
    const menuLinks = document.querySelectorAll('.header__link')
    burgerItem.addEventListener('click', () => {
        menu.classList.add('menu__mobile-active')
    })
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('menu__mobile-active')
    })
    if (window.innerWidth < 481) {
        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('menu__mobile-active')
            } )
        }
    }
    
}())