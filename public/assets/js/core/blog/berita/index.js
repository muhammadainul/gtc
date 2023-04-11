jQuery(document).on("click", ".actionGetBerita", function() {
    var id = jQuery(this).data("id")
    var tipe = jQuery(this).data("tipe")
    var thumbnail = jQuery(this).data("thumbnail")
    var judul = jQuery(this).data("judul")
    var content = jQuery(this).data("content")

    var badge = ""
    if (tipe == "EVENT") badge += "bg-danger"
    else if (tipe == "E-SPORTS") badge += "bg-primary"
    else if (tipe == "PROMO") badge += "bg-purple"
    else if (tipe == "PATCH") badge += "bg-warning"
    else badge += "bg-info"

    jQuery("#beritaTitle").html(`<h5 class="text-dark text-bold text-center">${judul}</h5>`)
    jQuery("#cardContent").html(`
        <div class="card">
            <div class="badge ${badge} text-white position-absolute">
                <span>${tipe}</span>
            </div>
            <div class="card-image">
                <img class="img-carousel w-100 h-100" src="${thumbnail}" alt="..." />
            </div>
            <div class="card-body">
                <div class="small text-uppercase fw-bold text-muted">Free</div>
                <div class="mb-3">
                    <span class="fw-bold">${judul}</span>
                </div>
                <div class="content">
                    <span class="text-muted text-small">
                        ${content.substring(0, 50)}
                    </span>
                </div>
            </div>
        </div>
    `)
    jQuery("#contentData").html(`<span class="text-warning">${content}</span>`)
})

jQuery("#nav-jurusan-tab").on('click', function() {
    jQuery("#navJurusan").show()
    jQuery("#navJurusan").removeClass('d-none')
    jQuery("#navJurusan").addClass('active')
    jQuery("#navJurusan").addClass('show')
    jQuery("#navProfile").hide()
    jQuery("#navProfile").removeClass('active')
    jQuery("#navProfile").removeClass('show')
})

jQuery("#nav-profile-tab").on('click', function() {
    jQuery("#navJurusan").hide()
    jQuery("#navJurusan").addClass('d-none')
    jQuery("#navJurusan").removeClass('active')
    jQuery("#navJurusan").removeClass('show')
    jQuery("#navProfile").removeClass('d-none')
    jQuery("#navProfile").addClass('active')
    jQuery("#navProfile").addClass('show')
    jQuery("#navProfile").show()
})

if (jQuery(window).width() < 800) {
    jQuery("#mediumContent").addClass('d-none');
}

if (jQuery(window).width() < 800) {
    jQuery("#mediumContentPromo").addClass('d-none');
}