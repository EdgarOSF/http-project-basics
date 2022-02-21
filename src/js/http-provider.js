const urlJoke = 'https://api.chucknorris.io/jokes/random';
const urlUsers = 'https://reqres.in/api/users?page=2';
const cloudPreset = 'gyhxenif';
const cloudUrl = 'https://api.cloudinary.com/v1_1/dfwcfzzea/upload';

const subirArchivo = async (archivo) => {
  const formData = new FormData();
  formData.append('upload_preset', cloudPreset);
  formData.append('file', archivo);

  try {
    const stream = await fetch(cloudUrl, {
      method: 'POST',
      body: formData,
    });

    if (stream.ok) {
      const cloudResp = await stream.json();
      return cloudResp.secure_url;
    } else {
      throw await stream.json();
    }
  } catch (error) {
    throw error;
  }
};

const obtenerChiste = async () => {
  try {
    const res = await fetch(urlJoke);

    if (!res.ok) throw 'Ocurrio un error con la peticion';

    const { id, icon_url, value } = await res.json();

    return {
      id,
      icon_url,
      value,
    };
  } catch (error) {
    throw error;
  }
};

const obtenerUsuarios = async () => {
  const stream = await fetch(urlUsers);
  const { data: usuarios } = await stream.json();
  return usuarios;
};

export { obtenerChiste, obtenerUsuarios, subirArchivo };
