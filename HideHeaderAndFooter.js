/*
* チケットパネルのヘッダーとフッターを非表示化する
*/
$(function () {
    var ticket_panel_header_hide = function(){
        // ヘッダーを非表示化
        $(".header").hide();
    };
    var ticket_panel_footer_hide = function(){
        // フッター（ウォッチ）を非表示化
        $("div .footer").hide();
    };
    
    /* 初期表示 */
    ticket_panel_header_hide();
    ticket_panel_footer_hide();
    
    /* ステータス変更時など、DOMが差し替えられる度に実行 */
    var _replaceDomWith = replaceDomWith;
    replaceDomWith = function(html){
        _replaceDomWith(html);
        ticket_panel_header_hide();
        ticket_panel_footer_hide();
    };
    
    /* Dropイベント後のAjax処理が全部終了(Stop)後に再実行 */
    $(document).ajaxStop(function(){
        ticket_panel_header_hide();
        ticket_panel_footer_hide();
    });
});
