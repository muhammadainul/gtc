jQuery(document).on('click', '.openSoalLatihan', function (){
    jQuery("#modalSoalLatihan").modal('show')

    let id = jQuery(this).data("id")
    let num = jQuery(this).data("num")
    let nama = jQuery(this).data("nama")
    let duration = jQuery(this).data("duration")
    let notes = jQuery(this).data("notes")

    let minutes = Math.floor(duration/60)

    localStorage.setItem("namaTestLatihan", nama)
    localStorage.setItem("petunjukTestLatihan", notes)

    jQuery("#modalLatihan").html(`
        <div class="modal-header">
            <button type="button" class="close text-white" data-dismiss="modal" aria-hidden="true">&times;</button>
        </div>
        <div class="modal-body text-center mt-5">
            <p class="text-black text-bold">Anda ingin membuka paket soal ${nama} ?</p>
            <span class="text-black">Syarat : Telah melaksanakan tes intelegensi umum</span><br>
            <span class="text-black">Durasi : ${minutes} Menit</span><br>
            <span class="text-black">(Catatan: Harap menyelesaikan soal, karena soal tidak dapat dikerjakan kembali)</span><br>
            <a data-petunjuk="${notes}" data-nama="${nama}" class="btn btn-warning fa-pull-right btn-sm openPetunjukLatihan"
            href="/latihan/list/petunjuk">Petunjuk Umum</a>
        </div> 
        <div class="modal-footer">
            <button type='button' class='btn btn-outline-modal btn-sm' data-dismiss='modal'>Tidak</button>
            <button type='button' data-id="${id}" data-num="${num}" class='startNowLatihan btn-modal btn-sm' data-toggle='modal'>Ya</button>
        </div>
    `)
})

jQuery(document).ready(function() {
    jQuery("#contentPetunjukLatihan").html(`
        <div class="col-lg-12">
            <div class="d-flex flex-row justify-content-between w-100">
                <div class="p-3">
                    <h5 class="text-warning">PETUNJUK UMUM</h5>
                </div>
                <div class="p-3">
                    <span class="text-warning">${localStorage.getItem('namaTestLatihan')}</span>
                </div>
            </div>
        </div>
        <div class="col-lg-12 m-3 mt-0">
            <p class="text-white">${localStorage.getItem('petunjukTestLatihan')}<br></p>
        </div>
    `)


})