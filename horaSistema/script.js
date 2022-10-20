function carregar() {
    var msg = document.getElementById('mensagem')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora > 5 && hora < 12){
        //BOM DIA
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
    }else if(hora > 12 && hora <=18){
        //BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
    }else{
        //BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = '#515158'

    }
        
}
