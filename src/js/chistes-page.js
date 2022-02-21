import { obtenerChiste } from './http-provider';

const body = document.body;
let btnChiste, olList;

const cargarChisteHtml = () => {
  const chisteHtml = `
                    <h1 class="mt-3 mb-3">Chistes Random</h1>
                    <button class="btn btn-primary">Nuevo chiste</button>
                    <ol class="list-group mt-3">                        
                    </ol>`;

  const divChiste = document.createElement('div');
  divChiste.innerHTML = chisteHtml;
  body.append(divChiste);
};

const eventos = () => {
  btnChiste = document.querySelector('button');
  olList = document.querySelector('ol');

  btnChiste.addEventListener('click', async () => {
    btnChiste.disabled = true;
    dibujarChiste(await obtenerChiste());
    btnChiste.disabled = false;
  });
};

// chiste {id, value}
const dibujarChiste = (chiste) => {
  const li = document.createElement('li');
  li.innerHTML = `<b>${chiste.id}:</b> ${chiste.value}`;
  li.classList.add('list-group-item');
  olList.append(li);
};

export const init = () => {
  cargarChisteHtml();
  eventos();
};
