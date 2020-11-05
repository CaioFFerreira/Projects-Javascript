const countdown = document.querySelector('#countdown');

const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
 
var countDownDate = new Date("September 27, 2021 22:21:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var tempo = countDownDate - now;

  var d = Math.floor(tempo / (1000 * 60 * 60 * 24));
  var h = Math.floor((tempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var m = Math.floor((tempo % (1000 * 60 * 60)) / (1000 * 60));
  var s = Math.floor((tempo % (1000 * 60)) / 1000);

  overTime(d , days);
  overTime(h , hours);
  overTime(m , minutes);

  days.innerHTML = formatTime(d);
  hours.innerHTML = formatTime(h);
  minutes.innerHTML = formatTime(m);
  seconds.innerHTML = formatTime(s);

  if (tempo < 0) {
    clearInterval(x);
    countdown.innerHTML = `
        <p class="game-over red">Game over</p>
    `;
  }
}, 1000);

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function overTime(time , element){
     if(time === 0){
        element.classList.add('red');
     }
}