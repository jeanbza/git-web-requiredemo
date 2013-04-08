require.config({
    baseUrl: '/requiredemo/',
    urlArgs: "bust=" + (new Date()).getTime(),                          // Automatic versioning
    paths: {
        'jquery': '/requiredemo/library/jquery/jquery-1.9.1.min',       // Our 'standard' jquery
        'jqueryui': '/requiredemo/library/jqueryui/1.10.0/',
        'bootstrap': '/requiredemo/library/bootstrap/js/bootstrap.min'
    },
    map: {
        'modules/jqueryoldmodule': {
            'jquery': 'library/jquery/1.8/jquery.module'                // When the module defines 'jquery', load the jquery 1.8 AMD wrapper
        },
        'modules/jquerynewmodule': {
            'jquery': 'library/jquery/1.9/jquery.module'                // When the module defines 'jquery', load the jquery 1.9 AMD wrapper
        }
    },
    // Configure the dependencies and exports for older, traditional "browser globals" - 
    // scripts that do not use define() to declare the dependencies and set a module value.
    shim: {  
        "jqueryuiwidget": {
            exports: "$",
            deps: ['jquery']
        }
    }
});

require([
    'jquery',
    'modules/jquerynewmodule',
    'modules/jqueryoldmodule',
    'modules/myplugin'
    ], function ($, jquerynewmodule, jqueryoldmodule) {
        $(document).ready(function() {

            // Demonstrate multiple versions of same dependency (jquery 1.8, 1.9)
            $(".bst-js-launchdemo-new").click(function(){
                jquerynewmodule.whatVersionIsThisUsing();
            });
            $(".bst-js-launchdemo-old").click(function(){
                jqueryoldmodule.whatVersionIsThisUsing();
            });

            // Demonstrate jqueryui widget (plugin) format with Require.js framework
            $(".bst-js-launchdemo-plugin").myplugin({
                modalClass: "bst-js-my-modal",
                modifyClass: "bst-js-modify-this"
            });
            
        });
    });
