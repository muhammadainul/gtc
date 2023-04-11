jQuery(document).on('click', '.pembahasan-latihan', function() {
    let id = jQuery(this).data('id')
    let num = jQuery(this).data('num')
    var name = jQuery(this).data('nama')

    $.ajax({
        url: '/latihan/pembahasan',
        method: 'post',
        data: { id, num },
        dataType: 'json',
        success: function (result) {
            if (result.success == false) {
                Swal.fire({ icon: 'error', title: result.message })
            } else {
                jQuery("#listLatihanPage").hide()

                jQuery("#pembahasanLatihan").removeClass('d-none')

                jQuery("#titleLatihanPembahasan").html(name)

                function showTest() {
                    const output = []

                    let label = ''
    
                    result.forEach((currentQuestion, questionNumber) => {
                        var choices = []

                        for (let i = 0; i < currentQuestion.choices.length; i++) {
                            if (i == 0) { label = 'A' }
                            else if (i == 1) { label = 'B' }    
                            else if (i == 2) { label = 'C' } 
                            else if (i == 3) { label = 'D' }
                            else if (i == 4) { label = 'E' }
                            
                            if (i == currentQuestion.answer) {
                                choices.push(`
                                    <div class="p-1 mt-2 col-lg-6 text-left border-warning 
                                        btn-group btn-warning btn-answer">
                                        <input type="radio" class="btn-check btn-warning input-lg rounded-0"
                                        name="answerLatihan-${questionNumber}" id="options${i}" value="${i}" />
                                        <label class="btn btn-warning border-0 text-left">
                                            <span class="text-black text-left border-black" style="width: 20%; border: 1px solid yellow; border-radius: 50%;">
                                                ${label}</span>
                                            <span class="text-black text-left" style="font-size: 15px;">${currentQuestion.choices[i]}</span>
                                        </label>
                                        <i class="fa fa-check mr-1"></i>
                                    </div>
                                `)
                            } else if (i == currentQuestion.userAnswer) {
                                choices.push(`
                                    <div class="p-1 mt-2 col-lg-6 text-left border-warning 
                                        btn-group btn-danger btn-answer">
                                        <input type="radio" class="btn-check btn-danger input-lg rounded-0"
                                        name="answerLatihan-${questionNumber}" id="options${i}" value="${i}" />
                                        <label class="btn btn-danger border-0 text-left">
                                            <span class="text-warning text-left border-warning" style="width: 20%; border: 1px solid yellow; border-radius: 50%;">
                                                ${label}</span>
                                            <span class="text-white text-left" style="font-size: 15px;">${currentQuestion.choices[i]}</span>
                                        </label>
                                        <i class="fa fa-times text-black mr-1"></i>
                                    </div>
                                `)
                            } else {
                                choices.push(`
                                    <div class="p-1 mt-2 col-lg-6 text-left border-warning box-dark 
                                        btn-group btn-outline-warning">
                                        <input type="radio" class="btn-check"
                                        name="answerLatihan-${questionNumber}" id="options${i}" value="${i}" />
                                        <label class="btn btn-outline-warning border-0 text-left">
                                            <span class="text-warning text-left border-warning" style="width: 20%; border: 1px solid yellow; border-radius: 50%;">
                                                ${label}</span>
                                            <span class="text-white text-left" style="font-size: 15px;">${currentQuestion.choices[i]}</span>
                                        </label>
                                    </div>
                                `)
                            }
                        }

                        output.push(`
                            <div class="question-latihan-pembahasan">
                                <div class="row box-white border-warning" id="questionTestLatihanPembahasan">
                                    <div class="p-2 col-lg-10 text-white">${currentQuestion.question}</div>
                                    <div class="p-2 col-lg-2 text-right text-warning">
                                        ${questionNumber + 1} / ${result.length}
                                    </div>
                                </div>
                                <div class="row mb-2 answer-test d-flex flex-row justify-content-between" id="answerTestLatihan">
                                    ${choices.join('')}
                                </div>
                                <div class="row mt-2 box-white border-warning" id="pembahasanLatihanPart">
                                    <div class="p-2 col-lg-12">
                                        <span class="text-warning text-bold text-upper">Pembahasan : </span><br>
                                        <span class="text-white text-justify">${currentQuestion.explanation}</span>
                                    </div>
                                </div>
                            </div>
                        `)
                        
                        if (result[questionNumber].userAnswer == -1) {
                            jQuery("#boxNumberLatPembahasan").append(`
                                <div id="divBox${questionNumber}" style="float: left; margin-right: 2px;">
                                    <a class="btn btn-danger btn-sm mb-2 btn-box"
                                        data-toggle='tooltip' data-placement='top' title='Tidak Terjawab'
                                        data-id="${questionNumber}" id="btnBox${questionNumber}">
                                        <div class="p-2 text-black">${questionNumber+1}</div>
                                    </a>
                                </div>
                            `)
                        } else {
                            jQuery("#boxNumberLatPembahasan").append(`
                                <div id="divBox${questionNumber}" style="float: left; margin-right: 2px;">
                                    <a class="btn btn-success btn-sm mb-2 btn-box"
                                        data-toggle='tooltip' data-placement='top' title='Terjawab'
                                        data-id="${questionNumber}" id="btnBox${questionNumber}">
                                        <div class="p-2 text-black">${questionNumber+1}</div>
                                    </a>
                                </div>
                            `)
                        }
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

                function backPage() {
                    jQuery("#listLatihanPage").show()
                    jQuery("#boxNumberLatPembahasan").empty()
                    jQuery(".question-latihan-pembahasan").empty()
                    jQuery("#pembahasanLatihan").addClass('d-none')
                }

                function finished() {
                    jQuery("#listLatihanPage").show()
                    jQuery("#boxNumberLatPembahasan").empty()
                    jQuery(".question-latihan-pembahasan").empty()
                    jQuery("#pembahasanLatihan").addClass('d-none')
                }

                const containerQuiz = document.getElementById("latihanPembahasanPage")

                showTest()

                const previousButton = document.getElementById("previousLatihanPembahasan")
                const nextButton = document.getElementById("nextLatihanPembahasan")
                const backPembahasan = document.getElementById("backLatihanPembahasan")
                const btnFinished = document.getElementById('btnFinish')
                const slides = document.querySelectorAll(".question-latihan-pembahasan")
                var questionCount = 0

                showSlide(questionCount)

                previousButton.addEventListener('click', showPreviousSlide)
                nextButton.addEventListener('click', showNextSlide)
                backPembahasan.addEventListener('click', backPage)
                btnFinished.addEventListener('click', finished)
            }
        }
    })
})  