/* Define variables from cookies */
var weatherapikeyc = getCookie("com.reinhart.display.weather.weatherapikey");
var weathercityidc = getCookie("com.reinhart.display.weather.weathercityid");
var weatherrefreshtimec = getCookie("com.reinhart.display.weather.weatherrefreshtime") * 60 * 1000;
var defaultunitsc = getCookie("com.reinhart.display.defaultunits")

/* Request JSON file from OpenWeatherMap API */
function UpdateWeather(){
  var req = new XMLHttpRequest();
  req.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
      var jsonData = JSON.parse(this.responseText);
      ParseWeather(jsonData);
    }
  };
  req.open("GET", "https://api.openweathermap.org/data/2.5/weather?id=" + weathercityidc + "&APPID=" + weatherapikeyc + "&units=" + defaultunitsc, true);
  //req.open("GET", "assets/testscript/openweathermap-apitest-1.json", true); //Sample API
  req.overrideMimeType("application/json");
  req.send(null);
  if(weatherrefreshtimec != "0"){
    setTimeout(UpdateWeather, weatherrefreshtimec);
  } else {
    return 0;
  };
};

/* Determine weather unit symbol */
function FindTemperatureSymbol(){
  if (defaultunitsc == "imperial"){
    return "&deg;F";
  } else if (defaultunitsc == "metric"){
    return "&deg;C";
  } else {return "K";};
};

/* Parse current weather to clock */
function ParseWeather(json){
  var tempsymbol = FindTemperatureSymbol();
  document.getElementById('weather').innerHTML = "<b id='weathercity'></b> &bull; <span id='weatherstatus'></span> <span id='currenttemp'></span> (<span id='mintemp'></span>&ndash;<span id='maxtemp'></span>)"
  document.getElementById('weathercity').innerHTML = json.name + ", " + json.sys.country;
  document.getElementById('currenttemp').innerHTML = json.main.temp.toFixed(0) + tempsymbol;
  document.getElementById('mintemp').innerHTML = json.main.temp_min.toFixed(0) + tempsymbol;
  document.getElementById('maxtemp').innerHTML = json.main.temp_max.toFixed(0) + tempsymbol;
  document.getElementById('weatherstatus').innerHTML = json.weather[0].main;
  document.getElementById('weathericon').className = "owf owf-" + json.weather[0].id + "-" + json.weather[0].icon.slice(-1);
};
