//Main Events
var timerEvent1 = document.getElementById("timerEvent1");
var timerEvent2 = document.getElementById("timerEvent2");

//Awakened
var timerAwakened1 = document.getElementById("timerAwakened1");
var timerAwakened2 = document.getElementById("timerAwakened2");

//New Employees
var timerEmployee1 = document.getElementById("timerEmployee1");
var timerEmployee2 = document.getElementById("timerEmployee2");

//New Operator
var timerElement4 = document.getElementById("timer4");

//Danger Close
var timerDangerClose = document.getElementById("timerDangerClose");

//Dive
var timerDive = document.getElementById("timerDive");

//Counterpass; Resets every 28 days
var timerCounterpass = document.getElementById("timerCounterpass");

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


countdown("February 8, 2023 04:00:00 UTC+09:00", timerEvent1);
countdown("February 8, 2023 04:00:00 UTC+09:00", timerEvent2);

countdown("February 8, 2023 04:00:00 UTC+09:00", timerAwakened1);
countdown("February 2, 2023 04:00:00 UTC+09:00",timerAwakened2);

countdown("February 8, 2023 04:00:00 UTC+09:00", timerEmployee1);
countdown("February 8, 2023 04:00:00 UTC+09:00", timerEmployee2);

countdown("January 19, 2023 04:00:00 UTC+09:00", timerElement4);

countdown("January 19, 2023 04:00:00 UTC+09:00", timerDangerClose);
countdown("April 1, 2023 04:00:00 UTC+09:00", timerDive);

countdown("February 8, 2023 04:00:00 UTC+09:00", timerCounterpass);

countReset(timerReset1);
countReset(timerReset2);

