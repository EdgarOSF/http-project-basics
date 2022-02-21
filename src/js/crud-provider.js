const urlCrud = 'https://reqres.in/api/users';

const getUser = async (id) => {
  const stream = await fetch(`${urlCrud}/${id}`);
  const { data: user } = await stream.json();
  return user;
};

const createUser = async (usuario) => {
  const resp = await fetch(urlCrud, {
    method: 'POST',
    body: JSON.stringify(usuario),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  console.log(await resp.json());
};

const updateUser = async (id, usuario) => {
  const resp = await fetch(`${urlCrud}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(usuario),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return await resp.json();
};

const deleteUser = async (id) => {
  const res = await fetch(`${urlCrud}/${id}`, {
    method: 'DELETE',
  });
  return res.ok ? 'Eliminado' : 'No se pudo eliminar';
};

export { getUser, createUser, updateUser, deleteUser };
