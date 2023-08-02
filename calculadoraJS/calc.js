const numberUm = document.getElementById("number1");

const numberDois = document.getElementById("number2");

const resultado = document.getElementById("resultado");

function calculo(operacao) {

  try{

  const finalResult = eval(
    "Number (numberUm.value)" + operacao + "Number (numberDois.value)"
  );

  if (isNaN(finalResult) || !isFinite(finalResult)) {
    alert("Algo errado aconteceu...");
    return;
  }
  resultado.textContent = finalResult;

  if(finalResult <= 0){
    resultado.style.color = "red"
  }else if(finalResult <= 50){
    resultado.style.color = "blue"
  }else if(finalResult >= 100){
    resultado.style.color = "green"
  }
/* 
Menor que 0 ==> cor vermelha
Maior que 50 ==> cor azul
Maior que 100 ==> cor verde
*/
  } catch(error){
     alert(error)
  }
  /*   if(operacao === "somar"){
        resultado.textContent = Number (numberUm.value)  + Number (numberDois.value)    
    }else if (operacao === "subtrair"){
        resultado.textContent = Number (numberUm.value) - Number (numberDois.value)
    }else if (operacao === "multiplicar"){
        resultado.textContent = Number (numberUm.value) * Number (numberDois.value)
    }else if (operacao === "dividir"){
        resultado.textContent = Number (numberUm.value) / Number (numberDois.value)
    }

    
    */
}
/* function subtrair(){
    
}
function dividir(){
    
}
function multiplicar(){
    
}
 */
