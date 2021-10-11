// for Gallery Uploaded Files
let showFile = document.getElementById('filename');
let inputFile = document.getElementById('file');
let uploadForm = document.getElementById('upload');
let field = document.querySelector('.wrap');


let fileName;

inputFile.addEventListener('change', ({ target }) => {
  let file = target.files[0];
  
  fileName = file.name;

  if (file) {
    if (fileName.length >= 16) {
      let splitName = fileName.split('.');
      fileName = splitName[0].substring(0, 17) + ".. ." + splitName[1];
    }
    
    showFile.innerHTML = fileName;
  }
})

uploadForm.addEventListener('submit', ()=>{
  uploadFile(fileName);
})


function uploadFile(name) {
  let xhr = new XMLHttpRequest();
  
  xhr.open('POST', '/gallery/upload');

  xhr.upload.addEventListener('progress', ({ loaded, total }) => {
    let fileLoaded = Math.floor((loaded / total) * 100);

    let barHTML =
      `
    <div class="bar">
			<div class="status">
				<i class="fas fa-upload fa-flash fa-fade"></i> &nbsp; Uploading...
			</div>
			<div class="progress fa-fade" style=" width: ${fileLoaded}%"> ${fileLoaded}%</div>
		</div>`;
    field.innerHTML = barHTML;


    if (loaded == total) {
      let fullbarHTML =
        `
    <div class="bar">
			<div class="status">
				<i class="fas fa-check"></i> &nbsp; ${name}
			</div>
			<div class="progress" style=" width: 100%">Completed</div>
		</div>`;
		
		field.innerHTML = fullbarHTML;

    }
  })
  xhr.send(FormData);
}