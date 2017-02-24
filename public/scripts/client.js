console.log('sourced');
var deckOne;
var deckTwo;
$(document).ready(function(){
  var deck = [1,2,3,4,5,6];
  console.log('in doc ready');
  //begin a new game of war
  $('#newGame').on('click',function(){
    console.log('in newGame');
    deck = shuffle(deck);
    console.log(deck);
    var split = Math.ceil(deck.length / 2);
deckOne = deck.splice(0,split);
deckTwo = deck;
console.log(deckOne, deckTwo);
  });
  $('.flip').on('click', function(){
    console.log('in flip');
    console.log(deckOne[0]);
    var move;
    if(deckOne[0] > deckTwo[0])
    {
      move = deckOne.shift();
      deckOne.push(move);
      move = deckTwo.shift();
      deckOne.push(move);
    }
    else{
      move = deckTwo.shift();
      deckTwo.push(move);
      move = deckOne.shift();
      deckTwo.push(move);
    }
    console.log(deckOne);
    console.log(deckTwo);
    checkWinner();
  });
});
function shuffle(deck){
  console.log(deck);
    var i = 0,
       j = 0,
       temp = null;

    for (i = deck.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = deck[i];
      deck[i] = deck[j];
      deck[j] = temp;
    }
    return deck;
  }
  function checkWinner(){
    if(deckOne <= 0){
      console.log('player two wins');
    }
    else if(deckTwo <=0){
      console.log('player one wins');
    }
      else{
        return false;
      }

    }
