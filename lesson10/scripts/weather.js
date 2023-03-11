const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Rye%2C%20CO?unitGroup=metric&key=WT6QXP5322G6HZMPKSGJLQ4U7&contentType=json";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    let weather_icon_source = 'https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/' + data.currentConditions.icon + '.svg'
    let weather_icon_description = data.currentConditions.icon;
    document.querySelector('#weather_icon').setAttribute('src', weather_icon_source);
    document.querySelector('#weather_icon').setAttribute('alt', weather_icon_description);
    let t = data.currentConditions.temp;
    document.querySelector('#t').textContent = Math.round(t * 5/9 +32 );
    document.querySelector('#condition').textContent =  data.currentConditions.conditions;
    document.querySelector('#ws').textContent = data.currentConditions.windspeed;


  };
getWeather();