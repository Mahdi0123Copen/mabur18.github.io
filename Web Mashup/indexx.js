//(fetch('https://data.cdc.gov/resource/w9j2-ggv5.csv')
fetch('jsforestNew.csv')
	.then(function (response) {
		return response.text();
	})
	.then(function (text) {
		let series = csvToSeries(text);
		renderChart(series);
	})
	.catch(function (error) {
		//Something went wrong
		console.log(error);
	});

function csvToSeries(text) {
	const deforestation = 'deforestation';
	let dataAsJson = JSC.csv2Json(text);
	console.log(dataAsJson)
	let china = [], brazil = [], usa = [];
	dataAsJson.forEach(function (row) {
		//add either to Black, White arrays, or discard.

		if (row.country === 'Brazil') {
			brazil.push({x: row.year, y: row[deforestation]});
		} /*else if (row.country === 'China') {
			china.push({x: row.year, y: row[deforestation]});
		}*/
	});

	return [
		{name: 'Brazil', points: brazil},
		{name: 'China', points: china},
        {name: 'USA', points: usa},
	];
}



function renderChart(series) {
	JSC.Chart('chartDiv', {
		title_label_text: 'Forrestation amount of land',
		annotations: [{
			label_text: 'Source: World Bank Data',
			position: 'bottom left'
		}],
		legend_visible: false,
		xAxis_crosshair_enabled: true,
		defaultSeries_firstPoint_label_text: '<b>%seriesName</b>',
		defaultPoint_tooltip: '%seriesName <b>%yValue</b>% of the land',
		series: series
	});
}
