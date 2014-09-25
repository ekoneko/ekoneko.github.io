/*global tinymce:true */
/*global $:true */
// require yen/style.css

(function() {
    'use strict';

    var YenTexts = [
        ' |∀ﾟ ', ' (´ﾟДﾟ`) ', ' (;´Д`) ', ' (｀･ω･) ', ' (=ﾟωﾟ)= ', ' | ω・´) ', ' |-` ) ', ' |д` ) ', ' |ー` ) ', ' |∀` ) ', ' (つд⊂) ', ' (ﾟДﾟ≡ﾟДﾟ) ', ' (＾o＾)ﾉ ', ' (|||ﾟДﾟ) ', ' ( ﾟ∀ﾟ) ', ' ( ´∀`) ', ' (*´∀`) ', ' (*ﾟ∇ﾟ) ', ' (*ﾟーﾟ) ', ' (　ﾟ 3ﾟ) ', ' ( ´ー`) ', ' ( ・_ゝ・) ', ' ( ´_ゝ`) ', ' (*´д`) ', ' (・ー・) ', ' (・∀・) ', ' (ゝ∀･) ', ' (〃∀〃) ', ' (*ﾟ∀ﾟ*) ', ' ( ﾟ∀。) ', ' ( `д´) ', ' (`ε´ ) ', ' (`ヮ´ ) ', ' σ`∀´) ', '  ﾟ∀ﾟ)σ ', ' ﾟ ∀ﾟ)ノ ', ' (╬ﾟдﾟ) ', ' (|||ﾟдﾟ) ', ' ( ﾟдﾟ) ', ' Σ( ﾟдﾟ) ', ' ( ;ﾟдﾟ) ', ' ( ;´д`) ', ' (　д ) ﾟ ﾟ ', ' ( ☉д⊙) ', ' (((　ﾟдﾟ))) ', ' ( ` ・´) ', ' ( ´д`) ', ' ( -д-) ', ' (&gt;д&lt;) ', ' ･ﾟ( ﾉд`ﾟ) ', ' ( TдT) ', ' (￣∇￣) ', ' (￣3￣) ', ' (￣ｰ￣) ', ' (￣ . ￣) ', ' (￣皿￣) ', ' (￣艸￣) ', ' (￣︿￣) ', ' (￣︶￣) ', ' ヾ(´ωﾟ｀) ', ' (*´ω`*) ', ' (・ω・) ', ' ( ´・ω) ', ' (｀・ω) ', ' (´・ω・`) ', ' (`・ω・´) ', ' ( `_っ´) ', ' ( `ー´) ', ' ( ´_っ`) ', ' ( ´ρ`) ', ' ( ﾟωﾟ) ', ' (oﾟωﾟo) ', ' (　^ω^) ', ' (｡◕∀◕｡) ', ' /( ◕‿‿◕ )\\ ', ' ヾ(´ε`ヾ) ', ' (ノﾟ∀ﾟ)ノ ', ' (σﾟдﾟ)σ ', ' (σﾟ∀ﾟ)σ ', ' |дﾟ ) ', ' ┃電柱┃ ', ' ﾟ(つд`ﾟ) ', ' ﾟÅﾟ )　 ', ' ⊂彡☆))д`) ', ' ⊂彡☆))д´) ', ' ⊂彡☆))∀`) '
    ];

    tinymce.PluginManager.add('yen', function(editor) {
        var showDialog, createDialog, createItem, choseYen;

        createDialog = function(x, y) {
            var dialog, i;
            dialog = $('<div class="tinymce-yen-box mce-menu"><div>').css({
                left: x + 'px',
                top: y + 'px'
            });
            $('body').append(dialog);

            for (i in YenTexts) {
                dialog.append(createItem(YenTexts[i]));
            }
            setTimeout(function() {
                $(document).on('click.yentext', function() {
                    $(document).off('click.yentext');
                    dialog.remove();
                });
            }, 1);
        };

        createItem = function(text) {
            var item;
            item = $('<div class="tinymce-yen-item">' + text + '</div>');
            item.on('click', function() {
                choseYen(this.innerText);
            });
            return item;
        };

        choseYen = function(text) {
            editor.insertContent(text);
        };

        showDialog = function(event) {
            createDialog(event.pageX, event.pageY);
        };

        editor.addButton('yen', {
            icon: 'yen',
            tooltip: 'Yen text',
            onclick: showDialog
        });
    });
}());