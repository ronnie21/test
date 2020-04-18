document.addEventListener("DOMContentLoaded", function(event) { 
    $(window).ready(function() {
        $("body").show();
        scrollReveal();
     });

    // navbar
    $(document).click(function(e) {
        // hide nav
        $('.navbar__menu').removeClass('open');
        $('.navbar__logo').removeClass('open');
        $('.navbar__items').removeClass('open');
    });

    $('.navbar__menu').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).toggleClass('open');
        $('.navbar__logo').toggleClass('open');
        $('.navbar__items').toggleClass('open');
    });

    // for faqs
    var questions = document.querySelectorAll('.question');

    questions.forEach(function(value, index) {
        value.addEventListener('click', function(e) {
            this.classList.toggle('active');
            
            var answer = this.nextElementSibling;
            if ($(answer).hasClass('active')) {
                $(answer).slideUp('fast');
            }
            else {
                $(answer).slideDown('fast');
            }
            answer.classList.toggle('active');
        });
    });

    // smooth scrolling
    $('.scroll').click(function(e) {
        var href = $(this).attr('href');
        $('html,body').animate({scrollTop: $(href).offset().top},'slow');
    });
});

function scrollReveal() {
    var default_scrollup = {
        origin: 'bottom',
        distance: '20px',
        duration: 1000,
        delay: 250
    }

    // homepage loading
    sr.reveal('.header');
    sr.reveal('.navbar', {
        origin: 'top',
        distance: '20px',
        duration: 1000,
    });

    // music
    new Vivus('music-svg', {duration: 150}, function() {
        $('.music-note').stop().fadeTo('fast', 1);
    });

    sr.reveal('.header__tagline', {
        origin: 'bottom',
        distance: '20px',
        duration: 1000,
        delay: 1000
    });

    // how it works loading
    sr.reveal('.how-it-works__title', default_scrollup);
    sr.reveal('.how-it-works__grid', default_scrollup);

    // features
    sr.reveal('.content-protection', default_scrollup);
    sr.reveal('.passive-monthly-income', default_scrollup);
    sr.reveal('.earnings-dashboard', default_scrollup);

    // about
    sr.reveal('.mission__heading', default_scrollup);
    sr.reveal('.mission__body', default_scrollup);

    // faqs
    sr.reveal('.questions__heading', default_scrollup);
    sr.reveal('.questions__subheading', default_scrollup);
    sr.reveal('.faqs', default_scrollup);

    // footer
    sr.reveal('.footer__heading', default_scrollup);
    sr.reveal('.footer__cta', default_scrollup);

    // mountain
    new Vivus('mountain-div', {duration: 150, file: mountainSrc}, function(){});
}