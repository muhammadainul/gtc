jQuery(document).ready(function () {
    size_li = jQuery("#latihanList .latihan-list").length
    console.log('size', size_li)
    x = 5
    if (x) {
        jQuery('#latihanList .latihan-list').show()
    }   
    jQuery('#loadmore-btn').click(function () {
        loadmoreBtn.addClass('loading').text('Loading...')
        x = (x+5 <= size_li) ? x+5 : size_li
        jQuery('#latihanList .latihan-list').show()
    })
    // $('#showLess').click(function () {
    //     x=(x-5<0) ? 3 : x-5;
    //     $('#myList li').not(':lt('+x+')').hide();
    // });

//     $.ajax({
//         url: '/latihan/bab',
//         method: 'POST',
//         success: function(result){
//             console.log('result', result)

//             jQuery("#latihanList").empty()

//             let rowPerPage = 5
//             // let pageCount = Math.ceil(result.length / rowPerPage)
//             // let count = 0
//             // let loadmoreBtn = jQuery('#content-pager .loadmore-btn')

//             result.forEach(data => {
//                 jQuery("#latihanList").append(`
//                     <div class="latihan-list row m-5">
//                         <div class="col-lg-12 box-test">
//                         <a class="nav-link" href="/latihan/kategori/bab/${data._id}">
//                                 <span class="text-warning text-bold">${data.nama}</span>
//                             </a>
//                         </div>
//                     </div>
//                 `)
//             })

//             // for (let i = 0; i < pageCount; i++) {
//             //     jQuery("#latihanList").append(`
//             //             <div class="row m-5">
//             //                 <div class="col-lg-12 box-test">
//             //                     <a class="nav-link" href="/latihan/kategori/bab/${result[i]._id}">
//             //                         <span class="text-warning text-bold">${result[i].nama}</span>
//             //                     </a>
//             //                 </div>
//             //             </div>
//             //     `)
//             // }

//             // jQuery(document).on('click', '.loadmore-btn', function() {
//             //     loadmoreBtn.addClass('loading').text('Loading...')

//             //     showPage = function(page) {
//             //         jQuery("#latihanList").hide()
//             //         result.forEach(function(n) {
//             //             if (n >= rowPerPage * (page-1) && rowPerPage * page) { jQuery("#latihanList").show() }
//             //             loadmoreBtn.removeClass('loading')
//             //         })  
//             //     } 
//             //     showPage(1)
//             // })
//         }
//    })
})

// jQuery(document).on('click','.loadmore-btn', function(e){
//     e.preventDefault()

//     let loadmoreBtn = jQuery('#content-pager .loadmore-btn')
//     // if(nextLink){
//        $.ajax({
//             url: '/latihan/bab',
//             method: 'POST',
//             beforeSend: function(){
//                 loadmoreBtn.addClass('loading').text('Loading...')
//             },
//             complete: function(){
//                 loadmoreBtn.removeClass('loading')
//             },
//             success: function(result){
//                 console.log('result', result)
//                 let rslt = $(result).find('#latihanList .latihan-list').html()
//                 let nextPage = $(result).find('#latihanList .loadmore-btn').attr('href')
//                 jQuery('.blog-posts').append(rslt)
//                 loadmoreBtn.show()

//                 if (nextPage){
//                     loadmoreBtn.attr('href', nextPage).text('Load More')
//                 } else {
//                     loadmoreBtn.addClass('no-more').text('All Posts Loaded!').removeAttr('href')
//                 }
//             }
//        })
//     // }
//  })