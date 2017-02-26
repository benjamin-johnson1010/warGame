console.log('sourced');
var deckOne;
var deckTwo;
var A = 14;
var K = 13;
var Q = 12;
var J = 11;
var i = 0;
var j = 0;
$(document).ready(function(){
  var deck = [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,
  9,9,9,9,10,10,10,10,J,J,J,J,Q,Q,Q,Q,K,K,K,K,A,A,A,A];
  console.log('in doc ready');
  //begin a new game of war
  $('#newGame').on('click',function(){
    console.log('in newGame');
    deck = shuffle(deck);
    var split = Math.ceil(deck.length / 2);
deckOne = deck.splice(0,split);
deckTwo = deck;
console.log(deckOne, deckTwo);
  });

  $('.flip').on('click', function(){
    console.log('in flip');
    console.log(i);
    console.log(j);
    console.log(deckOne.length);
    console.log(deckTwo.length);
    var move;
    $('#cardOne').html(deckOne[i]);
    $('#cardTwo').html(deckTwo[j]);
    if(deckOne[i] > deckTwo[j])
    {
      move = deckTwo.shift(j);
      deckOne.splice(1,0,move);
      if(i + 2 >= deckOne.length)
      {
        console.log('reset');
        i = 0;
      }
      else{
      i += 2;
    }
    }
    else if(deckOne[i] < deckTwo[j]){
      move = deckOne.shift(i);
      deckTwo.splice(1,0,move);
      if(j + 2 >= deckTwo.length)
      {
        console.log('reset');
        j = 0;
      }
      else{
      j += 2;
    }
  }
    else{
      j++;
      i++;
    }
    console.log(deckOne);
    console.log(deckTwo);
    checkWinner();
  });
});
function shuffle(deck){
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
