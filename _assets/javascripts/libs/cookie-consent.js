// Creare's 'Implied Consent' EU Cookie Law Banner v:2.3
// Conceived by Robert Kent, James Bavington & Tom Foyster
 
var dropCookie = true;                      // false disables the Cookie, allowing you to style the banner
var cookieDuration = 90;                    // Number of days before the cookie expires, and the banner reappears
var cookieName = 'complianceCookie';        // Name of our cookie
var cookieValue = 'on';                     // Value of cookie
var bannerTimeout = 15000;                  // Number of milliseconds until banner gets removed

function createDiv(){
  var bodytag = document.getElementsByTagName('body')[0];
  var div = document.createElement('div');
  div.setAttribute('id','cookie-law');
  div.innerHTML = '<p>'+t("cookieConsent1")+'<a href="'+baseurl+'privacy-policy" rel="nofollow" target="_blank">'+t("cookieConsent2")+'</a>.</p>';
  bodytag.insertBefore(div,bodytag.firstChild); // Adds the Cookie Law Banner just after the opening <body> tag
  document.getElementsByTagName('body')[0].className+=' cookiebanner'; //Adds a class to the <body> tag when the banner is visible
  createCookie(window.cookieName,window.cookieValue, window.cookieDuration); // Create the cookie
  $("#cookie-law").delay(bannerTimeout).slideUp({duration: 300, complete: function(){
    $(this).remove();
  }});
}

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000)); 
    var expires = "; expires="+date.toGMTString(); 
  }
  else var expires = "";
  if(window.dropCookie) { 
    document.cookie = name+"="+value+expires+"; path=/"; 
  }
}

function checkCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name,"",-1);
}

$(function() {
  if(checkCookie(window.cookieName) != window.cookieValue){
    createDiv();
  }
});
