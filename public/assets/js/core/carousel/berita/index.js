// const e = require("express")

// jQuery(document).ready(function() {
//     $.ajax({
//         url: '/berita',
//         method: "POST",
//         dataType: 'json',
//         success: function (result) {
//             console.log('result', result)
            
//             var counter = 1
//             result.forEach(data => {
//                 const content = data.konten
    
//                 let str = jQuery("#carouselBerita").html(
//                             `<div class="carousel-inner-group" role="listbox">
//                                 <div class="carousel-item ">
//                             `)
//                 if (counter <= 1) str += `active `

//                 str += `<div class="col-md-3 mb-3">
//                 <div class="card">
//                     <!-- Promo badge-->
//                     <div class="badge bg-danger badge-card text-white position-absolute">
//                         <span>${data.tipe}</span>
//                     </div>
//                     <div class="card-image">
//                         <img class="img-carousel w-100 h-100" src="${data.thumbnail}" alt="..." />
//                     </div>
//                     <!-- Content details-->
//                     <div class="card-body">
//                         <div class="small text-uppercase fw-bold text-muted">Free</div>
//                         <div class="mb-3">
//                             <span class="fw-bold">${data.judul}</span>
//                         </div>
//                         <div class="content">
//                             <span class="text-muted">
//                                 ${content.substr(0, 20)}
//                             </span>
//                         </div>
//                     </div>
//                     <!-- Product actions-->
//                     <!-- <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
//                         <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
//                     </div> -->
//                 </div>
//             </div>
//         </div>
//     </div>`
//                 // jQuery("#carouselBerita").html(
//                 //     `<div class="carousel-inner-group" role="listbox">
//                 //         <div class="carousel-item">
//                 //             <div class="col-md-3 mb-3">
//                 //                 <div class="card">
//                 //                     <!-- Promo badge-->
//                 //                     <div class="badge bg-danger badge-card text-white position-absolute">
//                 //                         <span>${data.tipe}</span>
//                 //                     </div>
//                 //                     <div class="card-image">
//                 //                         <img class="img-carousel w-100 h-100" src="${data.thumbnail}" alt="..." />
//                 //                     </div>
//                 //                     <!-- Content details-->
//                 //                     <div class="card-body">
//                 //                         <div class="small text-uppercase fw-bold text-muted">Free</div>
//                 //                         <div class="mb-3">
//                 //                             <span class="fw-bold">${data.judul}</span>
//                 //                         </div>
//                 //                         <div class="content">
//                 //                             <span class="text-muted">
//                 //                                 ${content.substr(0, 20)}
//                 //                             </span>
//                 //                         </div>
//                 //                     </div>
//                 //                     <!-- Product actions-->
//                 //                     <!-- <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
//                 //                         <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
//                 //                     </div> -->
//                 //                 </div>
//                 //             </div>
//                 //         </div>
//                 //     </div>
//                 // `)
//                 counter++
//             })
//         }
//     })
// })