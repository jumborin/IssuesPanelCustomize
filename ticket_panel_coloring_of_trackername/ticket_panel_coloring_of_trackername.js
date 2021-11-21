$(function () {
    var ticket_panel_coloring_of_trackername = function () {
        const GREEN = "#AEFFBD";
        const BLUE = "#CCFFFF";
        const PURPLE = "#FFCCFF";
        const RED = "#FFAD90";
        const PINK = "#FFABCE";
        const YELLOW = "#FFFFBF";
        $(".card-content").each(function () {
            var tracker_name = $(this).children(".header").children(".issue").text().split(" ")[0];
            if (tracker_name == "バグ") {
                console.log(tracker_name);
                $(this).css("backgroundColor", GREEN);
            } else if (tracker_name == "機能") {
                console.log(tracker_name);
                $(this).css("backgroundColor", BLUE);
            } else if (tracker_name == "サポート") {
                console.log(tracker_name);
                $(this).css("backgroundColor", PURPLE);
            } else {
                // Do Nothing
            }
        });
    };

    /* 初期表示 */
    ticket_panel_coloring_of_trackername();

    /* Dropイベント後のAjax処理が全部終了(Stop)後に再実行 */
    $(document).ajaxStop(function () {
        ticket_panel_coloring_of_trackername();
    });
});