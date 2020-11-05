const red = document.querySelector('#red');
const redNumber = document.querySelector('#red-number');

const green = document.querySelector('#green');
const greenNumber = document.querySelector('#green-number');

const blue = document.querySelector('#blue');
const blueNumber = document.querySelector('#blue-number');

const box = document.querySelector('.box');

function setColorRange(number ,cor) {
  setInterval(() => {
    number.innerHTML = cor.value;
    colorBox(red.value,green.value,blue.value);
  });
}

function colorBox(valor1,valor2,valor3){
  box.setAttribute('style', `background:rgb(${valor1},${valor2},${valor3})`);
}

setColorRange(redNumber,red);
setColorRange(greenNumber,green);
setColorRange(blueNumber,blue);