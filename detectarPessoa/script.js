function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var formResultado = document.querySelector('div#resultado')

    if (formAno.value.length == 0 || Number(formAno.value) > anoAtual){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var formSex = document.getElementsByName('radsex')
        var idade = anoAtual - Number(formAno.value)
        var genero = ''
        var tipo = ''
        var imgStatic = document.createElement('img')
        imgStatic.setAttribute('id', 'foto')

        if(formSex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                // Criança
                tipo = 'Criança'
                imgStatic.setAttribute('src', './img/foto-crianca-homem.png')
            }else if (idade < 21){
                // Jovem
                tipo = 'Jovem'
                imgStatic.setAttribute('src', './img/foto-jovem-homem.png')
            }else if (idade < 50){
                // Adulto
                tipo = 'Adulto'
                imgStatic.setAttribute('src', './img/foto-adulto-homem.png')
            }else{
                // Idoso
                tipo = 'Idoso'
                imgStatic.setAttribute('src', './img/foto-idoso-homem.png')
            }
        }else if (formSex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                // Criança
                tipo = 'Criança'
                imgStatic.setAttribute('src', './img/foto-crianca-mulher.png')
            }else if (idade < 21){
                // Jovem
                tipo = 'Jovem'
                imgStatic.setAttribute('src', './img/foto-jovem-mulher.png')
            }else if (idade < 50){
                // Adulto
                tipo = 'Adulto'
                imgStatic.setAttribute('src', './img/foto-adulto-mulher.png')
            }else{
                // Idoso
                tipo = 'Idoso'
                imgStatic.setAttribute('src', './img/foto-idoso-mulher.png')
            }
        }
    }
    formResultado.style.textAlign = 'center'
    formResultado.innerHTML = `Detectamos ${genero} ${tipo} com ${idade} anos.`
    formResultado.appendChild(imgStatic)

}
