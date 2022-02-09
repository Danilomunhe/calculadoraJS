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
    if(imc <= 18.5){
        indice = 'você está abaixo de peso'
    }else if(imc < 25){
        indice = `seu peso está normal.`
    }else if(imc < 30){
        indice = 'você está com sobrepeso'
    }else if(imc < 35){
        indice = 'você está com obesidade I'
    }else if(imc < 40){
        indice = 'você está com obesidade II'
    }else{
        indice = 'você está com obesidade mórbita'
    }
    return indice
}
function mensagens(imc){
    let mensagem = document.createElement('p')
    let texto
    if(imc > 18.5 && imc < 25){
        texto = document.createTextNode("Parabéns!!!")
        mensagem.appendChild(texto)
        mensagem.classList.remove('vermelho')
        mensagem.classList.add('verde')
    }else if(imc > 40){
        texto = document.createTextNode("Cuidado!!")
        mensagem.appendChild(texto)
        mensagem.classList.remove('verde')
        mensagem.classList.add('vermelho')
    }else{
        texto = document.createTextNode("")
        mensagem.appendChild(texto)
        mensagem.classList.remove('verde')
        mensagem.classList.remove('vermelho')
    }
    return mensagem
}
function mostrarResultado(){
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('result')
    
 
    if(camposValidos()){
        const imc = calcularImc(altura, peso)
        const indice = classificarImc(imc)
        const alerta = mensagens(imc)
        resultado.textContent = `${nome}, seu imc é: ${imc.toFixed(2)} ${indice} `
        resultado.appendChild(alerta)
    }else{
        resultado.textContent = "Preencha todos os campos"
    }

}

let range = document.getElementById('peso'),
    value = document.getElementById('valorPeso');

let rangeAltura = document.getElementById('altura'), 
    valueAltura = document.getElementById('valorAltura');    

range.addEventListener('click', valorPesoRange )
rangeAltura.addEventListener('click', valorAlturaRange )

function valorPesoRange(){
    value.textContent = range.value;
}
function valorAlturaRange(){
   valueAltura.textContent = rangeAltura.value;
}

document.getElementById('calcular').addEventListener('click', mostrarResultado)
