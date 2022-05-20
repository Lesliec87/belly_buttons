// console.log(cityGrowths);

var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse();

var topFiveCities = sortedCities.slice(0,5);

var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);

  
var sortedCities = cityGrowths.sort((a,b) =>
a.population - b.population).reverse();

var topFiveSeven = sortedCities.slice(0,7);

var topSevenCityNames = topFiveSeven.map(city => city.City);
var topSevenLargestPop = topFiveSeven.map(city => parseInt(city.population));

var trace = {
    x: topSevenCityNames,
    y: topSevenLargestPop,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Largest City by Population",
    xaxis: {title: "City" },
    yaxis: {title: "Largest Population"}
  };
  Plotly.newPlot("bar-plot", data, layout);