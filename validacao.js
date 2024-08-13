function validaPeso (peso){
    let pesoValido = false;

    if (peso > 0){
        pesoValido = true;
    }
    
    return pesoValido;
}
function validaAltura (altura){
    let alturaValida = false;
    if (altura>0){
        alturaValida = true;
    }

    return alturaValida;
}

function validaResposta (resposta){
    let validacao = true;

    if (resposta != 1 && resposta != 2){
        validacao = false;
    }
    return validacao
}

export {validaPeso,validaAltura,validaResposta};