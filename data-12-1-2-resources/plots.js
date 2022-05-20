// Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

// Plotly.newPlot("plotArea", [{x: [5,10,15], y: [10,20,30]}]);


// var trace = [{
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
// }];

// Plotly.newPlot("plotArea", trace);


// var trace = {
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
// };

// var layout = {
//     title: "Luncheon Survey",
//     xaxis: {title: "Food Option"},
//     yaxis: {title: "Number of Respondents"}
// };

// Plotly.newPlot("plotArea", [trace], layout);

// var trace = {
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "bar"
// };
// var Data = [trace]
// var layout = {
//     title: "Drink Survey",
//     xaxis: {title: "Non-Alcoholic Drinks"},
//     yaxis: {title: "Percent of Drinks Ordered"}
// };

// Plotly.newPlot("plotArea", Data, layout);

// var trace = {
//     labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
//     "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: 'pie'
//    };
//    var data = [trace];
//    var layout = {
//     title: "'Pie' Chart",
//    };
//    Plotly.newPlot("plotArea", data, layout);

var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    mode: 'markers',
    type: 'scatter',
    name: 'Drinks',
    marker: { size: 12 }
};

var data = [trace];

var layout = {
    xaxis: {
    range: [ 0.75, 8 ]
    },
    yaxis: {
    range: [0, 25]
  },
    title:'Scatter Plot',
    xaxis: {title: "Non-Alcoholic Drinks"},
    yaxis: {title: "Percent of Drinks Ordered"}
};  

Plotly.newPlot("plotArea", data, layout);
