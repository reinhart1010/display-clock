/* Define variables from cookies, functions and IDs */
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

var homecpanel = "<a onClick=\"ClockSettings('clockhome')\"><i class='icon ion-ios-settings'></i> Settings</a> | <a onClick='screenfull.toggle()'><i class='icon ion-ios-qr-scanner'></i> Fullscreen</a>";
var settingscpanel = "<a onClick=\"ClockHome('clocksettings')\"><i class='icon ion-ios-arrow-back'></i> Back</a> | <a onClick=\"ClockAbout('clocksettings')\"><i class='icon ion-ios-information-circle-outline'></i> About</a>";
var aboutcpanel = "<a onClick=\"ClockSettings('clockabout')\"><i class='icon ion-ios-arrow-back'></i> Back</a>";

function ClockHome(hideid){
  TogglePage(hideid,"clockbody");
  document.getElementById('controlpanel').innerHTML = homecpanel;
  document.getElementById("title").innerHTML = "Clock"
};

function ClockSettings(hideid){
  TogglePage(hideid,"clocksettings");
  document.getElementById('controlpanel').innerHTML = settingscpanel;
  document.getElementById("title").innerHTML = "Settings"
};

function ClockAbout(hideid){
  TogglePage(hideid,"clockabout");
  document.getElementById('controlpanel').innerHTML = aboutcpanel;
  document.getElementById("title").innerHTML = "About"
};
