let buttonEncrypt = document.querySelector(".encrypt");
let buttonDecrypt = document.querySelector(".decrypt");
let buttonCopy = document.querySelector(".active");

let hiddenText = document.querySelector(".message");
let mySpan = document.querySelector(".typing");

let cleanText = document.querySelector(".message").value = "";
let cleanText2 = document.querySelector(".message2").value = "";
let hiddeButton = document.querySelector(".active").style.display = 'none';

buttonEncrypt.onclick = encrypt;
buttonDecrypt.onclick = decrypt;
buttonCopy.onclick = copy;

hiddenText.addEventListener("focus", () => {
    mySpan.style.display = "none";
  });

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

function copy(){
    const copy = document.querySelector(".message2");
    copy.select();
    document.execCommand("copy");

    const copyButton = document.querySelector(".active");
    copyButton.innerHTML = "¡Copiado!";
    let = document.querySelector(".active").style.display = 'inline';
    setTimeout(function() {
        let = document.querySelector(".active").style.display = 'none';

      }, 2000);

    cleanText = document.querySelector(".message").value = "";

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
    let tittle = document.querySelector(".text-look-message").style.display ='none';
    let tittle2 = document.querySelector(".text-look-message2").style.display ='none';
    let imgHidden = document.querySelector(".img-2").style.display ="none";
    let imgHidden2 = document.querySelector(".img-3").style.display ="none";

}






