/**
 *  2C = Two of Clubs (Treboles)
 *  2D = Two of Diaminds (Treboles)
 *  2H = Two of Hearts (Treboles)
 *  2S = Two of Spades (Treboles)
 */

let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];
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
    
    


    //console.log( deck );
    deck = _.shuffle( deck );
    // console.log( deck );
    return deck;

}

crearDeck();

//esta funcion me da una carta

const pedirCarta = () => {

    if( deck.length === 0 ){
        throw ' No hay cartas en el deck ';
    }
    let cartaNueva = deck.pop();
    return cartaNueva;
}
// const carta = pedirCarta();


