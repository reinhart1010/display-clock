function UpdateCurrentTime(){
  document.getElementById('currenttime').innerHTML = moment().format('HH:mm');
  setTimeout(UpdateCurrentTime, 500);
};
