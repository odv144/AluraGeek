import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");
function crearCard(titulo, imagen, precio,id) {
  const producto = document.createElement("article");
  producto.classList.add("card");

  //Opcion deshabilitada para mostrar detalles
  
  // producto.addEventListener('click',()=>{ 
  //   const url = `detalle.html?id=${encodeURIComponent(id)}`;
  //   window.location.href = url;});

  producto.innerHTML = ` <img src=${imagen} alt="titulo" />
                  <h4 class='card-titulo'>${titulo}</h4>
                <div class="precio-icon">
                <span>$ ${precio}</span>
                <img class="icon-trash" src="/assest/img/papelera.png" alt="Eliminar Producto" data-eliminar="${id}" />
                </div>
                `;
              const basurero = producto.querySelector(`[data-eliminar="${id}"]`)
                basurero.addEventListener ("click", () => {
                conexionAPI.deleteProducto(id);
              })
  return producto;
}


async function mostrarVideos() {
  const listaAPI = await conexionAPI.listarVideos();
  listaAPI.forEach((video) => {
    lista.appendChild(crearCard(video.nombre, video.img, video.precio,video.id));
  });
}

mostrarVideos();

