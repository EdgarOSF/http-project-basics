import { subirArchivo } from './http-provider';

const body = document.body;
let inputFile, imgFoto;

const crearInputFileHtml = () => {
  const fileHtml = `
                    <h1 class='mt-10'> Subir Archivo</h1>
                    <hr>
                    <label>Selecicionar un archivo</label>
                    <input type='file' accept='image/png, image/jpeg' />
                    
                    <img id='foto' class='img-thumbnail' src=''>
                    `;

  const divFile = document.createElement('div');
  divFile.innerHTML = fileHtml;
  body.append(divFile);

  inputFile = document.querySelector('input');
  imgFoto = document.querySelector('#foto');
};

// eventos
const eventos = () => {
  inputFile.addEventListener('change', (event) => {
    const file = event.target.files[0];
    subirArchivo(file).then((url) => {
      imgFoto.src = url;
    });
  });
};

export const init = () => {
  crearInputFileHtml();
  eventos();
};
