define([
    // Load the original jQuery source file
    '/require/library/jquery/1.9/jquery.min.js'
    ], 
    function(){
        // Tell Require.js that this module returns a reference to jQuery
        return $;//return the global scope object
    });