function alterarStatus(id) {
    //vamos recuperar o game que foi clicado
    let gameClicado = document.getElementById(`game-${id}`);

    //pegamos a imagem o botao do jogo clicado, recuperando os elementos

    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');


    //buscando dentro da imagem, se na sua lista de classes contem uma class especifica 
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
         botao.textContent = 'Devolver';
    }
}
