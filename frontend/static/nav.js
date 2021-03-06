$(document).on("touchstart", '.link-trigger', function (e) {
    "use strict";
    var link = $(this);
    if (link.hasClass('mobile-hover')) {
        return true;
    } else {
        link.addClass("mobile-hover");
        $('.link-trigger').not(this).removeClass("mobile-hover");
        e.preventDefault();
        return false;
    }
});

$(document).ready(function() {
    var $nav = $("#homepage");
    if ($nav.css('display') == 'block') {
        $nav.toggleClass('desktop-nav-transparent', $(this).scrollTop() <= $nav.height());
    }
    $('.search-bar').css('min-height', $('.desktop-nav').css('min-height'));
});

$(document).ready(function() {
    var $nav = $("#headerpage");
    if ($nav.css('display') == 'block') {
        $nav.toggleClass('desktop-nav-header', $(this).scrollTop() <= $nav.height());
        if ($(this).scrollTop() <= $nav.height()) {
            $('.section-header').css("margin-top", '');
        } else {
            $('.section-header').css("margin-top", "60px");
        }
    }
    $('.search-bar').css('min-height', $('.desktop-nav').css('min-height'));
});

$(function() {
    $(document).scroll(function () {
        var $nav = $("#homepage");
        if ($nav.css('display') == 'block') {
            $nav.toggleClass('desktop-nav-transparent', $(this).scrollTop() <= $nav.height());
        }
        $('.search-bar').css('min-height', $('.desktop-nav').css('min-height'));
    });
});

$(function() {
    $(document).scroll(function () {
        var $nav = $("#headerpage");
        if ($nav.css('display') == 'block') {
            $nav.toggleClass('desktop-nav-header', $(this).scrollTop() <= $nav.height());
            if ($(this).scrollTop() <= $nav.height()) {
                $('.section-header').css("margin-top", '');
            } else {
                $('.section-header').css("margin-top", "60px");
            }
        }
        $('.search-bar').css('min-height', $('.desktop-nav').css('min-height'));
    });
});

// Mobile

var isOpen = false;

$(document).ready(function() {
    var $nav = $("#mobile-homepage");
    if ($nav.css('display') == 'block') {
        $nav.toggleClass('mobile-nav-transparent', $(this).scrollTop() <= $nav.height() && !isOpen);
    }
});

$(function() {
    $(document).scroll(function () {
        var $nav = $("#mobile-homepage");
        if ($nav.css('display') == 'block') {
            $nav.toggleClass('mobile-nav-transparent', $(this).scrollTop() <= $nav.height() && !isOpen);
        }
    });
});

$(document).on('click', '.dropdown-arrow', function() {
    var dropdown = $(this).closest('.clearfix').next('.nav-dropdown');
    if ($(this).hasClass('dropdown-arrow-active')) {
        $(this).removeClass('dropdown-arrow-active');
        dropdown.css("max-height", '');
        dropdown.css("margin-bottom", "0px");
    } else {
        $('.nav-dropdown').each(function(index, element) {
            $(element).prev('.clearfix').children('.dropdown-arrow').removeClass('dropdown-arrow-active');
            $(element).css("max-height", '');
            $(element).css("margin-bottom", "0px");
        });
        $(this).addClass('dropdown-arrow-active');
        var dropdownheight = dropdown.prop('scrollHeight') + 'px';
        dropdown.css("max-height", dropdownheight);
        dropdown.css("margin-bottom", "8px");
    }
});

$(document).on('click', '.menu-open', function() {
    isOpen = true;
    $('.menu-open').css("visibility", "hidden");
    $('.menu-open').css("opacity", 0);
    $("#mobile-homepage").removeClass('mobile-nav-transparent');
    $('#menu-close-target').css("visibility", "visible");
    $('#menu-close-target').css("opacity", 0.5);
    $('.mobile-nav-slide').css("left", 0);
    $('.slide-shader').css("visibility", "visible");
    $('.slide-shader').css("opacity", 0.75);
});

$(document).on('click', '#menu-close-target, .slide-shader', function() {
    isOpen = false;
    $('.menu-open').css("visibility", '');
    $('.menu-open').css("opacity", '');
    $("#mobile-homepage").toggleClass('mobile-nav-transparent', $(document).scrollTop() <= $("#mobile-homepage").height() && !isOpen);
    $('#menu-close-target').css("visibility", "hidden");
    $('#menu-close-target').css("opacity", 0);
    $('.mobile-nav-slide').css("left", '');
    $('.slide-shader').css("visibility", '');
    $('.slide-shader').css("opacity", '');
});


// Footer
$(document).ready(function() {
    var curr_time = new Date();
    $('#date-target').html(curr_time.getFullYear());
});