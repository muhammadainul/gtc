jQuery(window).on('load', function() {
    var id = jQuery("#changeHistory").val()

    $.ajax({
        url: '/tryout/history',
        method: "post",
        data: { id },
        dataType: 'json',
        success: function (result) {
            jQuery("#tableHistory").empty()

            let color = ''
            if (result.data.length > 0) {
                result.data.forEach(data => {
                    if (data.type == "purchase") {
                        color = 'text-black'
                    } else if (data.type == "start") {
                        color = "text-danger"
                    } else if (data.type == "finish") {
                        color = "text-success"
                    } else {
                        color = "text-primary"
                    }

                    let currentDate = new Date(data.time).toLocaleString("en-US", { timeZone: "Asia/Jakarta", hour12: false })
                    let date = currentDate.split(', ')[0]
                    let time = currentDate.split(', ')[1]
                    jQuery("#tableHistory").append(`
                            <tr>
                                <td><span style="color: #F0E8B2 ;">${date}</span></td>
                                <td><i class="fa fa-circle ${color}"></i></td>
                                <td>
                                    <p class="text-white">${data.text}</span><br>
                                    <span class="text-white">Soal kategori "tes karakteristik pribadi pada TO SPMB #1"</span>
                                </td>
                                <td>
                                    <i class="fa fa-circle-notch text-white"></i>
                                    <span class="text-white">${time}</span>
                                </td>
                            </tr>
                    `)
                })
            } else {
                jQuery("#tableHistory").html('<tr><td><span style="color: #F0E8B2 ;">Tidak ada data</span></td></tr>')
            }
        }
    })
})
jQuery("#changeHistory").change(function(){
    let id = jQuery(this).val()

    $.ajax({
        url: '/tryout/history',
        method: "post",
        data: { id },
        dataType: 'json',
        success: function (result) {
            jQuery("#tableHistory").empty()
            
            let color = ''
            if (result.data.length > 0) {
                result.data.forEach(data => {
                    if (data.type == "purchase") {
                        color = 'text-black'
                    } else if (data.type == "start") {
                        color = "text-danger"
                    } else if (data.type == "finish") {
                        color = "text-success"
                    } else {
                        color = "text-primary"
                    }

                    let currentDate = new Date(data.time).toLocaleString("en-US", { timeZone: "Asia/Jakarta", hour12: false })
                    let date = currentDate.split(', ')[0]
                    let time = currentDate.split(', ')[1]
                    jQuery("#tableHistory").append(`
                            <tr>
                                <td><span style="color: #F0E8B2 ;">${date}</span></td>
                                <td><i class="fa fa-circle ${color}"></i></td>
                                <td>
                                    <p class="text-white">${data.text}</span><br>
                                    <span class="text-white">Soal kategori "tes karakteristik pribadi pada TO SPMB #1"</span>
                                </td>
                                <td>
                                    <i class="fa fa-circle-notch text-white"></i>
                                    <span class="text-white">${time}</span>
                                </td>
                            </tr>
                    `)
                })
            } else {
                jQuery("#tableHistory").html('<tr><td><span style="color: #F0E8B2 ;">Tidak ada data</span></td></tr>')
            }
        }
    })
})