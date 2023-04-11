jQuery(window).on('load', function() {
    var id = jQuery("#changeLatihan").val()

    $.ajax({
        url: '/latihan/list/soal',
        method: "post",
        data: { id },
        dataType: 'json',
        success: function (result) {

            jQuery("#listSoalLatihan").empty()

            if (result.length > 0) {
                for (let i=0; i < result.length; i++) {
                    if (result[i].done == false) {
                        jQuery("#listSoalLatihan").append(`
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
                                                    <div class="">
                                                        <a data-num="${i}" data-notes="${result[i].panduanumum}" data-id="${id}"
                                                        data-nama="${result[i].nama}" data-duration="${result[i].duration}"
                                                        class="btn btn-warning btn-sm text-bold openSoalLatihan">Buka Soal</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `)
                    } else {
                        jQuery("#listSoalLatihan").append(`
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
                                                <div class="col">
                                                    <a class="pembahasan-latihan" data-nama="${result[i].nama}"
                                                        data-num="${i}" data-id="${id}" style="text-decoration: none;">
                                                        <span class="text-warning">Pembahasan</span>
                                                    </a>
                                                </div>
                                                <div class="col">
                                                    <a class="result-test" data-num="${i}" data-id="${id}" style="text-decoration: none;" href="#">
                                                        <span class="text-warning">Hasil Akhir</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `)
                    }
                }
            } else {
                jQuery("#listSoalLatihan").html(`
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

jQuery("#changeLatihan").change(function (){
    let id = jQuery(this).val()

    $.ajax({
        url: '/latihan/list/soal',
        method: "post",
        data: { id },
        dataType: 'json',
        success: function (result) {

            jQuery("#listSoalLatihan").empty()

            if (result.length > 0) {
                let count = 0
                result.forEach(data => {
                    if (data.done == false) {
                        jQuery("#listSoalLatihan").append(`
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
                                                        <a data-num="${count}" data-nama="${data.nama}"
                                                        data-notes="${data.panduanumum}" 
                                                        data-id="${id}" data-nama="${data.nama}" data-duration="${data.duration}"
                                                        class="btn btn-warning btn-sm text-bold openSoalLatihan">Buka Soal</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `)
                    } else {
                        jQuery("#listSoalLatihan").append(`
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
                                                <div class="col">
                                                    <a class="pembahasan-latihan" data-nama="${data.nama}"
                                                        data-num="${count}" data-id="${id}" style="text-decoration: none;" href="#">
                                                        <span class="text-warning">Pembahasan</span>
                                                    </a>
                                                </div>
                                                <div class="col">
                                                    <a class="result-test" data-num="${count}" data-id="${id}" style="text-decoration: none;" href="#">
                                                        <span class="text-warning">Hasil Akhir</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `)
                    }
                    count++
                })
            } else {
                jQuery("#listSoalLatihan").html(`
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