jQuery(document).on('click', '.result-test-tryout', function() {
    let id = jQuery(this).data('id')
    let num = jQuery(this).data('num')

    $.ajax({
        url: '/tryout/result',
        method: 'post',
        data: { id, num },
        dataType: 'json',
        success: function (result) {
            if (result.success == false) {
                Swal.fire({ icon: 'error', title: result.message })
            }
            
            let status = ''
            if (result.result.score < result.result.kkm) { status += 'Tidak Lulus' } else { status += 'Lulus' }

            let start = new Date(result.result.start).toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
            let end = new Date(result.result.finish).toLocaleString("en-US", { timeZone: "Asia/Jakarta" })

            jQuery("#listTryoutPage").hide()

            jQuery("#resultSoalTryout").removeClass('d-none')

            jQuery("#resultTryout").html(`
                <div class="col-lg-12">
                    <div class="d-flex flex-row justify-content-between w-100">
                        <div class="p-3">
                            <h5 class="text-warning">Nama : ${result.session}</h5>
                        </div>
                        <div class="p-3">
                            <span class="text-warning"></span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 m-3 mt-0">
                    <table class="text-white text-bold" border="0">
                        <tr class="text-bold">
                            <td>Paket Soal</td><td>&nbsp;</td><td>&nbsp;</td><td>${result.result.tesname}</td>
                        </tr>
                        <tr class="text-bold">
                            <td>Kategori Soal</td><td>&nbsp;</td><td>&nbsp;</td><td>${result.result.tryoutname}</td>
                        </tr>
                        <tr class="text-bold">
                            <td>Waktu Mulai</td><td>&nbsp;</td><td>&nbsp;</td><td>${start}</td>
                        </tr>
                        <tr class="text-bold">
                            <td>Waktu Akhir</td><td>&nbsp;</td><td>&nbsp;</td><td>${end}</td>
                        </tr>
                        <tr class="text-bold">
                            <td>Jawaban Benar</td><td>&nbsp;</td><td>&nbsp;</td><td>${result.result.correct}</td>
                        </tr>
                        <tr class="text-bold">
                            <td>Jawaban Salah</td><td>&nbsp;</td><td>&nbsp;</td><td>${result.result.wrong}</td>
                        </tr>
                        <tr class="text-bold">
                            <td>Tidak Menjawab</td><td>&nbsp;</td><td>&nbsp;</td><td>${result.result.noans}</td>
                        </tr>
                        <tr class="text-bold">
                            <td>Skor</td><td>&nbsp;</td><td>&nbsp;</td><td>${result.result.score}</td>
                        </tr>
                        <tr class="text-bold">
                            <td>Status</td><td>&nbsp;</td><td>&nbsp;</td><td class="text-warning">${status}</td>
                        </tr>
                    </table>
                </div>
            `)
        }
    })
})