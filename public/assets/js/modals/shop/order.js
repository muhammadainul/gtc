jQuery(document).on('click', '.openOrder', function (){
    jQuery("#modalOrder").modal('show')

    var id_package = jQuery(this).data('idpackage')
    var id_category = jQuery(this).data('idcategory')
    var name = jQuery(this).data('name')
    var price = jQuery(this).data('price')
    var tryout = jQuery(this).data('tryout')
    var videotips = jQuery(this).data('vtips')
    var videobahas = jQuery(this).data('vbahas')
    var package = jQuery(this).data('package')

    jQuery("#modalPackageConfirmation").html(`
        <div class="modal-header">
            <button type="button" class="close text-white" data-dismiss="modal" aria-hidden="true">&times;</button>
        </div>
        <div class="modal-body text-center mt-5">
            <p class="text-black">Anda ingin membeli paket : </p>
            <span class="text-black">Nama Paket : ${name}</span><br>
            <span class="text-black">Perguruan Tinggi : ${package}</span>
            <span class="text-black">Harga : Rp. ${price}</span>
        </div> 
        <div class="modal-footer">
            <button type='button' class='btn btn-outline-modal btn-sm' data-dismiss='modal'>Batal</button>
            <button type='button' class='openOrderConfirm btn-modal btn-sm' data-idcategory="${id_category}"
                data-idpackage="${id_package}" data-toggle='modal'>Ya</button>
        </div>
    `)
})