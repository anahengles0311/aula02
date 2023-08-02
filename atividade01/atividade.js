const morango = document.getElementById("morango");

const maca = document.getElementById("maca");

const carrinho = document.getElementById("carrinho");

let precoMaca;

let precoMorango;

let precoTotal;

let pesoTotal;

function compra() {
  if (Number (morango.value) > 5) {
    precoMorango = Number (morango.value) * 2.2;
  } else {
    precoMorango = Number (morango.value) * 2.5;
  }

  if (Number (maca.value) > 5) {
    precoMaca = Number (maca.value) * 1.5;
  } else {
    precoMaca = Number (maca.value) * 1.8;
  }
  
  precoTotal = precoMaca + precoMorango;
  pesoTotal = Number (maca.value) + Number (morango.value);
  
  if (precoTotal > 25){
    precoTotal = precoTotal - (precoTotal * 0.1)
  }

  carrinho.textContent = precoTotal;


  //salvar o valor da fruta 1 = 2.80
  //digitou 10kg
  //resultado

  
  
}
