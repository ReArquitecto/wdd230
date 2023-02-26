// API: https://home.openweathermap.org
// My key: c7438d8d8022d1706856f06608bbcc0e
const url = "https://api.openweathermap.org/data/2.5/weather?q=Rye&appid=c7438d8d8022d1706856f06608bbcc0e&units=imperial";

fetch(url)
  .then(response => response.json())
  .then(data => {
    const { main, name, sys, weather } = data;
    console.log(data);
    const icon = `//openweathermap.org/img/w/${weather[0]["icon"]}.png`;

  
    const weatherhere = document.getElementById("weather-data");    

    const weatherhtml = 
      `<div class="city-name">
        <h2>${name}</h2>
        <h3>${sys.country}</h3>
      </div>
      <div class="city-temp">${Math.round(main.temp)}°F</div>
      <div>
        <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
        <figcaption class="description">${weather[0]["description"]}</figcaption>
      </div>
      <div class="city-humidity">Humidity: ${main.humidity}%</div>
      <div class="city-wind">Wind: ${data.wind.speed} mph</div>
      <div class="city-windchill">Wind Chill: ${Math.round(35.74 + 0.6215 * main.temp - 35.75 * Math.pow(data.wind.speed, 0.16) + 0.4275 * main.temp * Math.pow(data.wind.speed, 0.16))}°F</div>`;

    weatherhere.innerHTML = weatherhtml;
    document.getElementById("weather-data").after(weatherhere);
    
        let description = weather[0]["description"];
        if (description == "clear sky") {
          weatherhere.backgroundColor = "rgb(100, 169, 192)";
        } else if (description == "few clouds") {
          weatherhere.backgroundColor = "lightgrey";
        } else if (description == "scattered clouds") {
          weatherhere.backgroundColor = "lightgrey";
        } else if (description == "broken clouds") {
          weatherhere.backgroundColor = "lightgrey";
        } else if (description == "overcast clouds") {
          weatherhere.backgroundColor = "lightgrey";
        } else if (description == "shower rain") {
          weatherhere.backgroundColor = "rgb(0, 83, 146)";
        } else if (description == "rain") {
          weatherhere.backgroundColor = "rgb(0, 83, 146)";
        } else if (description == "moderate rain") {
          weatherhere.backgroundColor = "rgb(0, 83, 146)";
        } else if (description == "thunderstorm") {
          weatherhere.backgroundColor = "rgb(65, 57, 57)";
        } else if (description == "snow") {
          weatherhere.backgroundColor = "white";
        } else if (description == "mist") {
          weatherhere.backgroundColor = "lightgrey";
        } else {
          weatherhere.backgroundColor = "rgb(82, 121, 71)";
        }
  })