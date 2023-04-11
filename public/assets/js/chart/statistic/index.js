function randnum() {
    return Math.floor(Math.random() * 100) + 1
}

var lineChartCanvas = $('#statistic').get(0).getContext('2d')
var lineData        = {
    labels: ["21 May 2020", "22 May 2020", "23 May 2020", "24 May 2020", "25 May 2020", "26 May 2020", "27 May 2020"],
    datasets: [
        {
            label: "Tertinggi",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#619070",
            borderColor: "#619070",
            data: [randnum(), randnum(), randnum(), randnum(), randnum(), randnum(), randnum(), randnum()]
        },
        {
            label: "Rata-rata",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#33A1FD",
            borderColor: "#33A1FD",
            data: [randnum(), randnum(), randnum(), randnum(), randnum(), randnum(), randnum(), randnum()]
        },
        {
            label: "Terendah",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#EE4444",
            borderColor: "#EE4444",
            data: [randnum(), randnum(), randnum(), randnum(), randnum(), randnum(), randnum(), randnum()]
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
    }
}

var lineChart = new Chart(lineChartCanvas, {
  type: 'line',
  data: lineData,
  options: lineChartOption    
})