import input from 'readline-sync';
import {validaAltura, validaPeso, validaResposta} from './validacao.js';
import {calculaIMC, retornaStatusIMC} from './calculo.js';

function IMC (){
    let peso = input.question ('Digite seu peso (exemplo: 94.5): ');
    let altura = input.question ('Digite sua altura (exemplo: 1.83): ');

    let verificaPesoValido = validaPeso(peso);
    let verificaAlturaValida = validaAltura(altura);


    if (verificaPesoValido && verificaAlturaValida){
        let resultado = calculaIMC(peso, altura);
        let statusIMC = retornaStatusIMC(resultado);

        console.log("\nSeu IMC: "+resultado+" e você está "+statusIMC);
    }
    else{
        console.log("\nPeso e altura devem ser maiores que zero");
    }
}

let calcularIMC = true;

while (calcularIMC === true){
    console.log("Você Deseja calcular seu IMC ?");
    console.log(`\nDigite:\n1 - Calcular IMC\n2 - Não `);

    let resposta = input.question("\nDigite sua resposta: ");
    if(validaResposta(resposta)){
        if (resposta == 1){
            IMC();
        }else{
            calcularIMC = false;
        }
    }else{
        console.log("\n***Digite uma resposta válida por favor!***\n".toUpperCase());
        continue;
    }
}
console.log("\nMuito obrigado por usar nossa calculadora de IMC!")