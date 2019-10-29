'use strict';

let day_string = document.querySelector('.day-string'),
    day = new Date();

day_string.innerHTML = "Текущая дата/время: '" + formatNumber(day.getHours()) + ":" + formatNumber(day.getMinutes()) + ":" + formatNumber(day.getSeconds()) + " " + formatNumber(day.getDate()) + "." + formatNumber(day.getMonth()) + "." + formatNumber(day.getFullYear()) + "'";

function formatNumber(value) {
    if (value < 10) {
        value = "0" + value;
    }
    return value;
}