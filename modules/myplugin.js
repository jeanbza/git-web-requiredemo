// Example of simple plugin inside Require.js framework
define(['jquery', 'bootstrap', 'jqueryui/widget'], function ($) {
    $.widget('testapp.myplugin', {                  // namespace.name
        options: {                                  // Widget options
            modalClass: "default",
            modifyClass: "default"
        },

        _init: function() {
            var state = this;
            var myModal = $("."+state.options.modalClass);

            this.element.click(function(e){         // Bind element with click
                e.preventDefault();                 // Prevent default a href behavior
                myModal.modal();                    // Create a bootstrap modal
            });

            myModal.children(".modal-footer").children(".bst-js-do-something").click(function(e){
                $("."+state.options.modifyClass).append("<p>I did something boss!</p>"); // Do something on click!
            });
        }
    });
});