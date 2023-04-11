jQuery(document).on('click', '.startNowTryout', function() {
    let id = jQuery(this).data('id')
    let num = jQuery(this).data('num')

    $.ajax({
        url: '/tryout/start',
        method: 'post',
        data: { id, num },
        dataType: 'json',
        success: function (result) {
            if (result.success == false) {
                Swal.fire({ icon: 'error', title: result.message })
                // setTimeout(function (){
                //     jQuery("#startSoalTryout").hide()
                //     jQuery("#listTryoutPage").show()
                // }, 2000)
            } else {
                if (result.question.length > 0) {
                    const second = 1000,
                    minute = second * 60,
                    hour = minute * 60
                    
                    const detikInput = result.secondstoend // 4200 detik
                    
                    const countDown = new Date().getTime() + detikInput * second,
                    x = setInterval(function () {
                        const now = new Date().getTime(),
                        distance = countDown - now;
                
                        (document.getElementById("hours").innerText = Math.floor(distance / hour)),
                        (document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute)),
                        (document.getElementById("seconds").innerText = Math.floor((distance % minute) / second))
                        
                        if (result.secondstoend == 0) {
                            sendAnswer()
                        } 

                    }, 0)

                    if (result.success == false) {
                        Swal.fire({ icon: 'error', title: result.message })
                    }

                    jQuery("#modalSoal").modal('hide')
                    jQuery("#listTryoutPage").hide()

                    jQuery("#startSoalTryout").removeClass('d-none')
                    
                    jQuery("#titleTestTryout").html(result.data.nama)

                    function showTest() {
                        const output = []

                        let label = ''

                        result.question.forEach((currentQuestion, questionNumber) => {
                            var choices = []

                            for (let i in currentQuestion.choices) {
                                if (i == 0) { label = 'A' }
                                else if (i == 1) { label = 'B' }    
                                else if (i == 2) { label = 'C' } 
                                else if (i == 3) { label = 'D' }
                                else if (i == 4) { label = 'E' }
                                if (i > 4) break
                                
                                choices.push(`
                                    <div class="p-2 mt-2 col-lg-6 text-left border-warning box-dark btn-group btn-outline-warning">
                                        <input type="radio" onclick="radioClick(${questionNumber})"
                                        name="answerTryout-${questionNumber}" id="optionsTryout${i}" value=${i} />
                                        <label class="btn btn-outline-warning border-0 text-left">
                                            <span class="text-warning text-left border-warning" style="width: 20%; border: 1px solid yellow; border-radius: 50%;">
                                                ${label}</span>
                                            <span class="text-white text-left" style="font-size: 14px;">${currentQuestion.choices[i]}</span>
                                        </label>
                                    </div>
                                `)
                            }

                            output.push(`
                                <div class="question-test-tryout">
                                    <div class="row box-white border-warning" id="questionTestTryout">
                                        <div class="p-2 col-lg-10 text-justify text-white">${currentQuestion.question}</div>
                                        <div class="p-2 col-lg-2 text-right text-warning">
                                            ${questionNumber + 1} / ${result.question.length}
                                        </div>
                                    </div>
                                    <div class="row mb-2 answer-test d-flex flex-row justify-content-between" id="answerTestTryout">
                                        ${choices.join('')}
                                    </div>
                                </div>  
                            `)

                            jQuery("#boxNumberTryout").append(`
                                <div id="divBoxTryout${questionNumber}" style="float: left; margin-right: 2px;">
                                    <a class="btn btn-danger btn-sm mb-2 btn-box"
                                        data-id="${questionNumber}" id="btnBoxTryout${questionNumber}">
                                        <div class="p-2 text-black">${questionNumber+1}</div>
                                    </a>
                                </div>
                            `)
                        })

                        jQuery(".btn-box").on('click', function(){
                            var id = jQuery(this).data('id')

                            randomPage(id)
                        })

                        containerQuiz.innerHTML = output.join('')

                    }

                    function randomPage(id) {
                        slides[questionCount].classList.remove('active-slide')
                        slides[id].classList.add('active-slide')
                        questionCount = id
                        if (questionCount === 0){
                            previousButton.style.display = 'none'
                        } else {
                            previousButton.style.display = 'inline-block'
                        } if (questionCount === slides.length-1){
                            nextButton.style.display = 'none'
                            // submitButton.style.display = 'inline-block';
                        } else{ 
                            nextButton.style.display = 'inline-block';
                            // submitButton.style.display = 'none';
                        }
                    }

                    function sendAnswer() {
                        Swal.fire({ 
                            icon: 'question',
                            title: 'Apakah anda yakin ingin menyelesaikan try out ini ? Try out tidak dapat dikerjakan ulang kembali',
                            showCancelButton: true,
                            confirmButtonColor: "#DD6B55",
                            confirmButtonText: "Ya",
                            cancelButtonText: "Kembali",
                            closeOnConfirm: false,
                            closeOnCancel: false,
                            preConfirm: function () {
                                let answer = []

                                result.question.forEach((currentQuestion, questionNumber) => {
                                    if (!jQuery(`input[name=answerTryout-${questionNumber}]:checked`).val()) {
                                        answer.push(-1)
                                    } else {
                                        answer.push(parseInt(jQuery(`input[name=answerTryout-${questionNumber}]:checked`).val()))
                                    }
            
                                })
                                $.ajax({
                                    url: '/tryout/save',
                                    method: 'post',
                                    data: { answer, id, num },
                                    success: function (result) {                
                                        if (result.success == false) {
                                            Swal.fire({ icon: 'error', title: result.message })
                                            setTimeout(function (){
                                                jQuery("#startSoalTryout").hide()
                                                jQuery(".question-test-tryout").empty()
                                                jQuery("#listTryoutPage").show()
                                            }, 2000)
                                        } else {
                                            Swal.fire({ icon: 'success', title: result.result.message })
                                            setTimeout(function (){
                                                jQuery("#startSoalTryout").hide()
                                                jQuery("#resultSoalTryout").removeClass('d-none')
                                            }, 2000)

                                            function backPage() {
                                                jQuery("#resultSoalTryout").hide()
                                                jQuery("#listTryoutPage").show()

                                                location.reload()
                                            }

                                            const backPembahasan = document.getElementById("backTryoutTest")
                                            backPembahasan.addEventListener('click', backPage)
                                            
                                            let status = ''
                                            if (result.result.score < result.result.kkm) { status += 'Tidak Lulus' } else { status += 'Lulus' }

                                            let start = new Date(result.result.start).toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
                                            let end = new Date(result.result.finish).toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
                                            
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
                                    }
                                })
                            },
                            allowOutsideClick: false 
                        })
                    }

                    function showSlide(n) {
                        slides[questionCount].classList.remove('active-slide')
                        slides[n].classList.add('active-slide')
                        questionCount = n
                        if (questionCount === 0){
                            previousButton.style.display = 'none';
                        } else {
                            previousButton.style.display = 'inline-block';
                        } if (questionCount === slides.length-1){
                            nextButton.style.display = 'none';
                            // submitButton.style.display = 'inline-block';
                        } else{ 
                            nextButton.style.display = 'inline-block';
                            // submitButton.style.display = 'none';
                        }
                    }
                    
                    function showNextSlide() {
                        showSlide(questionCount + 1)
                    }
                
                    function showPreviousSlide() {
                        showSlide(questionCount - 1)
                    }

                    const containerQuiz = document.getElementById("tryoutTestPage")
                    const submitButton = document.getElementById("submitTryout")

                    showTest()

                    const previousButton = document.getElementById("previousTestTryout")
                    const nextButton = document.getElementById("nextTestTryout")
                    const slides = document.querySelectorAll(".question-test-tryout")
                    var questionCount = 0

                    showSlide(questionCount)

                    submitButton.addEventListener('click', sendAnswer)
                    previousButton.addEventListener('click', showPreviousSlide)
                    nextButton.addEventListener('click', showNextSlide)   
                } else {
                    jQuery("#tryoutTestPage").html(`
                        <div class="col-lg-12 mx-auto text-center">
                            <h4 class="text=white">Tidak ada data</h4>
                        </div>
                    `)
                    jQuery("#boxBottom").hide()
                }
            }
        }
    })
})

function radioClick(n) {
    jQuery(`#divBoxTryout${n}`).html(`
    <a class="btn btn-success btn-sm mb-2 btn-box"
        data-id="${n}" id="btnBoxTryout${n}">
        <div class="p-2 text-black">${n+1}</div>
    </a>
    `)
}

