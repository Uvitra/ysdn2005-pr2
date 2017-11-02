// JavaScript Document

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ["All Peoples", "Lesbians"],
        datasets: [{
            label: "Lesbian Dataset",
            backgroundColor: ['hsla(0,0%,82%,1.00)', 'rgba(157,79,197,1.00)'],
            borderColor: 'rgba(255, 255, 255, 1)',
            data: [97.2, 2.8],
        }]
    },

    // Configuration options go here
    options: {
		legend: {
			display: false,
            labels: {
                // This more specific font property overrides the global property
                fontFamily: 'Frutiger LT Std'
            }
        }
	}
});