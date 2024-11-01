import { conexionAPI } from "./conexionAPI.js";
var posImagen=0
const arrayImagen=[]
const galeriaImagen = document.querySelector(".galeria-imagen");
const consultarImagenes=async ()=>{
    const videos = await conexionAPI.listarVideos();
    videos.forEach(element => {
        // const eleDiv = document.createElement("div")
        // eleDiv.innerHTML = `<img src="${element.img}" alt="${element.nombre}">`
        // eleDiv.classList.add("imagen");
        // galeriaImagen.appendChild(eleDiv)
        arrayImagen.push(element.img)

    });
   
        
}
const mostrarImagen=(pos)=>{
    console.log(arrayImagen[pos]) 
    const eleDiv = document.querySelector(".imagen")
        eleDiv.innerHTML = `<img src="${arrayImagen[pos]}" alt="${arrayImagen[pos]}">`
        eleDiv.classList.add("imagen");
        galeriaImagen.appendChild(eleDiv)
}

const imagenAtras=document.querySelector("[data-atras")
imagenAtras.addEventListener("click",()=>{
    (posImagen>0)? posImagen--: posImagen
    mostrarImagen(posImagen);
})
const imagenSiguiente=document.querySelector("[data-siguiente")
imagenSiguiente.addEventListener("click",()=>{
    (posImagen>arrayImagen.length())?posImagen++:posImagen;
    mostrarImagen(posImagen);
})

const seleImagen = document.querySelector("[data-galeria]")
seleImagen.addEventListener('click',event=>cargarImagen(event))

consultarImagenes();

const formulario = document.querySelector("[data-formulario]")



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