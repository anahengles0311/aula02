const numberUm = document.getElementById ("number1")

const numberDois = document.getElementById ("number2")

const resultado = document.getElementById("resultado")

function calculo(operacao){

    if(operacao === "somar"){
        resultado.textContent = Number (numberUm.value)  + Number (numberDois.value)    
    }else if (operacao === "subtrair"){
        resultado.textContent = Number (numberUm.value) - Number (numberDois.value)
    }else if (operacao === "multiplicar"){
        resultado.textContent = Number (numberUm.value) * Number (numberDois.value)
    }else if (operacao === "dividir"){
        resultado.textContent = Number (numberUm.value) / Number (numberDois.value)
    }

    
   
}
/* function subtrair(){
    
}
function dividir(){
    
}
function multiplicar(){
    
}
 */
