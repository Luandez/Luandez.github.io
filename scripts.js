const myImage = document.querySelector("img");
const myButton = document.querySelector("button");
const myHeading = document.querySelector("h1");

// Função para pedir o nome do usuário e salvar
function setUserName() {
  const myName = prompt("Por favor digite o seu nome.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla é legal, ${myName}`;
  }
}

// Verifica se já tem nome salvo
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozila é legal, ${storedName}`;
}

// Botão troca o nome
myButton.onclick = () => {
  setUserName();
};

// Clicar na imagem muda o tamanho (poderia também trocar de imagem se quiser)
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");

  if (mySrc === "C:/Users/luan.souza/Documents/DevSites/images/bicho.jpg") {
    myImage.setAttribute("src", "C:/Users/luan.souza/Documents/DevSites/images/bicho.jpg");
    myImage.style.width = "400px";
    myImage.style.height = "auto";  
  } else {
    myImage.setAttribute("src", "C:/Users/luan.souza/Documents/DevSites/images/bicho.jpg");
    myImage.style.width = "300px";
    myImage.style.height = "auto";
  }
};