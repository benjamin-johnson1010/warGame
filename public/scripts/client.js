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
    //calls shuffle to randomize the deck array
    deck = shuffle(deck);
    //finds middle of deck
    var split = Math.ceil(deck.length / 2);
    //split deck in two equal decks
deckOne = deck.splice(0,split);
deckTwo = deck;
console.log(deckOne, deckTwo);
  });
//start new round
  $('.flip').on('click', function(){
    console.log('in flip');
    var move;
    console.log(i);
    console.log(j);
    console.log(deckOne.length);
    console.log(deckTwo.length);
    //checks to make sure i is less the deckOne.length
    if(i + 2 >= deckOne.length)
    {
      console.log('reset deckOne');
      i = 0;
    }
    //checks to make sure j is less the deckOne.length
    if(j + 2 >= deckTwo.length)
    {
      console.log('reset deckTwo');
      j = 0;
    }
    //display both cards
    $('#cardOne').html(deckOne[i]);
    $('#cardTwo').html(deckTwo[j]);
    var k = 0;
    //multiple if statements to check which card from deck wins
    if(deckOne[i] > deckTwo[j])
    {
      move = deckTwo.shift(j);
      deckOne.splice(1,0,move);
      console.log("player One wins hand");
      i += 2;

    }
    else if(deckOne[i] < deckTwo[j]){
      move = deckOne.shift(i);
      deckTwo.splice(1,0,move);
      console.log("player Two wins hand");
      j += 2;
  }
    else{
      //check for war
      $('#cardOne').html(deckOne[i+k] + ' ' + deckOne[i+k+1] + ' ' + deckOne[i+k+2] +
      ' ' + deckOne[i+3]);
      $('#cardTwo').html(deckTwo[j+k] + ' ' + deckTwo[j+k+1] + ' ' + deckTwo[j+k+2] +
      ' ' + deckTwo[j+3]);
      if(deckOne[i+k+2] > deckTwo[j+K+2])
      {
        move = deckTwo.shift(j);
        deckOne.splice(1,0,move);
        move = deckTwo.shift(j+1);
        move = deckTwo.shift(j+2);
        deckOne.splice(1,0,move);
        move = deckTwo.shift(j+3);
        deckOne.splice(1,0,move);
        deckOne.splice(1,0,move);
        i += 2;

      }
      else if(deckOne[i+k+2] < deckTwo[j+k+2]){
        move = deckOne.shift(i);
        deckTwo.splice(1,0,move);
        move = deckOne.shift(i+1);
        deckTwo.splice(1,0,move);
        move = deckOne.shift(i+2);
        deckTwo.splice(1,0,move);
        move = deckOne.shift(i+3);
        deckTwo.splice(1,0,move);
        j += 2;
    }
    else{
      k+=3;

    }
    }
    console.log(deckOne);
    console.log(deckTwo);
    //calls check to see if there is a winner
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
  //checks to see if one of the deck arrays equal 0
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
