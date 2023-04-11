jQuery("#formLoginUser").submit(function(e){
    e.preventDefault()

    var formData = {
        username: jQuery("#username").val(),
        password: jQuery("#password").val(),
    }
    
    $.ajax({
        url: '/user/login',
        method: "post",
        data: formData,
        dataType: 'json',
        success: function (result) {
            if (result.success == false) {
                Swal.fire({ icon: 'error', title: result.message })
            } else if (result.success == true && result !== undefined) {
                Swal.fire({ icon: 'success', title: result.message })
                window.setTimeout( function(){
                    window.location = "/"
                }, 2000 )
            }
        }
    })
})