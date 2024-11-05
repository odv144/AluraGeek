import { conexionAPI } from "./conexionAPI.js";
let posImagen=0
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
function mostrarImagen(pos){
      const eleDiv = document.querySelector('[data-galeria]');
        eleDiv.src=arrayImagen[pos]
        
}

const imagenAtras=document.querySelector("[data-atras")
imagenAtras.addEventListener("click",()=>{
    const galeria=document.querySelector('.galeria-imagen');
    let posImagen = parseInt(galeria.getAttribute('data-cont'))
    if(posImagen<arrayImagen.length-1){
        posImagen++;
        galeria.setAttribute('data-cont',posImagen);
    }
    
    mostrarImagen(posImagen);

   
})
const imagenSiguiente=document.querySelector("[data-siguiente")
imagenSiguiente.addEventListener("click",()=>{
    const galeria=document.querySelector('.galeria-imagen');
    let posImagen = parseInt(galeria.getAttribute('data-cont'))
    if(posImagen>0){
        posImagen--;
        galeria.setAttribute('data-cont',posImagen);
    }
    mostrarImagen(posImagen);
})

const seleImagen = document.querySelector("[data-galeria]")
seleImagen.addEventListener('click',event=>cargarImagen(event))

consultarImagenes();

const formulario = document.querySelector("[data-formulario]")



const cargarImagen = (event)=>{
    const sele=document.querySelector("[data-imagen]");  
    console.log(event.target.src)
    sele.value= event.target.src
}

async function crearProducto(evento){
    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;
    if(arrayImagen.includes(imagen)){
        console.log(imagen)
        await conexionAPI.crearVideo(nombre,precio,imagen);
        window.location.reload();
    }else{
       alert("Esta intentando agregar imagen invalida");
      
    }
}

formulario.addEventListener('submit',evento=>crearProducto(evento));