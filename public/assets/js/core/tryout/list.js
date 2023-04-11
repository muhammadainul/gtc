jQuery(window).on('load', function() {
    var id = jQuery("#changeTryout").val()

    $.ajax({
        url: '/tryout/list/soal',
        method: "post",
        data: { id },
        dataType: 'json',
        success: function (result) {
            jQuery("#listSoalTryout").empty()

            if (result.length > 0) {
                for (let i=0; i < result.length; i++) {
                    // if (result[i].done == false) {
                        jQuery("#listSoalTryout").append(`
                            <div class="row mb-2">
                                <div class="col-lg-12 box-white">
                                    <div class="d-flex flex-row">
                                        <div class="col m-3">
                                            <img width="100px" src="/assets/images/icon/20. latihan perbab.png">
                                        </div>
                                        <div class="col d-flex flex-column m-3" id="textDetailLatihan">
                                            <div class="col">
                                                <h5 class="text-white">${result[i].nama}</h5>
                                            </div>
                                            <div class="col d-flex flex-row">
                                                <div class="col d-flex flex-row align-content-between">
                                                    <div class="col">
                                                        <a data-num="${i}" data-notes="${result[i].panduanumum}" data-id="${id}"
                                                        href="/tryout/category/detail/${result[i]._id}"
                                                        data-nama="${result[i].nama}" data-duration="${result[i].duration}"
                                                        class="btn btn-warning btn-sm text-bold">Lihat Detail Soal</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `)
                //     } else {
                //         jQuery("#listSoalTryout").append(`
                //             <div class="row m-5">
                //                 <div class="col-lg-12 box-white">
                //                     <div class="d-flex flex-row">
                //                         <div class="col m-3">
                //                             <img width="100px" src="/assets/images/icon/20. latihan perbab.png">
                //                         </div>
                //                         <div class="col d-flex flex-column m-3">
                //                             <div class="col">
                //                                 <h5 class="text-white">${result[i].nama}</h5>
                //                             </div>
                //                             <div class="col d-flex flex-row">
                //                                 <div class="col">
                //                                     <a style="text-decoration: none;" href="">
                //                                         <span class="text-warning">Pembahasan</span>
                //                                     </a>
                //                                 </div>
                //                                 <div class="col">
                //                                     <a style="text-decoration: none;" href="">
                //                                         <span class="text-warning">Hasil Akhir</span>
                //                                     </a>
                //                                 </div>
                //                             </div>
                //                         </div>
                //                     </div>
                //                 </div>
                //             </div>
                //         `)
                //     }
                }
            } else {
                jQuery("#listSoalTryout").html(`
                    <div class="row m-5">
                        <div class="col-lg-12">
                            <h4 class="text-white text-center">Tidak ada data</h4>
                        </div>
                    </div>
                `)
            }
        }
    })
})

jQuery("#changeTryout").change(function (){
    let id = jQuery(this).val()

    $.ajax({
        url: '/tryout/list/soal',
        method: "post",
        data: { id },
        dataType: 'json',
        success: function (result) {

            jQuery("#listSoalTryout").empty()

            if (result.length > 0) {
                result.forEach(data => {
                    // if (data.done == false) {
                        jQuery("#listSoalTryout").append(`
                            <div class="row mb-2">
                                <div class="col-lg-12 box-white">
                                    <div class="d-flex flex-row">
                                        <div class="col m-3">
                                            <img width="100px" src="/assets/images/icon/20. latihan perbab.png">
                                        </div>
                                        <div class="col d-flex flex-column m-3" id="textDetailLatihan">
                                            <div class="col">
                                                <h5 class="text-white">${data.nama}</h5>
                                            </div>
                                            <div class="col d-flex flex-row">
                                                <div class="col d-flex flex-row align-content-between">
                                                    <div class="col">
                                                        <a data-notes="${data.panduanumum}" data-id="${id}" 
                                                        href="/tryout/category/detail/${data._id}"
                                                        data-nama="${data.nama}" data-duration="${data.duration}"
                                                        class="btn btn-warning btn-sm text-bold">Lihat Detail Soal</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `)
                    // } else {
                    //     jQuery("#listSoalTryout").append(`
                    //         <div class="row m-5">
                    //             <div class="col-lg-12 box-white">
                    //                 <div class="d-flex flex-row">
                    //                     <div class="col m-3">
                    //                         <img width="100px" src="/assets/images/icon/20. latihan perbab.png">
                    //                     </div>
                    //                     <div class="col d-flex flex-column m-3">
                    //                         <div class="col">
                    //                             <h5 class="text-white">${data.nama}</h5>
                    //                         </div>
                    //                         <div class="col d-flex flex-row">
                    //                             <div class="col">
                    //                                 <a style="text-decoration: none;" href="">
                    //                                     <span class="text-warning">Pembahasan</span>
                    //                                 </a>
                    //                             </div>
                    //                             <div class="col">
                    //                                 <a style="text-decoration: none;" href="">
                    //                                     <span class="text-warning">Hasil Akhir</span>
                    //                                 </a>
                    //                             </div>
                    //                         </div>
                    //                     </div>
                    //                 </div>
                    //             </div>
                    //         </div>
                    //     `)
                    // }
                })
            } else {
                jQuery("#listSoalTryout").html(`
                    <div class="row m-5">
                        <div class="col-lg-12">
                            <h4 class="text-white text-center">Tidak ada data</h4>
                        </div>
                    </div>
                `)
            }
        }
    })
})