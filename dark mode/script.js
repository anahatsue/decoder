const buttonCript = document.querySelector("#cript");
const buttonUncript = document.querySelector("#uncript");
const inputMessage = document.querySelector("#text");

const displayReset = document.querySelector("#output-box");
const displayDefault = document.querySelector("#output-default");
const displayCodedMessage = document.querySelector("#output-done");

const codedMessage = document.querySelector("#coded-message");
const buttonCodedMessage = document.querySelector("#button-coded-message");

const lightMode = document.querySelector("#light-mode");
const darkMode = document.querySelector("#dark-mode");

function criptKeys(text) {
    var message = "";

    for(let letter of text) {
        switch (letter) {
            case "a":
                message += "ai";
                break;
            case "e":
                message += "enter";
                break;
            case "i":
                message += "imes";
                break;
            case "o":
                message += "ober";
                break;
            case "u":
                message += "ufat";
                break;
            default: 
                message += letter;
        }
    }
    
    writeCode(message);
}

function uncriptKeys(text) {
    var message = text;

    message = message.replaceAll("ai", "a");
    message = message.replaceAll("enter", "e");
    message = message.replaceAll("imes", "i");
    message = message.replaceAll("ober", "o");
    message = message.replaceAll("ufat", "u");
    
    writeCode(message);
}

function writeCode (message) {
    clearDisplay();
    displayDefault.style.display = "none";
    displayReset.style.display = "flex";
    displayReset.style.alignItems = "flex-start";
    displayCodedMessage.style.display = "flex";

    codedMessage.innerHTML += `${message}`;
    buttonCodedMessage.style.display = "flex";
}

function copyText() {
    navigator.clipboard.writeText(codedMessage.innerText);
    alert("O texto foi copiado.");
} 

function clearDisplay() {
    codedMessage.innerHTML ="";
}

buttonCript.addEventListener("click", (event) => {
    event.preventDefault();
    //Fazer o método de mudar o display
    //Fazer o método de mudar letra por letra
    criptKeys(inputMessage.value);
})

buttonUncript.addEventListener("click", (event) => {
    event.preventDefault();
    //Fazer o método de mudar o display
    //Fazer o método de mudar letra por letra
    uncriptKeys(inputMessage.value);
})


