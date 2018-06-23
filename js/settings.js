/* Main function to set cookies */
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000 ));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

/* Main function to call cookies */
function GetCookie(cname){
	var cstring = document.cookie ;
	if (cstring.length != 0) {
		var carray = cstring.split( '; ' );
		for (i = 0 ; i < carray.length ; i++) {
			cvalue = carray[i].match ( cname + '=(.*)' );
			if (cvalue != null) {
				return decodeURIComponent ( cvalue[1] ) ;
			};
		};
	};
	return '' ;
};
