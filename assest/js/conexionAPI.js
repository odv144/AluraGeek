export const URL_BASE="https://apigeek.vercel.app"
// export const URL_BASE="http://localhost:3000"


async function listarVideos() {
  const conexion = await fetch(`${URL_BASE}/productos`);
  const conexionConvertida = conexion.json();
  return conexionConvertida;
}

async function crearVideo(nombre,precio,imagen) {
  const conexion = await fetch(`${URL_BASE}/productos`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      nombre: nombre,
      precio: precio,
      img: imagen,
    }),
  });
  const conexionConvertida = conexion.json();
  return conexionConvertida;
}

async function deleteProducto(id){
  console.log(id)
  const conexion = await fetch(`${URL_BASE}/productos/${id}`, {
    method: "DELETE",

})
}


export const conexionAPI = {

  listarVideos,
  crearVideo,
  deleteProducto
};
