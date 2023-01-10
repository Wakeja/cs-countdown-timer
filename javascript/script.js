//Main Events
var timerElement1 = document.getElementById("timer1");

//Awakened
var timerElement2 = document.getElementById("timer2");

//New Employees
var timerEmployee1 = document.getElementById("timerEmployee1");
var timerEmployee2 = document.getElementById("timerEmployee2");

//New Operator
var timerElement4 = document.getElementById("timer4");

//Danger Close
var timerElement5 = document.getElementById("timer5");

//Dive
var timerElement6 = document.getElementById("timer6");

//Counterpass
var timerElement8 = document.getElementById("timer8");

//Shadow Palace/Shop Reset on Mondays
var timerReset1 = document.getElementById("reset1");
var timerReset2 = document.getElementById("reset2");

// Reset targetDate7 every 10 seconds (for testing purposes)
function countdown(targetDate, element) {
    targetDate = new Date(targetDate);
    var interval = setInterval(function() {
        var currentDate = new Date();
        var seconds = Math.floor((targetDate - currentDate) / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor(hours / 24);
        hours = hours % 24;
        minutes = minutes % 60;
        seconds = seconds % 60;
        
        element.innerHTML = 
        '<span>' + days + ' days </span>' +
        '<span>' + hours + ' hours </span>' +
        '<span>' + minutes + ' minutes </span>' +
        '<span>' + seconds + ' seconds</span>';

        if(currentDate >= targetDate) {
          clearInterval(interval);
          element.innerHTML = "Expired!";
        }
    }, 1000);
}

function countReset(element) {
  var currentDate = new Date();
  var targetDate = new Date(currentDate.getTime()); // Current date
  if (element === timerReset1) {
    targetDate.setDate(currentDate.getDate() + (7 - currentDate.getDay()));
    targetDate.setHours(14);
    targetDate.setMinutes(0);
  }
  else if (element === timerReset2) {
    targetDate.setDate(currentDate.getDate() + (7 - currentDate.getDay()));
    targetDate.setHours(10);
    targetDate.setMinutes(0);
  }
  targetDate.setSeconds(0);
  targetDate.setMilliseconds(0);
  
  setInterval(function() {
    var currentDate = new Date();
    var seconds = Math.floor((targetDate - currentDate) / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);
    hours = hours % 24;
    minutes = minutes % 60;
    seconds = seconds % 60;
    
    element.innerHTML = 
    '<span>' + days + ' days </span>' +
    '<span>' + hours + ' hours </span>' +
    '<span>' + minutes + ' minutes </span>' +
    '<span>' + seconds + ' seconds</span>';
    
    if (currentDate >= targetDate) {
      // Update the target date to be one week in the future
      targetDate.setDate(targetDate.getDate() + 7);
    }
  }, 1000);
}


countdown("January 19, 2023 04:00:00 UTC+09:00", timerElement1);
countdown("January 19, 2023 04:00:00 UTC+09:00", timerElement2);

countdown("January 12, 2023 04:00:00 UTC+09:00", timerEmployee1);
countdown("January 12, 2023 04:00:00 UTC+09:00", timerEmployee2);

countdown("January 19, 2023 04:00:00 UTC+09:00", timerElement4);
countdown("January 5, 2023 04:00:00 UTC+09:00", timerElement5);
countdown("April 1, 2023 04:00:00 UTC+09:00", timerElement6);
countdown("January 12, 2023 04:00:00 UTC+09:00", timerElement8);

countReset(timerReset1);
countReset(timerReset2);

