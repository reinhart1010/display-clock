/* Define variables from cookies */
var foregroundcolorc = getCookie("com.reinhart.display.clock.foregroundcolor");
var backgroundcolorc = getCookie("com.reinhart.display.clock.backgroundcolor");
var timeformatc = getCookie("com.reinhart.display.timeformat");

/* Define variables from IDs */
var dateid = document.getElementById('date');
var largeclockid = document.getElementById('largeclock');
var amtextid = document.getElementById('amtext');
var secondclockid = document.getElementById('secondclock');
var clockbodyid = document.getElementById('clockbody');

/* Determine time format */
function GetTimeFormat(){
};

/* Update clock values */
function UpdateClock(){
  dateid.innerHTML = moment().format('dddd, MMMM Do YYYY');
  secondclockid.innerHTML = moment().format('ss');
  if(timeformatc = "12h"){
    largeclockid.innerHTML = moment().format('hh:mm');
    amtextid.innerHTML = moment().format('A');
  } else if(timeformatc = "24h"){
    largeclockid.innerHTML = moment().format('HH:mm');
    amtextid.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;";
  };
  UpdateCurrentTime();

  setTimeout(UpdateClock, 500);
};

/* Apply clock settings */
function ApplyClockSettings(){
  clockbodyid.style.color = foregroundcolorc;
  clockbodyid.style.backgroundColor = backgroundcolorc;
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
