// AMD (Asynchronous Module Definition) wrapper for jQuery 1.9
define([
    // Load the jQuery source file
    '/requiredemo/library/jquery/1.9/jquery.min.js'
    ], 
    function(){
        // Tell Require.js that this module returns a reference to jQuery
        return $; // Return the global scope object
    });