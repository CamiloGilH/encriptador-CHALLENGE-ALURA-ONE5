// !estas variables son para la funcion de encriptar y desencriptar 
let buttonEncrypt = document.querySelector(".encrypt");
let buttonDecrypt = document.querySelector(".decrypt");
let buttonCopy = document.querySelector(".active");
// !estas variables son para animacion
let hiddenText = document.querySelector(".message");
let mySpan = document.querySelector(".typing");
// !estas variables son para limpiar el texto al recargar pagina
let cleanText = document.querySelector(".message").value = "";
let cleanText2 = document.querySelector(".message2").value = "";
let hiddeButton = document.querySelector(".active").style.display = 'none';
//! eventos 
buttonEncrypt.onclick = encrypt;
buttonDecrypt.onclick = decrypt;
buttonCopy.onclick = copy;

hiddenText.addEventListener("focus", () => {
    mySpan.style.display = "none";
  });
// ? funcion de encriptar junto con desaparecer imagenes
function encrypt(){
    let inputText = document.querySelector(".message").value.toLowerCase();

    var outputText = inputText.replace(/e/gi, 'enter')
    .replace(/i/gi, 'imes')
    .replace(/a/gi, 'ai')
    .replace(/o/gi, 'ober')
    .replace(/u/gi, 'ufat');

    document.querySelector(".message2").value = outputText;
 
    let = document.querySelector(".active").style.display = 'inline';
    let tittle = document.querySelector(".text-look-message").style.display ='none';
    let tittle2 = document.querySelector(".text-look-message2").style.display ='none';
    let imgHidden = document.querySelector(".img-2").style.display ="none";
    let imgHidden2 = document.querySelector(".img-3").style.display ="none";

}
//! funcion de copiar mostrando mensajes distintos
function copy(isEncrypting) {
  const copy = document.querySelector(".message2");
  copy.select();
  document.execCommand("copy");

  const copyButton = document.querySelector(".active");
  const originalText = "Copiar";
  const successText = isEncrypting ? "Texto encriptado copiado" : "Texto desencriptado copiado";
  const originalTimeoutText = "Copiar";
  const successTimeoutText = isEncrypting ? "¡Texto desencriptado copiado!" : "¡Texto encriptado copiado!";

  copyButton.textContent = successText;
  copyButton.style.display = 'inline';
  setTimeout(function() {
    copyButton.textContent = originalTimeoutText;
    copyButton.style.display = 'none';
  }, 2000);  

  copyButton.addEventListener("click", function() {
    copyButton.textContent = successTimeoutText;
    copyButton.style.display = 'inline';
    setTimeout(function() {
      copyButton.textContent = originalText;
      copyButton.style.display = 'none';
    }, 2000);  
  });

  document.querySelector(".message").value = "";
}

function decrypt(){
    let inputText = document.querySelector(".message").value;

    let outputText = inputText.replace(/enter/gi, 'e')
    .replace(/imes/gi, 'i')
    .replace(/ai/gi, 'a')
    .replace(/ober/gi, 'o')
    .replace(/ufat/gi, 'u');

    document.querySelector(".message2").value = outputText;
    cleanText2 = document.querySelector(".message").value = "";
    let = document.querySelector(".active").style.display = 'inline';
    let tittle = document.querySelector(".text-look-message").style.display ='none';
    let tittle2 = document.querySelector(".text-look-message2").style.display ='none';
    let imgHidden = document.querySelector(".img-2").style.display ="none";
    let imgHidden2 = document.querySelector(".img-3").style.display ="none";

}






