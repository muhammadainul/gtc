jQuery(document).on('click', '.openPaketModal', function (){
    jQuery("#modalPaket").modal('show')

    var name = jQuery(this).data('name')
    var price = jQuery(this).data('price')
    var tryout = jQuery(this).data('tryout')
    var videotips = jQuery(this).data('vtips')
    var videobahas = jQuery(this).data('vbahas')

    var video = videotips + videobahas

    jQuery("#bodyPaketModal").html(`
        <div class="modal-header">
            <div class="container">
                <div class="row">
                    <div class="col mx-auto">
                        <h5 class="modal-title text-warning text-center">${name}</h5><br>
                    </div>
                </div>
                <div class="row">
                    <div class="col mb-0">
                        <span class="text-white text-bold">FASILITAS</span>
                        <span class="text-white text-small fa-pull-right">Rp. ${price}</span>
                    </div>
                </div>
            </div>
            <!-- <button type="button" class="close text-white" data-dismiss="modal" aria-hidden="true">&times;</button> -->
        </div>
        <div class="modal-body">
            <ul class="text-white text-small text-bold">
                <li>${tryout} Paket Try Out Online</li>
                <li>${video} Akses Video Pembelajaran</li>
                <li>Free Akses Ebook</li>
                <li>Free Akses Latihan Soal</li>
            </ul>
        </div> 
    `)
})