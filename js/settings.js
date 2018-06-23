/* Main function to set cookies */
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000 ));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

/* Main function to call cookies */
function getCookie(cname) {
  var re = new RegExp(cname + "=([^;]+)");
  var value = re.exec(document.cookie);
  return (value != null) ? unescape(value[1]) : null;
};
