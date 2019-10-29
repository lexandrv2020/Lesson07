'use strict';

let day_string = document.querySelector('.day-string'),
    day = new Date(),
    date_day,
    date_month,
    date_year,
    date_hour,
    date_minute,
    date_secund;



day_string.innerHTML = "Текущая дата/время: '" + formatNumber(day.getHours()) + ":" + formatNumber(day.getMinutes()) + ":" + formatNumber(day.getSeconds()) + " " + formatNumber(day.getDate()) + "." + formatNumber(day.getMonth()) + "." + formatNumber(day.getFullYear()) + "'";

console.log(day_string.textContent, day_string.innerHTML);

function formatNumber(value) {
    if (value < 10) {
        value = "0" + value;
    }
    return value;
}