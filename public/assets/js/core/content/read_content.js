jQuery(".readContent").click(function() {
    var id = jQuery(this).data("id")
    var formData = {
        id
    }

    $.ajax({
        url: '/content/read',
        method: "post",
        data: formData,
        dataType: 'json',
        success: function (result) {
        }
    })
})