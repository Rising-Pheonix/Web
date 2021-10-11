let play = document.getElementsByClassName('iPlayer');
let list = document.querySelectorAll('#pic .list')

for(let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', ()=>{
   list[i].classList.toggle('fslist');
  })
}


let btnVid = document.querySelector('a[href="#vid"]');
let btnPic = document.querySelector('a[href="#pic"]');

let video = document.getElementById('vid');
let img = document.getElementById('pic');

btnPic.addEventListener('click', ()=>{
  img.style.display = 'grid';
  video.style.display = 'none';
  btnPic.classList.add('active');
  btnVid.classList.remove('active');
})

btnVid.addEventListener('click', ()=>{
  video.style.display = 'grid';
  img.style.display = 'none';
  btnVid.classList.add('active');
  btnPic.classList.remove('active');
})