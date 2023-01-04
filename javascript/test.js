function countDown(days, hours, mins, secs, date, id, itemId) {
    // Calculate the time remaining until the countdown date
    var countDate = new Date(date).getTime();
    var now = new Date().getTime();
    var gap = countDate - now;
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;

    var textDay = Math.floor(gap / day);
    var textHour = Math.floor((gap % day) / hour);
    var textMinute = Math.floor((gap % hour) / minute);
    var textSecond = Math.floor((gap % minute) / second);
    
    // Select all the elements with the specified class
    var daysValue = document.querySelectorAll(days);
    var hoursValue = document.querySelectorAll(hours);
    var minutesValue = document.querySelectorAll(mins);
    var secondsValue = document.querySelectorAll(secs);

    if (daysValueNumber < 0) {
      timerRemoveElements(id, itemId);
  }
    // Update the innerHTML of the selected elements with the time remaining
    daysValue.forEach(day => {
      day.innerHTML = textDay;
    });
    hoursValue.forEach(hour => {
      hour.innerHTML = textHour;
    });
    minutesValue.forEach(minute => {
      minute.innerHTML = textMinute;
    });
    secondsValue.forEach(second => {
      second.innerHTML = textSecond;
    })

}

function timerRemoveElements(id, itemId) {
  const elements = document.querySelectorAll(itemId);

  elements.forEach(element => {
      element.remove();
  });

  if (elements.length > 0) {
      document.querySelectorAll(id).forEach(id => {
          id.innerHTML += `<div class= event-end>
                              <h1>EXPIRED</h1>
                          </div>`;
      });
  }
}

//Main Events
setInterval(function() {countDown("#days1", "#hours1", "#minutes1", "#seconds1", "January 19, 2023 04:00:00 UTC-05:00", 'count1', ".t1")}, 1000);
//Awakened
setInterval(function() {countDown('#days3', '#hours3', '#minutes3', '#seconds3', 'January 19, 2023 04:00:00 UTC+09:00', 'count3', ".t3")}, 1000);
//New Employees
setInterval(function() {countDown('#days4', '#hours4', '#minutes4', '#seconds4', 'January 12, 2023 04:00:00 UTC+09:00', 'count4', ".t4")}, 1000);
//New Operator
setInterval(function() {countDown('#days5', '#hours5', '#minutes5', '#seconds5', 'January 19, 2023 04:00:00 UTC+09:00', 'count5', ".t5")}, 1000);
//Danger Close
setInterval(function() {countDown('#days6', '#hours6', '#minutes6', '#seconds6', 'January 5, 2023 04:00:00 UTC+09:00', 'count6', ".t6")}, 1000);
//Dive
setInterval(function() {countDown('#days7', '#hours7', '#minutes7', '#seconds7', 'April 1, 2023 04:00:00 UTC+09:00', 'count7', ".t7")}, 1000);
//Shadow Palace/Shop Reset on Mondays
setInterval(function() {countDown('#days8', '#hours8', '#minutes8', '#seconds8', 'January 9, 2023 04:00:00 UTC+09:00', 'count8', ".t8")}, 1000);
//Counterpass
setInterval(function() {countDown('#days9', '#hours9', '#minutes9', '#seconds9', 'January 12, 2023 04:00:00 UTC+09:00', 'count9', ".t9")}, 1000);
