define(['jquerynew'], function ($) {
    return {
        whatVersionIsThisUsing: function() {
            alert($().jquery);  // Alert the version of jquery loaded
        }
    }
});