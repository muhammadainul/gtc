jQuery(document).on('click', '.openOrderConfirm', function (){
    // jQuery("#modalOrder").modal('hide')
    var id_package = jQuery(this).data('idpackage')
    var id_tryout = jQuery(this).data('idcategory')
        
    $.ajax({
        url: '/shop/buy',
        method: "post",
        data: { id_package, id_tryout },
        dataType: 'json',
        success: function (result) {
            if (result.success == false) {
                Swal.fire({ icon: 'error', title: result.message })
            } else if (result.success == true && result !== undefined) {
                Swal.fire({ icon: 'success', title: result.message })
            }
        }
    })
})