jQuery(window).on('load', function (){
    var id_category = jQuery("#changeStatistic").val()

    $.ajax({
        url: '/tryout/statistic',
        method: "post",
        data: { id_category },
        dataType: 'json',
        success: function (result) {
            function randnum() {
                return Math.floor(Math.random() * 100) + 1
            }

            const max = result.max
            const min = result.min
            const average = result.avg

            if (result.avg.length == 0 && result.min.length == 0 && result.max.length == 0 && result.data.length == 0) {
                document.getElementById('noData').style.display = 'block'
                document.getElementById('statistic').style.display = 'none'
                document.getElementById('riwayatStatistic').style.display = 'none'
            } else {
                document.getElementById('noData').style.display = 'none'
                // document.getElementById('statistic').style.height = '500px'
                document.getElementById('riwayatStatistic').style.display = ""
                document.getElementById('statistic').style.display = 'block'

                var lineChartCanvas = $('#statistic').get(0).getContext('2d')
                var lineData        = {
                    datasets: [
                        {
                            label: "Tertinggi",
                            backgroundColor: "#619070",
                            data: max
                        },
                        {
                            label: "Rata-rata",
                            backgroundColor: "#33A1FD",
                            data: average
                        },
                        {
                            label: "Terendah",
                            backgroundColor: "#EE4444",
                            data: min
                        }
                    ]
                }

                var lineChartOption = {
                    title: {
                        display: true,
                        text: 'Grafik Skor'
                    },
                    legend: {
                        position: 'bottom'
                    },
                    scales: {
                        xAxes: {
                            type: 'linear',
                            position: 'bottom'
                        },
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                // stepSize: 2
                            }
                        }]
                    },
                    bezierCurve: false,
                    elements: {
                        line: {
                            tension: 0
                        }
                    }
                }

                var lineChart = new Chart(lineChartCanvas, {
                    type: 'scatter',
                    data: lineData,
                    options: lineChartOption    
                })

                jQuery("#riwayatStatistic").empty()

                let color = ''
                if (result.data.length > 0) {
                    for (let i of result.data) {
                        if (i.testdone == 1) {
                            color = 'box-primary'
                        } else {
                            color = 'box-info'
                        }
                        jQuery("#riwayatStatistic").append(`
                            <div class="col-lg-6 mb-2">
                                <div class="${color}">
                                    <span class="text-white text-uppercase text-bold">${i.nama}</span>
                                </div>
                            </div>
                            <br>
                        `)
                    }
                } 
                
            }
        }
    })
})

jQuery("#changeStatistic").change(function (){
    var id_category = jQuery(this).val()

    $.ajax({
        url: '/tryout/statistic',
        method: "post",
        data: { id_category },
        dataType: 'json',
        success: function (result) {
            function randnum() {
                return Math.floor(Math.random() * 100) + 1
            }

            const max = result.max
            const min = result.min
            const average = result.avg

            if (result.avg.length == 0 && result.min.length == 0 && result.max.length == 0 && result.data.length == 0) {
                document.getElementById('noData').style.display = 'block'
                document.getElementById('statistic').style.display = 'none'
                document.getElementById('riwayatStatistic').style.display = 'none'
            } else {
                document.getElementById('noData').style.display = 'none'
                // document.getElementById('statistic').style.height = '500px'
                document.getElementById('riwayatStatistic').style.display = ""
                document.getElementById('statistic').style.display = 'block'

                var lineChartCanvas = $('#statistic').get(0).getContext('2d')
                var lineData        = {
                    datasets: [
                        {
                            label: "Tertinggi",
                            backgroundColor: "#619070",
                            data: max
                        },
                        {
                            label: "Rata-rata",
                            backgroundColor: "#33A1FD",
                            data: average
                        },
                        {
                            label: "Terendah",
                            backgroundColor: "#EE4444",
                            data: min
                        }
                    ]
                }

                var lineChartOption = {
                    title: {
                        display: true,
                        text: 'Grafik Skor'
                    },
                    legend: {
                        position: 'bottom'
                    },
                    scales: {
                        xAxes: {
                            type: 'linear',
                            position: 'bottom'
                        },
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                // stepSize: 2
                            }
                        }]
                    },
                    bezierCurve: false,
                    elements: {
                        line: {
                            tension: 0
                        }
                    }
                }

                var lineChart = new Chart(lineChartCanvas, {
                    type: 'scatter',
                    data: lineData,
                    options: lineChartOption    
                })

                jQuery("#riwayatStatistic").empty()

                let color = ''
                if (result.data.length > 0) {
                    if (result.data.testdone == 1) {
                        color = 'box-primary'
                    } else {
                        color = 'box-info'
                    }

                    for (let i of result.data) {
                        if (i.testdone == 1) {
                            color = 'box-primary'
                        } else {
                            color = 'box-info'
                        }
                        
                        jQuery("#riwayatStatistic").append(`
                            <div class="col-lg-6 mb-2">
                                <div class="${color}">
                                    <span class="text-white text-uppercase text-bold">${i.nama}</span>
                                </div>
                            </div>
                            <br>
                        `)
                    }
                } 
                
            }
        }
    })
})