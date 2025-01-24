alert("Olá!")

// acessando pelo Id - getElementById
let elemento = document.getElementById("meuDiv");

console.log(elemento.textContent);

// acessando pela classe - getElementByClassName

let elementos = document.getElementsByClassName("minhaClasse");
console.log(elementos[0].textContent);
console.log(elementos[1].textContent);

// acessando pela tag - querySelector
let objeto1 = document.querySelector("#meuDiv");

console.log(objeto1.textContent);

// acessando pela tag- querySelectorAll
let objetos = document.querySelectorAll("#meuDiv");
console.log(objetos[0].textContent);
console.log(objetos[1].textContent);