
$(document).ready(function () {
    $("#search").on("submit", function (e) {
        e.priventDefault();

        console.log($("#keyword").val());


    });
    console.log($('#search'));
});