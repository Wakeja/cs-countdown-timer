//Main Events
var timerElement1 = document.getElementById("timer1");

//Awakened
var timerElement2 = document.getElementById("timer2");

//New Employees
var timerElement3 = document.getElementById("timer3");

//New Operator
var timerElement4 = document.getElementById("timer4");

//Danger Close
var timerElement5 = document.getElementById("timer5");

//Dive
var timerElement6 = document.getElementById("timer6");

//Shadow Palace/Shop Reset on Mondays
var timerElement7 = document.getElementById("timer7");

//Counterpass
var timerElement8 = document.getElementById("timer8");

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
        '<div>' + days + ' days</div>' +
        '<div>' + hours + ' hours</div>' +
        '<div>' + minutes + ' minutes</div>' +
        '<div>' + seconds + ' seconds</div>';

        if (element === timerElement7 && currentDate > targetDate) {
          // Update the target date to be one week in the future
          targetDate = new Date(targetDate.getTime() + 7 * 24 * 60 * 60 * 1000);
        }
        else if(currentDate >= targetDate) {
          clearInterval(interval);
          element.innerHTML = "Event Over!";
        }
    }, 1000);
    console.log(element);
}

countdown("January 19, 2023 04:00:00 UTC+09:00", timerElement1);
countdown("January 19, 2023 04:00:00 UTC+09:00", timerElement2);
countdown("January 12, 2023 04:00:00 UTC+09:00", timerElement3);
countdown("January 19, 2023 04:00:00 UTC+09:00", timerElement4);
countdown("January 5, 2023 04:00:00 UTC+09:00", timerElement5);
countdown("April 1, 2023 04:00:00 UTC+09:00", timerElement6);
countdown("January 9, 2023 04:00:00 UTC+09:00", timerElement7);
countdown("January 12, 2023 04:00:00 UTC+09:00", timerElement8);

