const years = Object.keys(sampleData); // getting years as keys of sampleData
const data = Object.values(sampleData); // data as values of sampleData
const barInfo = {
    type: 'horizontalBar', // defines chart type
    data: {
	labels: years,
	datasets: [ {
	    label: "Students Percentage",
	    data: data,
	    backgroundColor: ["#FF0000", "#1aa8ba","#224f1e", "#7462e8","#c7d63e", "#42140b", "#8e5ea2","#99434f","#4a4eda","#8fafd9"], //random colors
	    borderWidth: 2
	}, ]
    },
    options: {
	title: {
	    display: true,
	    text: 'Horizontal Bar Graph'
	},
	legend: { 
	    display: false
	},
	tooltips: { 
	    enabled: false
	},
	scales: {
	    yAxes: [{
		ticks: {
		    reverse: false // reverses order of y axis 
		}
	    } ],
	}
    }
}

const doughnutInfo = {
    type: 'doughnut',
    data: {
	labels: years,
	datasets: [ {
	    label: "Students Percentage",
	    data: data,
	    backgroundColor: ["#FF0000", "#1aa8ba","#224f1e", "#7462e8","#c7d63e", "#42140b", "#8e5ea2","#99434f","#4a4eda","#8fafd9"], 
	    borderWidth: 2
	},
		  ]
    },
    options: {
	title: {
	    display: true,
	    text: 'Doughnut Chart'
	},
	legend: {
	    display: false
	},
	tooltips: {
	    enabled: false
	},
    }
}

const barChart = document.getElementById('chartJSContainer').getContext('2d');
const doughnutChart = document.getElementById('doughnutChartContainer').getContext('2d');
const myHorizontalChart = new Chart(barChart, barInfo);
const myDoughnutChart = new Chart(doughnutChart, doughnutInfo)
