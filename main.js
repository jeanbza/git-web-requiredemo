require.config({
    baseUrl: '/require/',
    urlArgs: "bust=" + (new Date()).getTime(),                      // Automatic versionining
    paths: {
        'jquery': '/require/library/jquery/jquery-1.9.1.min',       // Standard jquery
        'jquerynew': '/require/library/jquery/1.9/jquery.module',   // New version of jquery
        'jqueryold': '/require/library/jquery/1.8/jquery.module',   // Old version of jquery
        'jqueryui': '/require/library/jqueryui/1.10.0/',
        'bootstrap': '/require/library/bootstrap/js/bootstrap.min'
    },
    // Configure the dependencies and exports for older, traditional "browser globals" - 
    // scripts that do not use define() to declare the dependencies and set a module value.
    shim: {  
        "jqueryuiwidget": {
            exports: "$",
            deps: ['jquery']
        },
        "bootstrap": ['jquery']
    }
});

require([
    'jquery',
    'modules/jquerynew',
    'modules/jqueryold',
    'modules/myplugin'
    ], function ($, jquerynew, jqueryold) {
        $(document).ready(function() {
            
            // Demonstrate multiple versions of same dependency (jquery 1.8, 1.9)
            $(".bst-js-launchdemo-new").click(function(){
                jquerynew.whatVersionIsThisUsing();
            });
            $(".bst-js-launchdemo-old").click(function(){
                jqueryold.whatVersionIsThisUsing();
            });

            // Demonstrate jqueryui widget (plugin) format with Require.js framework
            $(".bst-js-launchdemo-plugin").myplugin({
                modalClass: "bst-js-my-modal",
                modifyClass: "bst-js-modify-this"
            });
            
        });
    });
