var timeformatc = getCookie("com.reinhart.display.timeformat");

function GetTimeFormat(){
  if (timeformatc = ""){
    return "12h";
  } else {
    return timeformatc
  };
};

function UpdateCurrentTime(){
  if(timeformatcf = "24h"){
    document.getElementById('currenttime').innerHTML = moment().format('hh:mm') + " <span id='currenttime-ampm'>" + moment().format('a') + "</span>";
  } else if(timeformatcf = "12h"){
    document.getElementById('currenttime').innerHTML = moment().format('HH:mm');
  };
  setTimeout(UpdateCurrentTime, 500);
};

function TogglePage(id1,id2) {
    var div1 = document.getElementById(id1);
    var div2 = document.getElementById(id2);
    div1.style.display = div1.style.display == "none" ? "block" : "none";
    div2.style.display = div2.style.display == "block" ? "none" : "block";
};

function CurrentURL(){
  alert(window.location.href);
};
