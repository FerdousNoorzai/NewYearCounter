let months = document.getElementById("months");
let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");



function timer() {
    let today = new Date();
    let newYear = new Date("1 Jan 2023");
    let change = (newYear - today) / 1000;
    months.innerHTML = Math.floor(change / 3600 / 24 / 30)
    days.innerHTML = Math.floor(change / 3600 / 24)
    hours.innerHTML = Math.floor(change / 3600) % 24;
    minutes.innerHTML = Math.floor(change / 60) % 60;
    seconds.innerHTML = Math.floor(change % 60);
}
setInterval(timer, 1000);