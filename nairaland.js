let clock = document.getElementById("clocktime");
function weekDay() {
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    const d = new Date();
    let day = weekday[d.getDay()];
    return day;
}
//setInterval(day, 1000);
function year() {
    let dateInit = new Date();
    let thisYear = dateInit.getFullYear();
    return thisYear;
}

function month() {
    const monthArray = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    let dateInit = new Date();
    let thisMonth = monthArray[dateInit.getMonth()];
    return thisMonth;
}

function date() {
    let dateInit = new Date();
    let todaysDate = dateInit.getDate();
    return todaysDate;
}

const showTime = () => {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    am_pm = "AM";
    let dot = ":";
    if (hour > 12) {
        hour -= 12;
        am_pm = "pm";
    }
    if (hour == 0) {
        hour = 12;
        am_pm = "am";
    }
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    let currentTime = hour + dot + min + " " + am_pm;
    return currentTime;
}
setInterval(showTime, 1000);
let display = weekDay() +
    ", " +
    date() +
    " " +
    month() +
    " " +
    year() +
    " " +
    "at" +
    " " +
    showTime();
clock.innerHTML = display;

