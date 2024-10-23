async function listarVideos() {
  const conexion = await fetch("http://localhost:3001/productos");
  const conexionConvertida = conexion.json();
  return conexionConvertida;
}

async function crearVideo(nombre,precio,imagen) {
  const conexion = await fetch("http://localhost:3001/productos", {
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
  const conexion = await fetch(`http://localhost:3001/productos/${id}`, {
    method: "DELETE",

})
}


export const conexionAPI = {
  listarVideos,
  crearVideo,
  deleteProducto
};
