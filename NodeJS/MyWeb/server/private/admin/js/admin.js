$(document).ready(function () {
    $("#add-item-btn").click(function (e) {
        e.preventDefault();
        var item = {
            itemName: $("#input-itemName").val(),
            itemLink: $("#input-itemLink").val(),
            description: $('#input-description').val(),
            author: $('#inp-author').val()
        };
        var jsonStr = JSON.stringify(item);
        $.ajax({
            dataType: "json",
            headers: { 'Content-Type': 'application/json' },
            type: "POST",
            url: "/admin/addItem",
            data: jsonStr,
            success: function (result) {
                if (result.success == 1) {
                    $('#add-item-status').html("Thêm sản phẩm thành công!");
                } else {
                    $('#add-item-status').html("Thêm sản phẩm thất bại!");
                }
            },
            error: function (result) {
                alert('error');
            }
        });
    });

});

function showFormAddItem() {
    $("#formAddItem").show();
    $("#div-table-list-item").hide();
}

function showItemList() {
    $("#formAddItem").hide();
    $("#div-table-list-item").show();
    $.ajax({
        dataType: "json",
        headers: { 'Content-Type': 'application/json' },
        type: "GET",
        url: "/item",
        success: function (result) {
            if (result.success == 1) {
                var html = `<tr>
                <td>
                    <span>Tên sản phẩm</span>
                </td>
                <td>
                    <span>Đường dẫn sản phẩm</span>
                </td>
                <td>
                    <span>Bản quyền</span>
                </td>
                <td>
                    <span>Ghi chú</span>
                </td>
                <td>
                    <span>Hành động</span>
                </td>
                </tr>`;
                var data = result.itemFound;
                for (var i = 0; i < data.length; i++) {
                    html += "<tr>" +
                        "<td>" + data[i].itemName + "</td>" +
                        "<td>" + data[i].itemLink + "</td>" +
                        "<td>" + data[i].author + "</td>" +
                        "<td>" + data[i].description + "</td>" +
                        "<td><a href='item/'" + data[i].itemName + ">Sửa</a></td>" +
                        "</tr>"
                }
                $("#table-list-item").html(html);
            } else {

            }
        },
        error: function (result) {
            alert('error');
        }
    });
}