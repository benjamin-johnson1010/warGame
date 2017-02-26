console.log('sourced');
var deckOne;
var deckTwo;
var A = 14;
var K = 13;
var Q = 12;
var J = 11;
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

    var move;
    $('#cardOne').html(deckOne[0]);
    $('#cardTwo').html(deckTwo[0]);
    if(deckOne[0] > deckTwo[0])
    {
      move = deckOne.shift();
      deckOne.push(move);
      move = deckTwo.shift();
      deckOne.push(move);
    }
    else if(deckOne[0] < deckTwo[0]){
      move = deckTwo.shift();
      deckTwo.push(move);
      move = deckOne.shift();
      deckTwo.push(move);
    }
    else{
      $('#cardOne').html(deckOne[0] + ' ' + deckOne[1] + ' ' + deckOne[2] + ' ' + deckOne[3]);
      $('#cardTwo').html(deckTwo[0] + ' ' + deckTwo[1] + ' ' + deckTwo[2] + ' ' + deckTwo[3]);
      if(deckOne[3] > deckTwo[3])
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
