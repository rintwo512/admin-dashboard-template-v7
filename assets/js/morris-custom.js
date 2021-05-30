$(function () {

    //one line chart
    Morris.Line({
        element: 'morris-one-line-chart',
        data: [
            {year: '2015', value: 5},
            {year: '2016', value: 10},
            {year: '2017', value: 8},
            {year: '2018', value: 22},
            {year: '2019', value: 8},
            {year: '2020', value: 10},
            {year: '2021', value: 5}
        ],
        xkey: 'year',
        ykeys: ['value'],
        resize: true,
        lineWidth: 4,
        labels: ['Value'],
        lineColors: ['#111d5e'],
        pointSize: 5
    });
    
    //line chart
     Morris.Line({
        element: 'morris-line-chart',
        data: [{ y: '2015', a: 100, b: 90 },
            { y: '2016', a: 75, b: 65 },
            { y: '2017', a: 50, b: 40 },
            { y: '2018', a: 75, b: 65 },
            { y: '2019', a: 50, b: 40 },
            { y: '2020', a: 75, b: 65 },
            { y: '2021', a: 100, b: 90 } ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true,
        lineColors: ['#290149','#78c4d4']
    });
    
    //bar charts
     Morris.Bar({
        element: 'morris-bar-chart',
        data: [{ y: '2015', a: 60, b: 50 },
            { y: '2016', a: 75, b: 65 },
            { y: '2017', a: 50, b: 40 },
            { y: '2018', a: 75, b: 65 },
            { y: '2019', a: 50, b: 40 },
            { y: '2020', a: 75, b: 65 },
            { y: '2021', a: 100, b: 90 } ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true,
        barColors: ['#f00', '#1687a7']
    });
});
