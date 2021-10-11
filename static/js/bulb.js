// this is for light bulb
let light = document.querySelector('.lightOff');
let switchBtn = document.querySelector('.switch');
let soonTitle = document.querySelector('.titleOff');

switchBtn.addEventListener('click', () => {
  light.classList.toggle('lightOn');
  soonTitle.classList.toggle('titleOn');
  if (switchBtn.innerHTML == 'ON') {
    switchBtn.innerHTML = 'OFF';
    switchBtn.style.color = '#fff';
  }
  else {
    switchBtn.innerHTML = 'ON'
    switchBtn.style.color = '#fff9'
  }
})
