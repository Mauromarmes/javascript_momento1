let inputram; 
let inputmonitor;
let inputvideo; 
let inputprecio;
//arreglo imagenes
let imgs=["img/corei5.jpg","img/razen.jpg"];
let computador1=[];
let computador2=[];

let sectioncards = document.getElementById("section-cards");
let numero =0
let sectioncomparacion = document.getElementById("section-comparacion");
let video = false;
let especificaciones = "";
//obteniendo los imput
var datos =function(){
    inputdisco = document.getElementById('inputdisco');
    inputram = document.getElementById('inputram');
    inputmonitor = document.getElementById('inputmonitor');
    inputvideo = document.getElementById('inputvideo');
    inputprecio = document.getElementById('inputprecio');
}
//funcion del boton agregar
let boton =document.getElementById('boton')
let botonlimpiar =document.getElementById('limpiar')
let botoncomparar =document.getElementById('comparar');


//funcion boton limpiar
botonlimpiar.addEventListener("click",function(){
    sectioncards.innerHTML="";
    sectioncomparacion.innerHTML="";
    numero = 0;
    datos();
    computador1 = [];
    computador2 = [];
    inputdisco.value="";
    inputram.value="";
    inputmonitor.value="";
    inputvideo.value="";
    inputprecio.value="";
})
//funcion boton comparar
botoncomparar.addEventListener("click",function(){

    console.log("comparando");
    vistapccomporacion();
    comparacion();

})

//boton agregar o guardar
boton.addEventListener("click", function(){
    datos();
    if(numero ==0){
        computador1=[inputdisco.value,inputram.value,inputmonitor.value,inputvideo.value,inputprecio.value];
    }else if (numero==1){
        computador2=[inputdisco.value,inputram.value,inputmonitor.value,inputvideo.value,inputprecio.value];
    }
    if( numero<2){
        
        sectioncards.innerHTML += cardfunction(inputdisco.value,inputram.value,inputmonitor.value,inputvideo.value,inputprecio.value);
    }else{
        alert("No se puede agregar mas productos");

    }
    numero++;
    console.log(computador1);
    console.log(computador2);
})
//creando vista cvomporacion
function vistapccomporacion(){
    //card vista de primer computador
    let computadora1html = `<div class="card m-3" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Computadora.</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Disco duro : ${computador1[0]} </li>
      <li class="list-group-item">ram: ${computador1[1]}</li>
      <li class="list-group-item">monitor :${computador1[2]}</li>
      <li class="list-group-item">video: ${computador1[3]}</li>
      <li class="list-group-item">Precio: ${computador1[4]}</li>
    </ul>
    
    </div>`;

    let computadora2html = `<div class="card m-3" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Computadora.</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Disco duro : ${computador2[0]} </li>
      <li class="list-group-item">ram: ${computador2[1]}</li>
      <li class="list-group-item">monitor :${computador2[2]}</li>
      <li class="list-group-item">video: ${computador2[3]}</li>
      <li class="list-group-item">Precio: ${computador2[4]}</li>
    </ul>
    
    </div>`;
    //primer elemento
    let elemento=document.createElement("div");
    let img =document.createElement("img");
    let informacion = document.createElement("div");
    informacion.innerHTML =computadora1html;
    img.setAttribute("src",imgs[0]);
    img.style.width="100px";
    elemento.append(img);
    elemento.append(informacion);

    sectioncomparacion.innerHTML += elemento.innerHTML

    //segundo elemento
    let elemento2=document.createElement("div");
    let img2 =document.createElement("img");
    let informacion2 = document.createElement("div");
    informacion2.innerHTML =computadora2html;
    img2.setAttribute("src",imgs[1]);
    img2.style.width="100px";
    elemento2.append(img);
    elemento2.append(informacion2);

    sectioncomparacion.innerHTML += elemento2.innerHTML


}

// compracion de los datos de los datos card
function comparacion(){
    var puntos1 = 0;
    var puntos2 = 0;
    if (computador1[0]>computador2[0]){
        puntos1++;

    }else{
        puntos2++;
    }
    if (computador1[1]>computador2[1]){
        puntos1++;

    }else{
        puntos2++;
    }
    if (computador1[2]>computador2[2]){
        puntos1++;

    }else{
        puntos2++;
    }
    if (computador1[3]!=""){
        puntos1++;

    }
    if(computador2[3] != ""){
        puntos2++;
    }
    if (computador1[4]>computador2[4]){
        puntos1++;

    }else{
        puntos2++;
    }

    if (puntos1 > puntos2){
        especificaciones = "La pc1 tiene mejores especificaciones";
    
    }else{
        especificaciones = "La pc2 tiene mejores especificaciones";
    }
    alert(especificaciones);
   
}

//creando articulo de pc
function cardfunction (inputdisco,inputram,inputmonitor,inputvideo,inputprecio){
    cardhtml = `<div class="card m-3" style="width: 18rem;">
    <img src="img/razen.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Computadora.</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Disco duro : ${inputdisco} </li>
      <li class="list-group-item">ram: ${inputram}</li>
      <li class="list-group-item">monitor :${inputmonitor}</li>
      <li class="list-group-item">video: ${inputvideo}</li>
      <li class="list-group-item">Precio: ${inputprecio}</li>
    </ul>
    
    </div>`;
    return cardhtml;
}