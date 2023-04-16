let btnEncriptar = document.getElementById("botonEncriptador");
let btnDesencriptar = document.getElementById("botonDesencriptar");
let btnCopiar = document.getElementById("botoCopiar")
let iconMuneco = document.getElementById("icon-muneco");      
let textH3 = document.getElementById("text-h3");
let textP = document.getElementById("text-p");
let area_text = document.getElementById("pregunta");

function encriptar(){
    
    var texodilba = area_text.value
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ia")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat")

    
    if(texodilba.length > 0)
    {
        alert(texodilba);
        textH3.display = "none"
        iconMuneco.src = "./assets/img/good.png" 
    }
    else
    {
        alert("Digitas porfavor algo para ser encriptado");
        textH3.display = "flex"
        iconMuneco.src = "./assets/img/muneco.svg"
    }
    textH3.innerText=texodilba ;
}   



function desencriptar(){
    
    var texodilba = area_text.value
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ia/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u")

    
    if(texodilba.length > 0)
    {
        alert(texodilba);
        textH3.display = "none"
        iconMuneco.src = "./assets/img/good.png" 
    }
    else
    {
        alert("Digitas porfavor algo para ser encriptado");
        textH3.display = "flex"
        iconMuneco.src = "./assets/img/muneco.svg"
    }
    textH3.innerText=texodilba ;
}   



function copiar(){
    alert("copiado");
    navigator.clipboard.writeText(textH3.textContent)
    btnCopiar.textContent = "ya copiado!"

}

btnEncriptar.onclick = encriptar; 
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;
