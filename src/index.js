// import { obtenerChiste, obtenerUsuarios } from './js/http-provider';
// import { init as initC } from './js/chistes-page';
// import { init as initU } from './js/usuarios-page';
// import * as CRUD from './js/crud-provider';
import { init } from './js/file-page';

// CRUD.getUser(2).then(console.log);
// CRUD.createUser({
//   name: 'Edgar Omar',
//   job: 'Desarrollador',
// });

// CRUD.updateUser(1, {
//   name: 'Carlota',
//   job: 'Model',
// }).then(console.log);

// CRUD.deleteUser(1).then(console.log);

// obtenerChiste().then(console.log);

// const res = fetch(urlJoke)

// res.then((stream) => {
//     stream.json().then(({id, value}) => {

//         console.log(id);
//         console.log(value);
//     })
// })

// fetch(urlJoke)
//   .then((resp) => resp.json())
//   .then(({ id, value }) => {
//     console.log(id, value);
//   });

init();
