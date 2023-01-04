//Main Events
var targetDate1 = new Date("January 19, 2023 04:00:00 UTC+09:00");
var timerElement1 = document.getElementById("timer1");

//Awakened
var targetDate2 = new Date("January 19, 2023 04:00:00 UTC+09:00");
var timerElement2 = document.getElementById("timer2");

//New Employees
var targetDate3 = new Date("January 12, 2023 04:00:00 UTC+09:00");
var timerElement3 = document.getElementById("timer3");

//New Operator
var targetDate4 = new Date("January 19, 2023 04:00:00 UTC+09:00");
var timerElement4 = document.getElementById("timer4");

//Danger Close
var targetDate5 = new Date("January 5, 2023 04:00:00 UTC+09:00");
var timerElement5 = document.getElementById("timer5");

//Dive
var targetDate6 = new Date("April 1, 2023 04:00:00 UTC+09:00");
var timerElement6 = document.getElementById("timer6");

//Shadow Palace/Shop Reset on Mondays
var targetDate7 = new Date("January 9, 2023 04:00:00 UTC+09:00");
var timerElement7 = document.getElementById("timer7");

//Counterpass
var targetDate8 = new Date("January 12, 2023 04:00:00 UTC+09:00");
var timerElement8 = document.getElementById("timer8");

function countdown(targetDate, element) {
    // Update the element every 1 second
    var interval = setInterval(function() {
        // Calculate the number of days, hours, minutes, and seconds remaining
        var currentDate = new Date();
        var seconds = Math.floor((targetDate - currentDate) / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor(hours / 24);
        hours = hours % 24;
        minutes = minutes % 60;
        seconds = seconds % 60;
        
        // Update the element with the remaining time
        element.innerHTML = 
        '<div>' + days + ' days</div>' +
        '<div>' + hours + ' hours</div>' +
        '<div>' + minutes + ' minutes</div>' +
        '<div>' + seconds + ' seconds</div>';

        // If the countdown is finished, clear the interval and update the element
        if (currentDate >= targetDate) {
          clearInterval(interval);
          element.innerHTML = "Event Over!";
        }
    }, 1000);
    console.log(element);
}


countdown(targetDate1, timerElement1);
countdown(targetDate2, timerElement2);
countdown(targetDate3, timerElement3);
countdown(targetDate4, timerElement4);
countdown(targetDate5, timerElement5);
countdown(targetDate6, timerElement6);
countdown(targetDate7, timerElement7);
countdown(targetDate8, timerElement8);

