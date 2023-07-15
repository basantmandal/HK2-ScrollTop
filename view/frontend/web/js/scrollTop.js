require(['jquery'], function ($) {
    window.onscroll = function () {
        document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? jQuery("#scrollTop_HK2").fadeIn() : jQuery("#scrollTop_HK2").fadeOut();
    };

    jQuery('#scrollTop_HK2').click(function () {
        jQuery('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });
});
