let btnEncriptar = document.getElementById("botonEncriptador");
let btnDesencriptar = document.getElementById("botonDesencriptar");
let iconMuneco = document.getElementById("icon-muneco");      
let textH3 = document.getElementById("text-h3");
let textP = document.getElementById("text-p");
let area_text = document.getElementById("pregunta");

function encriptar(){
    
    var texodilba = area_text.value
    .replace(/e/gi, "enter");

    
    if(texodilba.length > 0)
    {
        alert(texodilba);
        textH3.display = "none"
        iconMuneco.src = "./assets/img/good.png" 
    }
    else
    {
        alert("Digitas porfavor algo para ser encriptado");
        textH3.display = "block"
        iconMuneco.src = "./assets/img/muneco.svg"
    }
    textH3.innerText=texodilba ;
}   



btnEncriptar.onclick = encriptar; 
    

