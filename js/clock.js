/* Define variables from cookies */
var foregroundcolorc = getCookie("com.reinhart.display.clock.foregroundcolor");
var backgroundcolorc = getCookie("com.reinhart.display.clock.backgroundcolor");

/* Update clock values */
function UpdateClock(){
  var colondeterminer = moment().second() % 2;
  document.getElementById('date').innerHTML = moment().format('dddd, MMMM Do YYYY');
  document.getElementById('largeclock').innerHTML = moment().format('hh:mm');
  document.getElementById('amtext').innerHTML = moment().format('A')
  document.getElementById('secondclock').innerHTML = moment().format('ss');

  UpdateCurrentTime();
  setTimeout(UpdateClock, 500);
};

function LoadClockSettings(){
  var clockbody = document.getElementById('clockbody');
  clockbody.style.color = foregroundcolorc;
  clockbody.style.backgroundColor = backgroundcolorc;
};
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
  setCookie("com.reinhart.display.timeformat",backgroundcolor,730);
  setCookie("com.reinhart.display.weather.weatherapikey",weatherapikey,730);
  setCookie("com.reinhart.display.weather.weathercityid",weathercityid,730);
  setCookie("com.reinhart.display.weather.weatherrefreshtime",weatherrefreshtime,730);
  setCookie("com.reinhart.display.defaultunits",defaultunits,730);
  //LoadClockSettings();
};
