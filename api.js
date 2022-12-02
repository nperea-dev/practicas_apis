const URL = "https://api.thecatapi.com/v1/images/search?limit=10&api_key=live_l3ZFPlQ9I9UMRhrcj6ZsOE76FQDd4F1Vpv3WRu8FQ9wRIMfWANatK6O3EqRCXTd5";


function nuevoGato(){

    fetch(URL)
    .then(res=> res.json()) //json viewer extension
    .then(data=>{
    const img1=document.getElementById("izq"); //tomamos la etiqueta img
    const img2=document.getElementById("der");

       img1.src= data[0].url; //asignamos el scr  a la etiqueta
       img2.src= data[1].url;


       console.log(data);
    })      

}

nuevoGato();
