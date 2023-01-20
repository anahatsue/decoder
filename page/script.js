const buttonCript = document.querySelector("#cript");
const buttonUncript = document.querySelector("#uncript");
const inputMessage = document.querySelector("#text");

const displayReset = document.querySelector("#output-box");
const displayDefault = document.querySelector("#output-default");
const displayCodedMessage = document.querySelector("#output-done");

const codedMessage = document.querySelector("#coded-message");
const buttonCodedMessage = document.querySelector("#button-coded-message");

const switchMode = document.querySelector("#switch-mode");

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
    if(inputMessage.value != "") {
        criptKeys(inputMessage.value);
    } else {
        clearDisplay();
        displayDefault.style.display = "flex";
        displayReset.style.alignItems = "center";
        displayCodedMessage.style.display = "none";
    }
})

buttonUncript.addEventListener("click", (event) => {
    event.preventDefault();
    if(inputMessage.value != ""){
        uncriptKeys(inputMessage.value);
    } else {
        clearDisplay();
        displayDefault.style.display = "flex";
        displayReset.style.alignItems = "center";
        displayCodedMessage.style.display = "none";
    }
})


switchMode.addEventListener("click", (event) => {
    var attributeTheme = document.body.getAttribute("data-theme");
        if(attributeTheme == "light") {
            document.body.setAttribute("data-theme", "dark");
            switchMode.innerHTML = "";
            switchMode.innerHTML = "Tema Nuvem"
        } else if (attributeTheme == "dark") {
            document.body.setAttribute("data-theme", "light");
            switchMode.innerHTML = "";
            switchMode.innerHTML = "Tema Hacker"
        }
})

