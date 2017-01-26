//
// DO NOT CODE IN THIS FILE!
//
// WORK ONLY IN YOUR CHROME DEVELOPER CONSOLE
//
// DO NOT CODE IN THIS FILE!
//

/*
 * Cookie Manipulation
 * Source: http://www.quirksmode.org/js/cookies.html
 */

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name,"",-1);
}




/*
 * Cookie Challenge Prompts
 */

$(function(){
  console.log("document.cookie =>", document.cookie);
  var can_access = readCookie('can_access');
  var fav_color = readCookie('fav_color');

  console.log("Cookie: can_access => ", can_access);
  console.log("Cookie: fav_color => ", fav_color);

  $('body').css("background-color", fav_color || "white" );

  if ( $("#desserts_index_page").length ) {

    // Challenge Prompts
    if(!fav_color){
      $('body').append(
          $("<h2>", {text: "Challenge 1: Set you favorite color as the background color"} ),
          $("<p>", {text: "> Open your console and create the cookie: 'fav_color=green'"} ),
          $("<p>", {text: "> HINT: Make sure to refresh! (the javascript on this page only checks for a cookie on page load)"} )

      );
    } else {
      $('body').append(
          $("<h2>", {text: "Challenge 1: ✓✓✓"} )
      );
      CHALLENGE_1_DONE = true;
    }

    if (window.CHALLENGE_1_DONE) {
      if(can_access !== "yeah" ){
        $('body').append(
            $("<h2>", {text: "Challenge 2: Unlock the dessert Show pages!"} ),
            $("<p>", {text: "> Create a cookie 'can_access=yeah' that will trick the server into thinking you're logged in!"} ),
            $("<p>", {text: "> See redirect in `desserts_controller#show`"} )
        );
      } else {
        $('body').append(
            $("<h2>", {text: "Challenge 2: ✓✓✓"} ),
            $("<h3>", {text: "Success! You have a cookie in your browser!"} ),
            $("<h3>", {text: "You now have access to all pages above"} ),
            $("<h2>", {text: "Challenge 3 & 4: Can you get Favoriting working?"} ),
            $("<p>", {text: "> Open `app/controllers/desserts_controller.rb for instructions"} )
        );
      }
    }

  }


});
