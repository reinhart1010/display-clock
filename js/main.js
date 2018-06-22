var timeformatc = getCookie("com.reinhart.display.timeformat");

function GetTimeFormat(){
  if (username = ""){
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
