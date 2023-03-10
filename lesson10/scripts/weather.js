const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Rye%2C%20CO?unitGroup=metric&key=WT6QXP5322G6HZMPKSGJLQ4U7&contentType=json";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
  };
getWeather();