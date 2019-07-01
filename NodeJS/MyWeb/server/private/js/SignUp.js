$(document).ready(function () {
    $("#btn-sign-up").click(function (e) {
        e.preventDefault();
        var user = {
            fullname: $("#input-fullname-signup").val(),
            username: $("#input-username-signup").val(),
            password: $("#input-password-signup").val(),
            repassword: $("#re-input-password-signup").val()
        };
        var jsonStr = JSON.stringify(user);
        $.ajax({
            dataType: "json",
            headers: { 'Content-Type': 'application/json' },
            type: "POST",
            url: "/user/create",
            data: jsonStr,
            success: function (result) {
                if (result.success == 1) {
                    alert("Tạo tài khoản thành công!");
                    $('#input-username-signup').val("");
                    $('#input-password-signup').val("");
                    $('#re-input-password-signup').val("");
                } else {
                    alert("Tài khoản đã tồn tại!");
                }
            },
            error: function (result) {
                alert('Kết nối tới server bị lỗi!');
            }
        });
    });
});

function validateBtnSignUp() {
    if ($('#input-username-signup').val().length < 6 || $('#input-password-signup').val().length < 6 || $('#input-password-signup').val() != $('#re-input-password-signup').val()) {
        $("#btn-sign-up").prop("disabled", true);
    } else {
        $("#btn-sign-up").prop("disabled", false);
    }
}
function validateUsernameSignUp() {
    if ($('#input-username-signup').val().length < 6) {
        $('#input-username-status').html("Chưa đủ 6 ký tự!");
    } else {
        $('#input-username-status').html("OK!");
    }
    validateBtnSignUp();
}

function validatePasswordSignUp() {
    if ($('#input-password-signup').val().length < 6) {
        $('#input-password-status').html("Chưa đủ 6 ký tự!");
    } else {
        $('#input-password-status').html("OK!");
    }
    validateBtnSignUp();
}
function validateRepasswordSignUp() {
    if ($('#input-password-signup').val() != $('#re-input-password-signup').val()) {
        $('#re-input-password-status').html("Nhập lại mật khẩu không đúng!");
    } else {
        $('#re-input-password-status').html("OK!");
    }
    validateBtnSignUp();
}