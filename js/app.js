//  Criar uma function alterarStatus (pois é o que está no Html para interação do botão) para começar 
//a interagir com o botão.
//  Recebe um parametro com o ID do jogo, pois cada jogo possui um diferente
//  Recuperar o elemento pelo id atraves da criação da variavel
//  Concatena com o id com qual jogo foi clicado
//  Recuperar o onclik e o div. que faz o jogo ficar opaco
//  REcuperar e guardar em variavel e seleccionar o qquery select para recuperar a imagem do html. Quando
//for colocar classe tem que colocar ponto. 
//  Recuperar o nome do jogo
//  Uso de condicionais 
//  Condicionais da imagem


let Alugados = 0;

function contarJogosAlugados() {
    console.log(`Total de jogos alugados: ${Alugados}`);
}

function alterarStatus (id) {
    let apertarBotao = document.getElementById (`game-${id}`);
    let imagem = apertarBotao.querySelector('.dashboard__item__img');
    let botao = apertarBotao.querySelector('.dashboard__item__button');
    let nomeJogo = apertarBotao.querySelector('.dashboard__item__name');
      
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return')
        botao.textContent = 'Alugar';
        Alugados--;
        
        
            
    } else {
        imagem.classList.add('dashboard__item__img--rented')
        botao.classList.add('dashboard__item__button--return')
        botao.textContent = 'Devolver';
        Alugados++;
    }

    contarJogosAlugados();

    
}

// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    Alugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarJogosAlugados();
});