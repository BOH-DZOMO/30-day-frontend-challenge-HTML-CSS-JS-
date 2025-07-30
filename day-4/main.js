let hrs = document.getElementById("hours");
let mins = document.getElementById("minutes");
let secs = document.getElementById("seconds");

setInterval(() => {
  let currentTime = new Date();
  hrs.textContent = currentTime.getHours()<10 ? '0'+currentTime.getHours(): currentTime.getHours();
  mins.textContent = currentTime.getMinutes()<10 ? '0'+currentTime.getMinutes(): currentTime.getMinutes();
  secs.textContent = currentTime.getSeconds()<10 ? '0'+currentTime.getSeconds(): currentTime.getSeconds();
}, 1000);
