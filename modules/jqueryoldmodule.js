// jQuery old version module
define(['jquery'], function ($) {
    return {
        whatVersionIsThisUsing: function() {
            alert(this.getVersion()); // Alert the version of jquery loaded
        },

        // Example of multiple functions within a module, how to define and call
        getVersion: function() {
            return $().jquery;
        }
    }
});