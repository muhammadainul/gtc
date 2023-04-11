jQuery("#formRegistrasiUser").submit(function(e){
    e.preventDefault()

    var formData = {
        namalengkap: jQuery("#namalengkap").val(),
        email: jQuery("#email").val(),
        jeniskelamin: jQuery("#jeniskelamin").val(),
        sekolah: jQuery("#sekolah").val(),
        kabupaten: jQuery("#kabupaten").val(),
        provinsi: jQuery("#provinsi").val(),
        username: jQuery("#username").val(),
        password: jQuery("#password").val()
    }
    
    $.ajax({
        url: '/user/register',
        method: "post",
        data: formData,
        dataType: 'json',
        success: function (result) {
            if (result.success == false) {
                Swal.fire({ icon: 'error', title: result.message })
            } else {
                Swal.fire({ icon: 'success', title: result.message })
                window.setTimeout( function(){
                    window.location = "/login"
                }, 3000 )
            }
        }
    })
})