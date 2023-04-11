jQuery(window).on('load', function() {
    var id = jQuery("#changeShop").val()
    var name = jQuery('#changeShop option:selected').text()

    $.ajax({
        url: '/shop/get',
        method: 'post',
        dataType: 'json',
        success: function (result) {
            jQuery("#listShop").empty()
            jQuery("#listShopBimbel").empty()

            let img = ''
            result.data.forEach(data => {
                if (data.nama == "Paket Mini") {
                    img = "<img src='/assets/images/icon/rev book 1.png' width='100px'>"
                } else if (data.nama == "Paket Silver") {
                    img = "<img src='/assets/images/icon/try out 2.png' width='100px'>"
                } else if (data.nama == "Paket Gold") {
                    img = "<img src='/assets/images/icon/try out 3.png' width='100px'>"
                } else if (data.nama == "Paket Platinum") {
                    img = "<img src='/assets/images/icon/try out 4.png' width='100px'>"
                } else {
                    img = "<img src='/assets/images/icon/try out 5.png' width='100px'>"
                }
                jQuery("#listShop").append(`
                    <div class="col" id="textShopMobile">
                        <div class="d-flex flex-row align-content-center justify-content-center m-3">
                            <div class="p-1">
                               ${img}
                            </div>
                            <div class="p-2 w-100">
                                <h5 class="text-white text-bold">${data.nama}</h5>
                                <span class="text-warning">Rp ${data.price}</span>
                            </div>
                            <div class="p-3 w-100">
                                <div class="d-flex flex-row align-items-end">
                                    <div class="p-0 mt-5">
                                        <button type="button" data-name="${data.nama}" data-price="${data.price}"
                                            data-tryout="${data.tryout}" data-vtips="${data.videotips}" 
                                            data-vbahas="${data.videobahas}"
                                            class="btn btn-toolbar btn-sm text-warning text-bold openPaketModal">Lihat Paket
                                        </button>
                                    </div>
                                    <div class="p-0 mt-5">
                                        <button type="button" data-idpackage="${data._id}" 
                                            data-name="${data.nama}" data-package="${name}" 
                                            data-idcategory="${id}"
                                            data-price="${data.price}"
                                            data-tryout="${data.tryout}" data-vtips="${data.videotips}" data-vbahas="${data.videobahas}"
                                            class="btn btn-warning btn-lg text-bold openOrder">BELI
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `)

                jQuery("#listShopBimbel").append(`
                    <div class="col" id="textShopMobile">
                        <div class="d-flex flex-row align-content-center justify-content-center m-3">
                            <div class="p-1">
                               ${img}
                            </div>
                            <div class="p-2 w-100">
                                <h5 class="text-white text-bold">${data.nama}</h5>
                                <span class="text-warning">Rp ${data.price}</span>
                            </div>
                            <div class="p-3 w-100">
                                <div class="d-flex flex-row align-items-end">
                                    <div class="p-0 mt-5">
                                        <button type="button" data-name="${data.nama}" data-price="${data.price}"
                                            data-tryout="${data.tryout}" data-vtips="${data.videotips}" 
                                            data-vbahas="${data.videobahas}"
                                            class="btn btn-toolbar btn-sm text-warning text-bold openPaketModal">Lihat Paket
                                        </button>
                                    </div>
                                    <div class="p-0 mt-5">
                                        <button type="button" data-idpackage="${data._id}" 
                                            data-name="${data.nama}" data-package="${name}" 
                                            data-idcategory="${id}"
                                            data-price="${data.price}"
                                            data-tryout="${data.tryout}" data-vtips="${data.videotips}" data-vbahas="${data.videobahas}"
                                            class="btn btn-warning btn-lg text-bold openOrder">BELI
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `)
            })
        }
    })
})

jQuery("#changeShop").change(function (){
    var id = jQuery(this).val()
    var name = jQuery('#changeShop option:selected').text()

    $.ajax({
        url: '/shop/get',
        method: "post",
        dataType: 'json',
        success: function (result) {
            jQuery("#listShop").empty()
            jQuery("#listShopBimbel").empty()

            let img = ''
            result.data.forEach(data => {
                if (data.nama == "Paket Mini") {
                    img = "<img src='/assets/images/icon/rev book 1.png' width='100px'>"
                } else if (data.nama == "Paket Silver") {
                    img = "<img src='/assets/images/icon/try out 2.png' width='100px'>"
                } else if (data.nama == "Paket Gold") {
                    img = "<img src='/assets/images/icon/try out 3.png' width='100px'>"
                } else if (data.nama == "Paket Platinum") {
                    img = "<img src='/assets/images/icon/try out 4.png' width='100px'>"
                } else {
                    img = "<img src='/assets/images/icon/try out 5.png' width='100px'>"
                }
                jQuery("#listShop").append(`
                    <div class="col" id="textShopMobile">
                        <div class="d-flex flex-row align-content-center justify-content-center m-3">
                            <div class="p-1">
                               ${img}
                            </div>
                            <div class="p-2 w-100">
                                <h5 class="text-white text-bold">${data.nama}</h5>
                                <span class="text-warning">Rp ${data.price}</span>
                            </div>
                            <div class="p-3 w-100">
                                <div class="d-flex flex-row align-items-end">
                                    <div class="p-0 mt-5">
                                        <button type="button" data-name="${data.nama}" data-price="${data.price}"
                                            data-tryout="${data.tryout}" data-vtips="${data.videotips}" 
                                            data-vbahas="${data.videobahas}"
                                            class="btn btn-toolbar btn-sm text-warning text-bold openPaketModal">Lihat Paket
                                        </button>
                                    </div>
                                    <div class="p-0 mt-5">
                                        <button type="button" data-name="${data.nama}" data-idpackage="${data._id}"
                                            data-package="${name}" 
                                            data-idcategory="${id}"
                                            data-price="${data.price}"
                                            data-tryout="${data.tryout}" data-vtips="${data.videotips}" data-vbahas="${data.videobahas}"
                                            class="btn btn-warning btn-lg text-bold openOrder">BELI
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `)

                jQuery("#listShopBimbel").append(`
                    <div class="col">
                        <div class="d-flex flex-row align-content-center justify-content-center m-3">
                            <div class="p-1">
                               ${img}
                            </div>
                            <div class="p-2 w-100">
                                <h5 class="text-white text-bold">${data.nama}</h5>
                                <span class="text-warning">Rp ${data.price}</span>
                            </div>
                            <div class="p-3 w-100">
                                <div class="d-flex flex-row align-items-end">
                                    <div class="p-0 mt-5">
                                        <button type="button" data-name="${data.nama}" data-price="${data.price}"
                                            data-tryout="${data.tryout}" data-vtips="${data.videotips}" 
                                            data-vbahas="${data.videobahas}"
                                            class="btn btn-toolbar btn-sm text-warning text-bold openPaketModal">Lihat Paket
                                        </button>
                                    </div>
                                    <div class="p-0 mt-5">
                                        <button type="button" data-idpackage="${data._id}" 
                                            data-name="${data.nama}" data-package="${name}" 
                                            data-idcategory="${id}"
                                            data-price="${data.price}"
                                            data-tryout="${data.tryout}" data-vtips="${data.videotips}" data-vbahas="${data.videobahas}"
                                            class="btn btn-warning btn-lg text-bold openOrder">BELI
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `)
            })
        }
    })
})