jQuery(document).on('click', '.openDetailBook', function (){
    jQuery("#modalDetailsBook").modal('show')

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

    const prices = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(price)

    jQuery("#modalBookBody").html(`
        <div class="modal-header">
            <div class="container">
                <div class="row">
                    <div class="col mb-0">
                        <span class="text-white text-bold">DESKRIPSI BUKU</span>
                        <span class="text-white text-small fa-pull-right">
                        ${prices}
                        </span>
                    </div>
                </div>
            </div>
            <!-- <button type="button" class="close text-white" data-dismiss="modal" aria-hidden="true">&times;</button> -->
        </div>
        <div class="modal-body">
            <span class="text-white">Nama Buku : ${name}</span><br>
            <span class="text-white">Penulis : ${creator}</span><br>
            <span class="text-white">Ukuran : ${size}</span><br>
            <span class="text-white">Tebal / Berat : ${thick}/${heavy}</span><br>
            <span class="text-white">ISBN : ${isbn}</span><br>
            <span class="text-white">Penerbit : ${penerbit}</span><br>
            <span class="text-warning">Keterangan : ${detail}</span><br>
        </div> 
    `)
})