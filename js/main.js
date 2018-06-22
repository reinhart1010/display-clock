function UpdateMiniClock(){
  document.getElementById('currenttime').innerHTML = moment().format('HH:mm');
  setTimeout(UpdateMiniClock, 500);
};
