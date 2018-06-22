/* Define variables from cookies */
var foregroundcolorc = getCookie("com.reinhart.display.clock.foregroundcolor");
var backgroundcolorc = getCookie("com.reinhart.display.clock.backgroundcolor");
var timeformatcf = GetTimeFormat();

/* Clock start script */
function StartClock(){
  ApplyClockSettings();
  LoadClockSettings();
  UpdateClock();
  UpdateWeather();
};

function GetHourFormat(){
  if(timeformatcf = "24h"){
    return moment().format('hh:mm');
  } else if(timeformatcf = "12h"){
    return moment().format('HH:mm');
  };
};

function GetAmPmFormat(){
  if(timeformatcf = "24h"){
    return moment().format('a');
  } else if(timeformatcf = "12h"){
    return '&nbsp;&nbsp;&nbsp;&nbsp;';
  };
};

/* Update clock values */
function UpdateClock(){
  document.getElementById('date').innerHTML = moment().format('dddd, MMMM Do YYYY');
  document.getElementById('secondclock').innerHTML = moment().format('ss');
  document.getElementById('largeclock').innerHTML = GetHourFormat();
  document.getElementById('amtext').innerHTML = GetAmPmFormat();
  UpdateCurrentTime();
  setTimeout(UpdateClock, 500);
};

/* Apply clock settings */
function ApplyClockSettings(){
  var clockbodybackground = document.getElementById('clockbody').style.backgroundColor;
  var clockbodycolor = document.getElementById('clockbody').style.color;
  if(foregroundcolorc != null){
    clockbodycolor = foregroundcolorc;
  } else {clockbodycolor = "#fff"};
  if(backgroundcolorc != null){
    clockbodybackground = backgroundcolorc;
  } else {clockbodybackground = "#000"};
};

/* Load clock settings */
function LoadClockSettings(){
  var weatherapikeyc = getCookie("com.reinhart.display.weather.weatherapikey");
  var weathercityidc = getCookie("com.reinhart.display.weather.weathercityid");
  var weatherrefreshtimec = getCookie("com.reinhart.display.weather.weatherrefreshtime") * 60 * 1000;
  var defaultunitsc = getCookie("com.reinhart.display.defaultunits")
};

/* Save clock settings */
function SaveClockSettings(){
  var foregroundcolor = document.getElementById('foregroundcolor').value;
  var backgroundcolor = document.getElementById('backgroundcolor').value;
  var timeformat = document.getElementById('timeformat').value;
  var weatherapikey = document.getElementById('weatherapikey').value;
  var weathercityid = document.getElementById('weathercityid').value;
  var weatherrefreshtime = document.getElementById('weatherrefreshtime').value;
  var defaultunits = document.getElementById('defaultunits').value;
  setCookie("com.reinhart.display.clock.foregroundcolor",foregroundcolor,730);
  setCookie("com.reinhart.display.clock.backgroundcolor",backgroundcolor,730);
  setCookie("com.reinhart.display.timeformat",timeformat,730);
  setCookie("com.reinhart.display.weather.weatherapikey",weatherapikey,730);
  setCookie("com.reinhart.display.weather.weathercityid",weathercityid,730);
  setCookie("com.reinhart.display.weather.weatherrefreshtime",weatherrefreshtime,730);
  setCookie("com.reinhart.display.defaultunits",defaultunits,730);
  ApplyClockSettings();
};
