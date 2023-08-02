const nota1 = document.getElementById ('primeiraNota')
const nota2 = document.getElementById ('segundaNota')
const nota3 = document.getElementById ('terceiraNota')
const result = document.getElementById ('result')

function mediaAproveitamento (){
    let nota01 = Number (nota1.value)  
    let nota02 = Number (nota2.value)
    let nota03 = Number (nota3.value)
    let media = (nota01 + nota02) 
    media = media * 2;
    media = media + (nota03 * 3)
    media = media / 7
    
    
    if (media >= 9 ){
        result.textContent = 'A'
        result.style.color = "blue"
    }else if(media >= 7.5 && media < 9 ){
        result.textContent ='B'
        result.style.color = "orange"
    }else if(media >= 6 && media < 7.5){
        result.textContent ='C'
        result.style.color = "red"
    }else if(media < 6){
        result.textContent = 'D'
        result.style.color = "black"
    }
    
}


