// function getNotif() {
    jQuery(document).ready(function($){
        $.ajax({
            method: "POST",
            url: "/notifikasi/get",
            cache: false,
            success: function(result) {
    
                if (result.data.length > 0) {
                    $("#notif").html(`<a class="nav-link" href="/notifikasi" data-toggle='tooltip' data-placement='top' title='Notifikasi baru'>
                        <img src="/assets/images/icon/6. notif merah bar.png">
                        </a>`
                    )
                } else {
                    $("#notif").html(`<a class="nav-link" href="/notifikasi">
                        <a class="mb-5" href="/notifikasi"><i class="fas fa-envelope fa-1x text-white"></i></a>
                        </a>`
                    )
                } 
            },
            error: function(error) {
                // console.log("Could not get posts, server response: " + error);
            }
        })
    })
// }
//setInterval(function() { location.reload() }, 100000)
//setInterval(function() { getNotif() }, 10000)