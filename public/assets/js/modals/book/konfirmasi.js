jQuery(document).on('click', '.openOrderBook', function (){
    jQuery("#modalOrderBook").modal('show')

    let id = jQuery(this).data("id")
    let name = jQuery(this).data("name")
    let creator = jQuery(this).data("creator")
    let size = jQuery(this).data("size")
    let thick = jQuery(this).data("thick")
    let heavy = jQuery(this).data("heavy")
    let isbn = jQuery(this).data("isbn")
    let penerbit = jQuery(this).data("penerbit")
    let detail = jQuery(this).data("detail")
    let price = jQuery(this).data("price")

    let prices = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(price)

    jQuery("#modalBodyConfirm").html(`
    <div class="modal-header">
        <button type="button" class="close text-white" data-dismiss="modal" aria-hidden="true">&times;</button>
    </div>
    <div class="modal-body ml-2 mt-5">
        <p class="text-black text-left">Anda ingin membeli buku : </p>
        <span class="text-dark text-left">Nama Buku : ${name}</span><br>
        <span class="text-dark text-left">Penulis : ${creator}</span><br>
        <span class="text-dark text-left">Penerbit : ${penerbit}</span><br>
        <span class="text-dark text-left">Harga : ${prices}</span>
    </div> 
    <div class="modal-footer">
        <a type='button' class='btn btn-outline-modal btn-sm' data-dismiss='modal'>Batal</a>
        <a type='button' data-id='${id}' class='openBuyBook btn-modal btn-sm'>Ya</a>
    </div>
    `)
})

jQuery(document).on('click', ".openBuyBook", function() {
    var id = jQuery(this).data("id")

    $.ajax({
        url: '/buku/buy',
        method: "post",
        data: { id },
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