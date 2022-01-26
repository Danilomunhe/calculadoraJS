'use strict'

function mostrarResultado(){
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')
    let indice = ''
    
    if(nome!=='' && altura !=='' && peso!==''){
        const calculoImc = peso / (altura * altura)
        
        if(calculoImc <= 18.5){
            indice = 'você está abaixo de peso'
        }else if(calculoImc < 25){
            indice = 'seu peso está normal'
        }else if(calculoImc < 30){
            indice = 'você está com sobrepeso'
        }else if(calculoImc < 35){
            indice = 'você está com obesidade I'
        }else if(calculoImc < 40){
            indice = 'você está com obesidade II'
        }else{
            indice = 'você está com obesidade mórbita'
        }
        resultado.textContent = `${nome}, seu imc é: ${calculoImc.toFixed(2)} ${indice}`
    }else{
        resultado.textContent = "Preencha todos os campos"
    }

}

document.getElementById('calcular').addEventListener('click', mostrarResultado)