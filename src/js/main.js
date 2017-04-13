/*
 Third party
 */
//= ../../node_modules/jquery/dist/jquery.min.js
//= ../../node_modules/wowjs/dist/wow.min.js

/*
    Custom
 */
//= partials/header__fixed.js
//= partials/burger.js
//= partials/main__menu.js
//= partials/jquery.magnific-popup.js

//popup

$(document).ready(function () {
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function () {
                if ($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });
});