// CLICK SOUND EFFECT FOR BUTTTONS
const btn = document.getElementsByClassName('btn');
const sound = document.getElementById('sound');

for (i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', () => {
    sound.play();
    sound.playbackRate = 1.5;
  });
}

// this is for  hamburger Menubar
const hamburger = {
  menu: document.querySelector('.menuBar'),
  nav: document.querySelector('.navHide'),
  icon: document.getElementById('menu')
}

hamburger.menu.addEventListener('click', () => {
  hamburger.icon.classList.toggle('fa-xmark');
  hamburger.nav.classList.toggle('navShow');
})


// this block is for popup window
const pop = {
  form: document.getElementById('loginForm'),
  btnShow: document.querySelector('.user'),
  btnHide: document.getElementById('hideLog'),
}

if (pop.btnShow.id == 'showLog') {

  let show = `
  transform: translateX(-50%) scale(1); opacity: 1;`
  let hide = `
  transform: translateX(-50%) scale(0); opacity: 0;`


  // when clicked on loginbtn , Open popup
  pop.btnShow.addEventListener('click', () => {
    pop.form.style.cssText = show;
  })

  //when clicked on Xmark icons form, Close it
  pop.btnHide.addEventListener('click', () => {
    pop.form.style.cssText = hide;
  })
  // When the user clicks anywhere outside of the Form, close it
  window.addEventListener('click', () => {
    if (event.target == pop.form) {
      pop.form.style.cssText = hide;
    }
  })

}
else if(pop.btnShow.id == 'showAcc') {

  const userpop = {
    menu: document.querySelector('.user_popup'),
  }


  pop.btnShow.addEventListener('click', () => {
    userpop.menu.classList.toggle('show');
  })
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      userpop.menu.classList.remove('show');
    }
  })
  hamburger.menu.addEventListener('click', () => {
    userpop.menu.classList.remove('show');
  })
}