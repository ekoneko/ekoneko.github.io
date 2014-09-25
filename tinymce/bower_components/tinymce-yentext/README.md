a yen text plugin for tinymce

## how to use

    options = {
        toolbar1: "yen",
        external_plugins: {
            yen: "tinymce/plugin/yen/plugin.js"
        }
        // , and other options
    }
    tinymce.DOM.loadCSS("tinymce/plugin/yen/style.css");
    tinyMCE.init(options);