jQuery(document).ready(function() {
    $.ajax({
        url: '/dailynotes/get',
        method: "POST",
        dataType: 'json',
        success: function (result) {    
            jQuery("#barNotes").html(`<span class="text-white mt-2" style="font-size: 13px; 
            text-align: center;">${result.content}</span>`)
        }
    })
})