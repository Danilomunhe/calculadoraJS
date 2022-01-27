'use strict'

function camposValidos(){
    // return nome !== '' && altura !== '' && peso !== ''
    //Outra forma de validação
  return document.getElementById('form').reportValidity()
}
function calcularImc(altura, peso){
    return peso / (altura * altura)
}
function classificarImc(imc){
    let indice = ''
    let texto = document.getElementById('texto')
    if(imc <= 18.5){
        indice = 'você está abaixo de peso'
        texto.textContent= ""
        texto.classList.remove('vermelho')
        texto.classList.remove('verde')
    }else if(imc < 25){
        indice = `seu peso está normal.`
        texto.textContent= "Parabéns"
        texto.classList.remove('vermelho')
        texto.classList.add('verde')
    }else if(imc < 30){
        indice = 'você está com sobrepeso'
        texto.textContent= ""
        texto.classList.remove('vermelho')
        texto.classList.remove('verde')
    }else if(imc < 35){
        indice = 'você está com obesidade I'
        texto.textContent= ""
        texto.classList.remove('vermelho')
        texto.classList.remove('verde')
    }else if(imc < 40){
        indice = 'você está com obesidade II'
        texto.textContent= ""
        texto.classList.remove('vermelho')
        texto.classList.remove('verde')
    }else{
        indice = 'você está com obesidade mórbita'
        texto.textContent= "Cuidado!!"
        texto.classList.remove('verde')
        texto.classList.add('vermelho')
    }
    return indice
}
function mostrarResultado(){
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')
    
 
    if(camposValidos()){
        const imc = calcularImc(altura, peso)
        const indice = classificarImc(imc)
        resultado.textContent = `${nome}, seu imc é: ${imc.toFixed(2)} ${indice}`
    }else{
        resultado.textContent = "Preencha todos os campos"
    }

}

document.getElementById('calcular').addEventListener('click', mostrarResultado)