require(['jquery'], function ($) {
    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            jQuery('#scrollTop_HK2').fadeIn();
        } else {
            jQuery('#scrollTop_HK2').fadeOut();
        }
    };

    jQuery('#scrollTop_HK2').click(function () {
        jQuery('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });
});
