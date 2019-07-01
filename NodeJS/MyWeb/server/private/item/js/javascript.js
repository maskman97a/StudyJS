function loadWebFunction() {
    $.ajax({
        dataType: "json",
        headers: { 'Content-Type': 'application/json' },
        type: "GET",
        url: "/api",
        success: function (result) {
            if (result.success == 1) {
                if (result.userInfo.roleId != '') {
                    $('#btn-menu-signup').hide();
                    $('#btn-menu-signin').hide();
                    $('#ul-user-info').show();
                    var admin = "";
                    if (result.userInfo.roleId == 1) {
                        admin = "<span style='color:red'>Đại ca<span>";
                    }
                    var innerUserInfo = "Xin chào: " + result.userInfo.fullname + " - " + admin;
                    $('#navbar-username').html(innerUserInfo);
                } else {

                }
            }
        },
        error: function (result) {
            alert('error');
        }
    });
    $.ajax({
        dataType: "json",
        headers: { 'Content-Type': 'application/json' },
        type: "GET",
        url: "/item/",
        success: function (result) {
            if (result.success == 1) {
                var html = "";
                for (var i = 0; i < result.itemFound.length; i++) {
                    html += "<div><a href='item/" + result.itemFound[i].itemName + "' style='font-size:20px;'>" + result.itemFound[i].itemName + "</a></div>"
                        + `<iframe width="300" height="" src="` + result.itemFound[i].itemLink + `" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
                        ;
                }
                $('#list-item').html(html);
            }
        },
        error: function (result) {
            alert('error');
        }
    });
}

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) $(".lentop").fadeIn();
        else $(".lentop").fadeOut();
    });
    $(".lentop").click(function () {
        $("body,html").animate({ scrollTop: 0 }, "slow");
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            document.getElementById('navbar-fixed').style.display = "block";
        }
        else document.getElementById('navbar-fixed').style.display = "none";
    });
});