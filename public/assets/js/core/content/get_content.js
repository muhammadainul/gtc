jQuery(".getMateri").click(function() {
    var id = jQuery(this).data("content")
    var formData = {
        type: id 
    }

    $.ajax({
        url: '/belajar/materi/detail',
        method: "GET",
        data: formData,
        dataType: 'json',
        success: function (result) {
            result.forEach(data => {
                if (data.read == false) {
                    jQuery(".contentMateri").html(
                        `<div class="row mt-5 text-center">
                            <div class="col mb-2">
                                <a href="${data.contentlink}" target="_blank">
                                    <img class="img-thumbnail-viewer" src="${data.thumbnail}" />
                                </a>
                            </div>
                            <div class="col-lg-6">
                                <span class="text-warning">${data.name}</span>
                            </div>
                                <i class="fa fa-check-circle fa-2x text-white"></i>
                                <div class="col-lg-3">
                                    <i class="fa fa-check-circle fa-2x text-white"></i>
                                </div>
                        </div>`
                    )
                } else {
                    jQuery(".contentMateri").html(
                        `<div class="row mt-5 text-center">
                            <div class="col mb-2">
                                <a href="${data.contentlink}" target="_blank">
                                    <img class="img-thumbnail-viewer" src="${data.thumbnail}" />
                                </a>
                            </div>
                            <div class="col-lg-6">
                                <span class="text-warning">${data.name}</span>
                            </div>
                                <i class="fa fa-check-circle fa-2x text-white"></i>
                                <div class="col-lg-3">
                                    <img width="30px" src="/assets/images/icon/12. sudah di tonton.png">
                                </div>
                        </div>`
                    )
                }
            })
        }
    })
})