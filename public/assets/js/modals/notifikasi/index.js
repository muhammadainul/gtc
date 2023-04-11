jQuery(document).on('click', '.readNotif', function (){
    jQuery("#modalNotifikasi").modal('show')

    var id = jQuery(this).data('id')
    var title = jQuery(this).data('title')
    var content = jQuery(this).data('content')
    var date = jQuery(this).data('date')
    var notifDate = new Date(date)

    jQuery("#bodyModalNotifikasi").html(`
        <div class="modal-header">
            <div class="container">
                <div class="row">
                    <div class="col mx-auto">
                        <h5 class="modal-title text-warning text-center">${title}</h5><br>
                        <span class="text-warning text-small">${notifDate}</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col mb-0">
                        
                    </div>
                </div>
            </div>
            <!-- <button type="button" class="close text-white" data-dismiss="modal" aria-hidden="true">&times;</button> -->
        </div>
        <div class="modal-body">
            <span class="text-white text-left">${content}</span>
        </div> 
    `)

    $.ajax({
        url: '/notifikasi/read',
        method: "post",
        data: { id },
        dataType: 'json',
        success: function (result) {
        }
    })
})