/*font size toggle

function increaseSize() {
    var el1 = document.body;
    el1.classList.toggle("large-font-size")
    var el2 = document.getElementById("network")
    el2.classList.toggle("large-image")
}*/

/*responsive navbar, following https://www.w3schools.com/howto/howto_js_topnav_responsive.asp*/

/*toggle adding/removing "responsive" class to .topnav on clicking fa fa bar icon*/
function responsiveNavbar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
} 

/*countdown timer, following https://www.w3schools.com/howto/howto_js_countdown.asp*/

/*create target Date object*/
var countDownDate = new Date("Sep 26, 2023 09:00:00").getTime();
                    
/*update countdown every second*/
var y = setInterval(function() {

  /*create start Date object*/
  var now = new Date().getTime();

  /*calculate target-start date distance*/
  var distance = countDownDate - now;

  /*calculate days, hours, minutes, seconds from milliseconds*/
  var days = Math.floor(distance / (1000 * 60 * 60 * 24)); /*calculate integer of days, by dividing distance in ms by ms/d*/
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); /*calculate integer of hours, by dividing the remainder of days division by ms/h*/
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); /*calculate integer of minutes, by dividing the remainder of hours division by ms/min*/
  var seconds = Math.floor((distance % (1000 * 60)) / 1000); /*calculate integer of seconds, by dividing remainder of minutes division by ms/secS*/

  /*update #countdown element*/
  document.getElementById("countdown").innerHTML = '<div id="countdown-container"><div class="countdown-segments"><div class="digit">' + days + '</div></br>d</div><div class="countdown-segments"><div class="digit">' + hours + '</div></br>h</div><div class="countdown-segments"><div class="digit">' + minutes + '</div></br>m</div><div class="countdown-segments"><div class="digit">' + seconds + '</div></br>s</div></div>';

  /*update #countdown element when countdown is finished*/
  if (distance < 0) {
    clearInterval(y);
    document.getElementById("countdown").innerHTML = '<h2>Welcome to DigitalBio2023!</h2>';
  }
}, 1000);