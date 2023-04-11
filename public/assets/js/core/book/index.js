jQuery(document).ready(function() {
    $.ajax({
        url: '/book/get',
        method: "POST",
        dataType: 'json',
        success: function (result) {
            console.log('result', result)
    
            result.forEach(data => {
                jQuery("#showBook").html(
                    `<div class="row mt-3">
                        <div class="col-lg-6">
                            <h5 class="text-brown text-bold text-left">BUKU PKN STAN</h5>
                        </div>
                        <div class="col-lg-6">
                            <a data-toggle="collapse" data-target="#detailBook" href="#" class="nav-link text-white p-1" style="float: right;">Lihat</a>
                        </div>
                    </div>
                    <div id="detailBook" class="row collapse">
                        <div class="col-lg-3 mb-2">
                            <a class="nav-link openDetailBook" href="#">
                                <img class="img-book" src="/assets/images/icon/8f3d3c5fdc210a46db5af9994fd1bbba.jpeg">
                                <p></p>
                                <span class="text-white">Matematika</span><br>
                                <span class="text-brown">Rp. 120.000</span><br>
                            </a>
                            <button type="button" class="btn btn-brown text-bold openOrderBook">Beli</button>
                        </div>
                        <div class="col-lg-3">
                            <a class="nav-link openDetailBook" href="#">
                                <img class="img-book" src="/assets/images/icon/8f3d3c5fdc210a46db5af9994fd1bbba.jpeg">
                                <p></p>
                                <span class="text-white">Matematika</span><br>
                                <span class="text-brown">Rp. 120.000</span><br>
                            </a>
                            <button type="button" class="btn btn-brown text-bold openOrderBook">Beli</button>
                        </div>
                        <div class="col-lg-3">
                            <a class="nav-link openDekltailBook" href="#">
                                <img class="img-book" src="/assets/images/icon/8f3d3c5fdc210a46db5af9994fd1bbba.jpeg">
                                <p></p>
                                <span class="text-white">Matematika</span><br>
                                <span class="text-brown">Rp. 120.000</span><br>
                            </a>
                            <button type="button" class="btn btn-brown text-bold openOrderBook">Beli</button>
                        </div>
                        <div class="col-lg-3">
                            <a class="nav-link openDetailBook" href="#">
                                <img class="img-book" src="/assets/images/icon/8f3d3c5fdc210a46db5af9994fd1bbba.jpeg">
                                <p></p>
                                <span class="text-white">Matematika</span><br>
                                <span class="text-brown">Rp. 120.000</span><br>
                            </a>
                            <button type="button" class="btn btn-brown text-bold openOrderBook">Beli</button>
                        </div>
                    </div>
                `)
            })
        }
    })
})