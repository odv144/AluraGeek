import { conexionAPI } from "./conexionAPI.js";
// Obtener la URL actual
const urlActual = window.location.href;
// Crear una instancia de URL
const url = new URL(urlActual);
// Crear una instancia de URLSearchParams
const params = new URLSearchParams(url.search);
// Recuperar los valores de los parámetros
const id = params.get('id');
const detalles = document.querySelector(".detalles");
const insertarDetalles=async()=>{
    const response=await mostrarDetalles(id);
    console.log(response)
    const titulo = document.createElement('h2');
    const img = document.createElement('img');
    const contenedorMapa= document.querySelector(".mapa")
    const mapa = document.createElement('iframe');

    titulo.textContent="hola mundo"+response.nombre;
    img.src = response.img;
    
    mapa.src= response.mapa;
    mapa.style="border: 0"
    mapa.allowfullscreen=""
    mapa.loading="lazy"
    mapa.referrerpolicy="no-referrer-when-downgrade"
   
    detalles.appendChild(titulo);
    detalles.appendChild(img);
    contenedorMapa.appendChild(mapa);
    detalles.appendChild(contenedorMapa);
}
 const mostrarDetalles=async(id)=>{
    // Llamar a la API para obtener los detalles del producto
    const conexion = await fetch(`https://sheetdb.io/api/v1/701kawqlfhook/${id}`);
    // Obtener los detalles del producto
    const conexionConvertida = conexion.json();
   
    return(conexionConvertida)
}


insertarDetalles()
