/* Define variables from cookies and IDs */
// var foregroundcolorc = getCookie("com.reinhart.display.clock.foregroundcolor");
// var backgroundcolorc = getCookie("com.reinhart.display.clock.backgroundcolor");
// var weatherapikeyc = getCookie("com.reinhart.display.weather.weatherapikey");
// var weathercityidc = getCookie("com.reinhart.display.weather.weathercityid");
// var weatherrefreshtimec = getCookie("com.reinhart.display.weather.weatherrefreshtime") * 60 * 1000;
// var defaultunitsc = getCookie("com.reinhart.display.defaultunits");
// var foregroundcolor = document.getElementById('foregroundcolor').value;
// var backgroundcolor = document.getElementById('backgroundcolor').value;
// var weatherapikey = document.getElementById('weatherapikey').value;
// var weathercityid = document.getElementById('weathercityid').value;
// var weatherrefreshtime = document.getElementById('weatherrefreshtime').value;
// var defaultunits = document.getElementById('defaultunits').value;

var data = {
  clock: {
    dateFormat: "ddd, MMMM Do YYYY",
    showSeconds: true,
    timeFormat: "24h"
  },
  theme: {
    backgroundColor: "#ffffff",
    foregroundColor: "#000000"
  },
  weather: {
    apiKey: "",
    cityId: "",
    defaultUnits: "",
    refreshTime: ""
  }
};

/* Clock start script */
function StartClock(){
  LoadClockSettings();
  UpdateClock();
  ApplyClockSettings();
  //UpdateWeather();
}

/* Load clock settings */
function LoadClockSettings(){
  var cookie = getCookie("com.reinhart.display.clock");
  if(cookie && cookie != ""){
    data = JSON.parse(cookie);
  };
  setCookie("com.reinhart.display.clock", JSON.stringify(data), 730);
}

/* Update clock values */
function UpdateClock(){
  document.getElementById('date').innerHTML = moment().format(data.clock.dateFormat);
  if (data.clock.showSeconds == true) document.getElementById('secondclock').innerHTML = moment().format('ss');
  if (data.clock.timeFormat == "12h"){
    document.getElementById('largeclock').innerHTML = moment().format('hh:mm');
    document.getElementById('amtext').innerHTML = moment().format('a');
  } else {
    document.getElementById('largeclock').innerHTML = moment().format('HH:mm');
    document.getElementById('amtext').innerHTML = moment().format('      ');
  };
  UpdateCurrentTime();
  setTimeout(UpdateClock, 500);
}

/* Apply clock settings */
function ApplyClockSettings(){
  var clockbody = document.getElementsByTagName('body')[0];
  if(data.theme.foregroundColor != null && data.theme.foregroundColor != ""){
    console.log("FG");
    clockbody.style.color = data.theme.foregroundColor;
  } else {clockbody.style.color = "#ffffff"}
  if(data.theme.backgroundColor != null && data.theme.backgroundColor != ""){
    console.log("BG");
    clockbody.style.backgroundColor = data.theme.backgroundColor;
  } else {clockbody.style.backgroundColor = "#000000"}
}

/* Save clock settings */
function SaveClockSettings(){
  if (ValidateSettings("timeformat") == true) data.clock.timeFormat = document.getElementById('timeformat').value;
  if (ValidateSettings("backgroundcolor") == true) data.theme.backgroundColor = document.getElementById('backgroundcolor').value;
  if (ValidateSettings("foregroundcolor") == true) data.theme.foregroundColor = document.getElementById('foregroundcolor').value;
  if (ValidateSettings("weatherapikey") == true) data.weather.apiKey = document.getElementById('weatherapikey').value;
  if (ValidateSettings("weathercityid") == true) data.weather.cityId = document.getElementById('weathercityid').value;
  if (ValidateSettings("weatherrefreshtime") == true) data.weather.refreshTime = document.getElementById('weatherrefreshtime').value;
  if (ValidateSettings("defaultunits") == true) data.weather.defaultUnits = document.getElementById('defaultunits').value;

  setCookie("com.reinhart.display.clock", JSON.stringify(data), 730);
  location.reload();
}

function ValidateSettings(id){
  if (document.getElementById(id).value != null && document.getElementById(id).value != ""){
    return true;
  } else {
    return false;
  }
};

var homecpanel = "<a onClick=\"ClockSettings('clockbody')\"><i class='icon ion-ios-settings'></i> Settings</a> | <a onClick='screenfull.toggle()'><i class='icon ion-ios-qr-scanner'></i> Fullscreen</a>";
var settingscpanel = "<a onClick=\"ClockHome('clocksettings')\"><i class='icon ion-ios-arrow-back'></i> Back</a> | <a href=\"#\" onClick=\"SaveClockSettings()\"><i class='icon ion-ios-checkbox-outline'></i> Save</a> | <a onClick=\"ClockAbout('clocksettings')\"><i class='icon ion-ios-information-circle-outline'></i> About</a>";
var aboutcpanel = "<a onClick=\"ClockSettings('clockabout')\"><i class='icon ion-ios-arrow-back'></i> Back</a>";

function ClockHome(hideid){
  TogglePage(hideid,"clockbody");
  document.getElementById('controlpanel').innerHTML = homecpanel;
  document.getElementById("title").innerHTML = "Clock";
}

function ClockSettings(hideid){
  TogglePage(hideid,"clocksettings");
  document.getElementById('controlpanel').innerHTML = settingscpanel;
  document.getElementById("title").innerHTML = "Settings";
}

function ClockAbout(hideid){
  TogglePage(hideid,"clockabout");
  document.getElementById('controlpanel').innerHTML = aboutcpanel;
  document.getElementById("title").innerHTML = "About";
}
