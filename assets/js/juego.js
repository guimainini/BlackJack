/**
 *  2C = Two of Clubs (Treboles)
 *  2D = Two of Diaminds (Treboles)
 *  2H = Two of Hearts (Treboles)
 *  2S = Two of Spades (Treboles)
 */

let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0, puntosComputadora = 0;

// Referencias del HTML

const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const puntosHTML = document.querySelectorAll('small');

const divCartasJugados     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');


//esta funcion crea una nueva baraja
const crearDeck = () => {

    for( let i = 2; i <= 10; i++){
        for( let tipo of tipos ){
            deck.push( i + tipo ); 
        }
    }

    for( let tipo of tipos ) {
        for ( let esp of especiales ){
            deck.push ( esp + tipo);
        }
    }
    deck = _.shuffle( deck );
    return deck;
}

crearDeck();

//esta funcion me da una carta

const pedirCarta = () => {
    if( deck.length === 0 ) {
        throw ' No hay cartas en el deck ';
    }
    let cartaNueva = deck.pop();
    return cartaNueva;
}
// const carta = pedirCarta();

const valorCarta = ( carta ) => {
    
    const valor = carta.substring(0, carta.length - 1);
    
    return ( isNaN ( valor ) ) ?
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;

    // if( isNaN( valor ) ){
    //     //true no es un numeroes un numero
    //     puntos = ( valor === 'A' ) ? 11 : 10

    // }else{
    //     //false es un numero
    //     puntos = valor * 1 ;
    // }
    //console.log(puntos);
}

const valor = valorCarta( pedirCarta() );
//console.log({ valor });

//logica de la IA
const turnoCompu = ( puntosMinimos ) => {

    do{
        const carta = pedirCarta();

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        // <img  class="carta" src="assets/cartas/10C.png" alt="">
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append ( imgCarta );

        if( puntosMinimos > 21 ){
            break;
        }



    }while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21)  );



}




//Eventos
btnPedir.addEventListener('click', () => {
    
    const carta = pedirCarta();

    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;
    // <img  class="carta" src="assets/cartas/10C.png" alt="">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasJugados.append ( imgCarta );

    if( puntosJugador > 21){
        console.warn('You Lose');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoCompu(puntosJugador);
    } else if ( puntosJugador === 21 ){
        console.warn('21, genial!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoCompu(puntosJugador);
    }
});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoCompu(puntosJugador);

})


