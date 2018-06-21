function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000 ));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};
var weatherapikey = document.getElementById('weatherapikey').value;
var weathercityid = document.getElementById('weathercityid').value;
var weatherapikeyc = getCookie('weatherapikey');
var weathercityidc = getCookie('weathercityid');
function UpdateClock(){
  document.getElementById('date').innerHTML = moment().format('dddd, MMMM Do YYYY');
  document.getElementById('largeclock').innerHTML = moment().format('hh:mm');
  document.getElementById('secondclock').innerHTML = "<span id='amtext'>" + moment().format('A') + "</span><br>" + moment().format(':ss');
  UpdateMiniClock()
  setTimeout(UpdateClock, 500);
};
function UpdateMiniClock(){
  document.getElementById('currenttime').innerHTML = moment().format('HH:mm');
  setTimeout(UpdateMiniClock, 500);
};
function LoadSettings(){
  if(ampmc != ""){
    ampm.value = ampmc
  };

};
function SaveSettings(){
  setCookie("weatherapikey",weatherapikey,100000);
  setCookie("weathercityid",weathercityid,100000);
};
