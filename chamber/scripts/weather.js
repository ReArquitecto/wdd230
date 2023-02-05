// API: https://home.openweathermap.org
// My key: c7438d8d8022d1706856f06608bbcc0e
const url = `"https://api.openweathermap.org/data/2.5/weather?q=Rye&appid=c7438d8d8022d1706856f06608bbcc0e&units=imperial"";

fetch(url)
  .then(response => response.json())
  .then(data => {
    const { main, name, sys, weather } = data;
    const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;

    const li = document.createElement("div");
    li.id = "weather-index";

    const cityCard = 
      `<div class="city-name">
        <h2>${name}</h2>
        <h3>${sys.country}</h3>
      </div>
      <div class="city-temp">${main.temp}°F</div>
      <div>
        <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
        <figcaption class="description">${weather[0]["description"]}</figcaption>
      </div>`;

    li.innerHTML = cityCard;
    document.getElementById("hero-div").after(li);
  
        let description = weather[0]["description"];
        if (description == "clear sky") {
          document.body.style.backgroundColor = "rgb(100, 169, 192)";
        } else if (description == "few clouds") {
          document.body.style.backgroundColor = "lightgrey";
        } else if (description == "scattered clouds") {
          document.body.style.backgroundColor = "lightgrey";
        } else if (description == "broken clouds") {
          document.body.style.backgroundColor = "lightgrey";
        } else if (description == "overcast clouds") {
          document.body.style.backgroundColor = "lightgrey";
        } else if (description == "shower rain") {
          document.body.style.backgroundColor = "rgb(0, 83, 146)";
        } else if (description == "rain") {
          document.body.style.backgroundColor = "rgb(0, 83, 146)";
        } else if (description == "moderate rain") {
          document.body.style.backgroundColor = "rgb(0, 83, 146)";
        } else if (description == "thunderstorm") {
          document.body.style.backgroundColor = "rgb(65, 57, 57)";
        } else if (description == "snow") {
          document.body.style.backgroundColor = "white";
        } else if (description == "mist") {
          document.body.style.backgroundColor = "lightgrey";
        } else {
          document.body.style.backgroundColor = "rgb(82, 121, 71)";
        }
    })