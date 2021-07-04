require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/js/bootstrap');
require('../main.scss'); 
const { Weather } = require('./Weather'); 
const weather = new Weather('temuco', 'cl');
const { UI } = require('./UI');
const ui = new UI();

async function fetchWeather() {   
  const firtsRequestData = await weather.getWeather();   
  const coord = await firtsRequestData.coord;  
  const dataSevenDays= await weather.getGeolocation(coord.lat, coord.lon); //final request data  
  ui.render(dataSevenDays, firtsRequestData);
  ui.showWeatherData(dataSevenDays);
}

document.getElementById('changue-city').addEventListener('click', function(e){

  const city =  document.getElementById('input-search').value;
  weather.chengueLocation(city);
  fetchWeather();
  e.preventDefault();
});

document.addEventListener('DOMContentLoaded', fetchWeather());
