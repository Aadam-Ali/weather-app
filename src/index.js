const weatherIcons = require('./weather-icons.json');

async function weatherRequest(city) {
  const apiKeyOW = '3d8a891474136ba2fd8128c8c8b2754d';
  const units = 'metric';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKeyOW}&units=${units}`;

  const response = await fetch(url, { mode: 'cors' });
  if (response.statusText === 'Not Found') {
    return;
  }
  const data = await response.json();

  displayController(data);
}

function getWeatherIcon(weatherId) {
  let prefix = 'wi wi-';
  let code = weatherId;
  let icon = weatherIcons[code].icon;

  return prefix + icon;
}

function displayController({ name, sys, main, weather }) {
  $('.city').text(`${name}, ${sys.country}`);
  $('.description').text(weather[0].description);
  $('#weather-icon').attr('class', getWeatherIcon(weather[0].id));
  $('.temp').text(Math.round(main.temp));
}

$('.btn-search').click(function (e) {
  e.preventDefault();
  weatherRequest($('.city-input').val());
  $('.city-input').val('');
  $('.form').css('display', 'none');
  $('.btn-open-search').css('display', 'block');
});

$('.btn-open-search').click(function (e) {
  e.preventDefault();
  $(this).css('display', 'none');
  $('.form').css('display', 'flex');
});

weatherRequest('London');
