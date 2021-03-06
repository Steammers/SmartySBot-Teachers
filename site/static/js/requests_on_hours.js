var ctx = document.getElementById("requests-on-hours");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [
      '00:00',
      '00:30',
      '01:00',
      '01:30',
      '02:00',
      '02:30',
      '03:00',
      '03:30',
      '04:00',
      '04:30',
      '05:00',
      '05:30',
      '06:00',
      '06:30',
      '07:00',
      '07:30',
      '08:00',
      '08:30',
      '09:00',
      '09:30',
      '10:00',
      '10:30',
      '11:00',
      '11:30',
      '12:00',
      '12:30',
      '13:00',
      '13:30',
      '14:30',
      '15:00',
      '15:30',
      '16:00',
      '16:30',
      '17:00',
      '17:30',
      '18:00',
      '18:30',
      '19:00',
      '19:30',
      '20:00',
      '20:30',
      '21:00',
      '21:30',
      '22:00',
      '23:30'
      ],
    datasets: [{ 
        data: [4,7,12,40,30,20,20,15,20,12, 14, 15, 16, 30, 22, 33,30],
        label: "Сьогодні",
        borderColor: "#8e5ea2",
        fill: false
      },
      { 
        data: [6,8,10,30,20,22,3,16,21,15, 16, 12, 13, 32, 23, 33,33],
        label: "Вчора",
        borderColor: "#3cba9f",
        fill: false
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Запити по годинам'
    }
  }
});