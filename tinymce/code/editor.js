/*global tinyMCE:true */
/*global jQuery:true */

(function () {
    'use strict';

    var scroll = function () {
        var toolbar, offset, mcebox;
        toolbar = $('.editor-container').find('.mce-toolbar-grp');
        if (toolbar.length === 0) {
            return;
        }
        mcebox = $('.mce-tinymce');
        offset = mcebox.offset();
        if (offset.top - $(document).scrollTop() < 10) {
            // fixed on top
            mcebox.addClass('ontop');
            toolbar.css({
                left: offset.left + 'px',
                width: mcebox.width() + 'px'
            });
        } else {
            // not absolute
            mcebox.removeClass('ontop');
            toolbar.css({
                left: '',
                width: ''
            });
        }
    };

    jQuery.fn.editor = function (mode, opts) {
        var modeOptions,
            options = {
                selector: '#' + this.attr('id'),
                language_url: 'code/i18n/zh-CN.js',
                menubar: false,
                statusbar: false,
                auto_focus: false,
            };

        options = tinyMCE.extend(opts || {}, options);
        tinyMCE.baseURL = './bower_components/tinymce';

        mode = mode || 'standard';
        switch (mode) {
        case 'standard':
            modeOptions = {
                toolbar1: 'undo redo | styleselect bold italic forecolor outdent indent | link unlink',
                plugins: 'link code textcolor'
            };
            break;

        case 'editor':
            modeOptions = {
                toolbar1: 'undo redo | styleselect bold italic forecolor outdent indent | link unlink | yen',
                plugins: 'link code textcolor',
                skin_url: 'code/skin',
                external_plugins: {
                    html5image: '../tinymce-html5image/plugin.min.js',
                    yen: '../tinymce-yentext/plugin.min.js'
                }
            };
            tinyMCE.DOM.loadCSS('./bower_components/tinymce-yentext/style.css')
            $(document).on('scroll', scroll);
            break;
        }
        tinyMCE.extend(options, modeOptions);
        tinyMCE.init(options);
        return this;
    };
}());
