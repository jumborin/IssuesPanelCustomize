$(function () {
    color();
});

function color() {
    $(".card-content").each(function () {
        switch ($(this).children(".assigned_to").children(".value").children(".user").attr("href").split("/")[2] % 6) {
            case 0:
                $(this).css("backgroundColor", "#AEFFBD");
                break;
            case 1:
                $(this).css("backgroundColor", "#CCFFFF");
                break;
            case 2:
                $(this).css("backgroundColor", "#FFCCFF");
                break;
            case 3:
                $(this).css("backgroundColor", "#FFAD90");
                break;
            case 4:
                $(this).css("backgroundColor", "#FFABCE");
                break;
            case 5:
                $(this).css("backgroundColor", "#D0B0FF");
                break;
        }
    });
}
