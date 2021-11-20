/**
 * UserのIDの余りによって、色分けを行う。
 * 
 * @author jumborin
 */
$(function () {
    var ticket_panel_coloring = function () {
        // 色設定
        const GREEN = "#AEFFBD";
        const BLUE = "#CCFFFF";
        const PURPLE = "#FFCCFF";
        const RED = "#FFAD90";
        const PINK = "#FFABCE";
        const YELLOW = "#FFFFBF";
        const COLORING = [GREEN, BLUE, PURPLE, RED, PINK, YELLOW];

        // 処理
        $(".card-content").each(function () {
            $(this).css("backgroundColor", COLORING[$(this).children(".assigned_to").children(".value").children(".user").attr("href").split("/")[2] % 6]);
        });
    };

    ticket_panel_coloring();

});
