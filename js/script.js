"use strict";

const year = document.getElementById("coming-year");
const d = document.getElementById("days");
const h = document.getElementById("hours");
const m = document.getElementById("minutes");
const s = document.getElementById("seconds");

const comingYear = new Date().getFullYear() + 1;
year.innerHTML = comingYear;

function getTrueNumber(time) {
  return time < 10 ? `0${time}` : time;
}

function calculateRemainingTime() {
  const now = new Date();
  const newYearTime = new Date(`Jan 1 ${comingYear} 00:00`);

  const diff = newYearTime - now;

  const days = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  d.innerHTML = getTrueNumber(days);
  h.innerHTML = getTrueNumber(hours);
  m.innerHTML = getTrueNumber(minutes);
  s.innerHTML = getTrueNumber(seconds);
}

setInterval(calculateRemainingTime, 1000);
