$(document).ready(function () {

    //Nav Bar
    var prevScrollpos = window.pageYOffset;

    window.onscroll = function () {

        var currentScrollPos = window.pageYOffset;

        if (prevScrollpos > currentScrollPos) {

            document.querySelector("nav").style.top = "0";

        } else {

            document.querySelector("nav").style.top = "-70px";

        }

        prevScrollpos = currentScrollPos;

    }

    //Text Typing Animation
    var typed = new Typed('.typing-text', {

        strings: [
            "John Doe.",
            "A Photographer.",
            "A Graphics Designer."
        ],
        typedSpeed: 150,
        backSpeed: 100,
        loop: true

    });

    //Slider
    $('.slider').slick({

        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots'

    });

});