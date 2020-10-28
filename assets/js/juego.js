/**
 *  2C = Two of Clubs (Treboles)
 *  2D = Two of Diaminds (Treboles)
 *  2H = Two of Hearts (Treboles)
 *  2S = Two of Spades (Treboles)
 */

let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

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
    
    


    console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;

}

crearDeck();

