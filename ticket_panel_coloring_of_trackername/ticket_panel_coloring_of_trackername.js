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
            if (tracker_name == "�o�O") {
                console.log(tracker_name);
                $(this).css("backgroundColor", GREEN);
            } else if (tracker_name == "�@�\") {
                console.log(tracker_name);
                $(this).css("backgroundColor", BLUE);
            } else if (tracker_name == "�T�|�[�g") {
                console.log(tracker_name);
                $(this).css("backgroundColor", PURPLE);
            } else {
                // Do Nothing
            }
        });
    };

    /* �����\�� */
    ticket_panel_coloring_of_trackername();

    /* Drop�C�x���g���Ajax�������S���I��(Stop)��ɍĎ��s */
    $(document).ajaxStop(function () {
        ticket_panel_coloring_of_trackername();
    });
});