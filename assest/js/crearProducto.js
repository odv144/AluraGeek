import { conexionAPI } from "./conexionAPI.js";
const formulario = document.querySelector("[data-formulario]")

const seleImagen = document.querySelector("[data-galeria]")
seleImagen.addEventListener('click',event=>cargarImagen(event))

const cargarImagen = (event)=>{
    
    const sele=document.querySelector("[data-imagen]");  
    sele.value= event.target.src
}

async function crearProducto(evento){
    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;
    await conexionAPI.crearVideo(nombre,precio,imagen);
    window.location.reload();
}

formulario.addEventListener('submit',evento=>crearProducto(evento));