function contar(){
    let inicio = document.getElementById('numberInicio')
    let fim = document.getElementById('numberFim')
    let passo = document.getElementById('numberPasso')
    let res = document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados, tente novamente!')
    }else{
        res.innerHTML = 'Contando: <br> '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p == 0){
            window.alert('Passo inválido, considerando parra 1')
            p = 1
        }

        if(i < f){
            // Contagem crescente
            for(let c = i; c <= f; c+= p){
                res.innerHTML += ` ${c} \u{1F604}`
            }
        }else{
            // Contagem regressiva
            for(let c =i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F604}`
            }
        }        
        res.innerHTML += `\u{1f3c1}`
        
    }

}