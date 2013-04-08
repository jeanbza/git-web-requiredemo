define(['jqueryold'], function ($) {
    return {
        whatVersionIsThisUsing: function() {
            alert($().jquery);  // Alert the version of jquery loaded
        }
    }
});