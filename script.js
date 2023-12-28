// Notes:
// * Start of exams is Dec 9, 2023 @ 9am Saskatoon Time (+6hrs to convert to UTC)
// * No need to consider Daylight Savings conversions, since UTC and Saskatoon time never change
// * Countdown timer should display the same time left regardless of timezone

// Set targt countdown date (UTC)
let targetDate = Date.UTC(2023, 11, 9, 15, 0, 0); // Add 6 hours for UTC conversion

// Update the countdown timer every second
let interval = setInterval(function () {

    // Get the current time/date (UTC)
    let now = new Date().getTime();

    // Calculate difference between now and target date
    let timeLeft = targetDate - now;

    // Convert the time left (milliseconds) to each time unit
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // If target date is reached, end the timer
    if (timeLeft < 0) {
        clearInterval(interval);
        
        // Set time to zero to prevent negative values
        days = 0;
        hours = 0;
        mins = 0;
        secs = 0;

        // Update timer message
        document.getElementById("message").innerHTML = "There's no time to study left - good luck on your exams!";
    }

    // Update the timer with the calcuated time left
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = mins;
    document.getElementById("secs").innerHTML = secs;
    
}, 1000);