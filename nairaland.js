// let clock = document.getElementById('clocktime');
const dayOfWeek = () => {
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
    // return day;
    console.log(dayOfWeek);
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
document.getElementById('clocktime').InnerHTML = showTime();

setInterval(showTime);
