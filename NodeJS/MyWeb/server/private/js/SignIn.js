$(document).ready(function () {
    $("#btn-sign-in").click(function (e) {
        e.preventDefault();
        var user = {
            username: $("#input-username-signin").val(),
            password: $("#input-password-signin").val()
        };
        var jsonStr = JSON.stringify(user);
        $.ajax({
            dataType: "json",
            headers: { 'Content-Type': 'application/json' },
            type: "POST",
            url: "/auth/login",
            data: jsonStr,
            success: function (result) {
                if(result.success == 1 ){
                    alert("Đăng nhập thành công!");
                    window.location.href="";
                }
            },
            error: function (result) {
                alert('error');
            }
        });
    });
});

function validateUsernameSignIn() {
    if ($("#input-username-signin").val().length < 6) {
        $("#input-username-status-in").html("Chưa đủ 6 ký tự!");
    } else {
        $("#input-username-status-in").html("");
    }
    validateBtnSignIn();
}

function validatePasswordSignIn() {
    if ($("#input-password-signin").val().length < 6) {
        $("#input-password-status-in").html("Chưa đủ 6 ký tự!");
    } else {
        $("#input-password-status-in").html("");
    }
    validateBtnSignIn();
}
function validateBtnSignIn(){
    if ($("#input-password-signin").val().length < 6 || $("#input-username-signin").val().length < 6) {
        $('#btn-sign-in').prop("disabled", true);
    }else { 
        $('#btn-sign-in').prop("disabled", false);
    }
}

$(document).ready(function () {
    $("#btn-signout").click(function (e) {
        e.preventDefault();
        $.ajax({
            dataType: "json",
            headers: { 'Content-Type': 'application/json' },
            type: "DELETE",
            url: "/auth/logout",
            success: function (result) {
                if(result.success ==1){
                    alert("Đăng xuất thành công!");
                    window.location.href="";
                }
            },
            error: function (result) {
                alert('error');
            }
        });
    });
});