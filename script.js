let lineEl = document.querySelector("#line");

let angle = 0;

setInterval(() => {
  angle += 2; 
  lineEl.style.transform = `rotate(${angle}deg)`;
}, 20);