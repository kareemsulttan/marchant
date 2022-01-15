$('.btn-plus, .btn-minus').on('click', function (e) {
  const isNegative = $(e.target).closest('.btn-minus').is('.btn-minus');
  const input = $(e.target).closest('.input-group').find('input');
  if (input.is('input')) {
    input[0][isNegative ? 'stepDown' : 'stepUp']()
  }
})
$(".nav-item").click(function () {
  // If the clicked element has the active class, remove the active class from EVERY .nav-link>.state element
  if ($(this).hasClass("active")) {
    $(".nav-item").removeClass("active");
  }
  // Else, the element doesn't have the active class, so we remove it from every element before applying it to the element that was clicked
  else {
    $(".nav-item").removeClass("active");
    $(this).addClass("active");
  }
});

// totl chart
var totalCharts = document.getElementById('total-chart')

var ctx = totalCharts.getContext('2d');
gradient = ctx.createLinearGradient(0, 0, 0, 200);
gradient.addColorStop(0, 'rgba(28, 207, 236, 0.15)');
gradient.addColorStop(0.5, 'rgba(28, 207, 236, 0.11)');
gradient.addColorStop(0.8, 'rgba(28, 207, 236, 0.09)');
gradient.addColorStop(1, 'rgba(28, 207, 236, 0.05)');
var data = {
  labels: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6', 'w7', 'w8', 'w9', 'w10', 'w11', 'w12', 'w13', 'w14', 'w15'],
  datasets: [{
    label: 'Custom Label Name',
    backgroundColor: gradient,
    pointBackgroundColor: '#00A1B8',
    pointBorderColor: '#00A1B8',
    borderWidth: 4,
    borderColor: '#1CCFEC',
    data: [50, 70, 100, 130, 150, 200, 260, 300, 300, 400, 400, 500, 500, 500, 500]
  }]
};
var options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    easing: 'easeInOutQuad',
    duration: 520
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: 'rgba(200, 200, 200, 0)',
        lineWidth: 1,
        display: false,
      },
      ticks: {
        display: false
      }
    }],
    yAxes: [{
      scaleLabel: {
        show: true
      },
      gridLines: {
        color: 'rgba(111, 129, 139, 10%)',
        lineWidth: 1,
        display: true
      },
      ticks: {
        fontColor: "#8f9092",
        beginAtZero: false,
        callback: function (value) {
          return value + "K";
        }
      }
    }]
  },
  elements: {
    line: {
      tension: 0.1
    },
    point: {
      radius: 2
    }
  },
  legend: {
    display: false
  },
  point: {
    radius: 0
  },
  tooltips: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    titleFontColor: 'red',
    caretSize: 5,
    cornerRadius: 2,
    xPadding: 10,
    yPadding: 10
  }
};
var chartInstance = new Chart(ctx, {
  type: 'line',
  data: data,
  options: options,
  onResize: function (chartInstance, size) {

    var showTicks = (size.width < 500) ? false : true;

    chartInstance.options = {
      scales: {
        yAxes: [{
          ticks: {
            display: showTicks
          }
        }]
      }
    };
  }
});




var chart1 = document.getElementById('doughnut-chart1')
var ctx1 = chart1.getContext('2d');
var chart2 = document.getElementById('doughnut-chart2')
var ctx2 = chart2.getContext('2d');
var chart3 = document.getElementById('doughnut-chart3')
var ctx3 = chart3.getContext('2d');

var data1 = {
  labels: ["VISA", "AMEX", "MC", "DEBIT"],
  datasets: [{
    data: [50, 60, 20, 33],
    backgroundColor: ["#1CCFEC", "#A9EDF8", "#BDECDC", "#00D295"],
  }]
};
var data2 = {
  labels: ["Accepted", "DECLINED"],
  datasets: [{
    data: [75, 25],
    backgroundColor: ["#00D295", "#F88568"],
  }]
};
var options = {
  responsive: false,
  cutoutPercentage: 85,
  legend: {
    display: false
  },
  legendCallback: function (chart) {
    // Return the HTML string here.
    console.log(chart.data.datasets);
    const text = [];
    text.push(`<ul class="${chart.id}-legend flex-center-vh flex-space-evenly">`);
    for (let i = 0; i < chart.data.datasets[0].data.length; i++) {
      text.push(`<li class="flex-center-vh"><span class="item-bg" id="legend-${i}-item" style="background-color:${chart.data.datasets[0].backgroundColor[i]}">`);
      text.push(`</span>`);
      if (chart.data.labels[i]) {
        text.push(`<span class="legent-item text-gray fw600 fs10">${chart.data.labels[i]}</span>`);
      }
      text.push(`</li>`);
    }
    text.push(`</ul>`);
    return text.join("");
  },
}

var doughnut = new Chart(ctx1, {
  type: 'doughnut',
  data: data1,
  options: options
});
var doughnut2 = new Chart(ctx2, {
  type: 'doughnut',
  data: data2,
  options: options
});
var doughnut3 = new Chart(ctx3, {
  type: 'doughnut',
  data: data1,
  options: options
});

var legendContainer = document.querySelectorAll('.doughnut-legend')
legendContainer.forEach(function (thisLegend) {
  thisLegend.innerHTML = window.doughnut.generateLegend();
})
var legendContainer2 = document.querySelectorAll('.doughnut-legend2')
legendContainer2.forEach(function (thisLegend2) {
  thisLegend2.innerHTML = window.doughnut2.generateLegend();
})
var legendContainer3 = document.querySelectorAll('.doughnut-legend3')
legendContainer3.forEach(function (thisLegend3) {
  thisLegend3.innerHTML = window.doughnut3.generateLegend();
})







/*modal*/
// Get the modal
var modal = document.getElementById("modal");

// Get the <span> element that closes the modal
var close = document.getElementsByClassName("dismiss")[0];

// When the user clicks on <span> (x), close the modal
close.onclick = function () {
  modal.style.display = "none";
  console.log("works")
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownBtn = document.querySelector(".dropdown-btn");

dropdownBtn.onclick = () => {
  dropdownMenu.classList.toggle("dropdown-active");
};

