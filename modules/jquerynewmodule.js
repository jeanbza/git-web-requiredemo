// jQuery new version module
define(['jquery'], function ($) {
    return {
        whatVersionIsThisUsing: function() {
            alert($().jquery);  // Alert the version of jquery loaded
        }
    }
});