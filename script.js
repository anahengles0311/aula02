// var nome = "Ana";
// let idade = "23";
// const nascimento = "1998";

// if (idade === nascimento){

//     console.log("Igual")

// }else{
//     console.log("Diferente")
// }
// //Array 
// /* 
// Acessamos uma arraya fazendo referência ao index
// */

// let lista = [1,2,3,4,5,6]

// for (let index = 0; index < lista.length; index++) {
//     const element = lista[index];
//     console.log (element)
// }
// /* 
// && E
// || OU
// ! NEGAÇÃO
//  */

titulo.textContent = "Senai Cotia 2023" 

const tituloInput = document.getElementById("titulo")

const nomeInput = document.getElementById("nome")

const telefoneInput = document.getElementById("telefone")

const endereçoInput = document.getElementById("endereço")

const resultado = document.getElementById("resultado")

const resultado2 = document.getElementById("resultado2")

const resultado3 = document.getElementById("resultado3")




function salvar() {
    resultado.textContent = nomeInput.value
    resultado2.textContent = endereçoInput.value
    resultado3.textContent = telefoneInput.value
    
}