let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = [] // criando vetor

// Validar se o número está entre 1 e 100
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

// Validar se o numero já está cadastrado na lista ou não
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true // lista com chave 'n' cadastrada
    }else{
        return false // lista com chave 'n' não encontrada
    }
}

//Validar se o número está entre 1-100 e também não está na lista
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value)) // Adiciona o numero no vetor
        let item = document.createElement('option') // cria o elemento para vizualização
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        
    }else{
        alert('Valor inválido ou já encontrado na lista!')
    }
    // Esvaziar conteúdo do 'num' e dar foco nele.
    num.value = ''
    num.focus()

}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores para finalizar!')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        // Laço de percurso
        for(let pos in valores){
            soma += valores[pos] //Soma dos numeros no vetor

            if (valores[pos] > maior)
                maior = valores[pos] // maior numero

            if (valores[pos] < menor)
                menor = valores[pos] // menor numero
        }

        media = soma/total

        res.innerHTML = ''
        res.innerHTML += `<p>Temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>Maior número foi: ${maior}</p>`
        res.innerHTML += `<p>Menor número foi: ${menor}</p>`
        res.innerHTML += `<p>A somatória foi: ${soma}<p/>`
        res.innerHTML += `<p> Média dos números: ${media}</p>`

    }
}
