function showTime() {
    let time = new Date();

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    // add 0 before single digit
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    document.getElementById("clock").innerHTML =
        hours + " : " + minutes + " : " + seconds;
}

// call every 1 second
setInterval(showTime, 1000);

// call immediately also
showTime();