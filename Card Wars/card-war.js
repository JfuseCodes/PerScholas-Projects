/* 0: CONNECT ELEMENTS TO HTML  and VARIABLE DECLARATIONS*/
const message = document.querySelector(".message");
  message.style.color = 'white';

const button = document.querySelectorAll("button");
const gameplay = document.querySelector(".gameplay");
const userPlay = document.querySelector(".userPlay");
const response = document.querySelector(".dataResponse");


/* DECK OF CARDS CREATION */
let suit = ["spades", "hearts", "diams", "clubs"];
let cardValues = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

let deck = new Array(); // EMPTY ARRAY TO ADD OBJECTS of key value pairs (suit : cardValue)
let cardTotal = 0;
/* ITERATION TO create objects corresponding to the values and suits */
let getDeck = () => {
  for (let i = 0; i < suit.length; i++) {
    for (let j = 0; j < cardValues.length; j++) {
      cardTotal++;
      let card = {
        cardValue: cardValues[j],
        suit: suit[i],
        cardRank: j + 1,
      };
      deck.push(card);
    }
  }
  return deck;
};

/*EVENT LISTENER FOR ALL BUTTONSs*/
button.forEach(function (item) {
  item.addEventListener("click", playGame);
});

/* creates players to know how much cards to pass out*/
let players = [];
setupPlayers = (num) => {
  // players = [];deals = [];
  for (let i = 0; i < num; i++) {
    let div = document.createElement("div"); // create div elements for each player (WILL ALWAYS BE 2 or 4)

    div.setAttribute("id", `player ${i + 1}`); //set id attribute to each div element of player number (PLAYER 1,PLAYER 2)
    div.classList.add("player"); //add classes to the created div elements(classes will be styled with CSS)

    let div1 = document.createElement("div"); //Area for card and card INFO
    div1.textContent = `Player ${i + 1}`;

    players[i] = document.createElement("div"); // Gives ability to access across different functions
    players[i].textContent = "Card Stack"; //CARDS will be placed

    div.appendChild(div1); //
    div.appendChild(players[i]); //Appended to parent
    gameplay.appendChild(div); //append the created div to gameplay element in html

    deals.push([]); // Blank for player cards to be distributed once function for dealing cards is called

    //console.log(deals);console.log(div);
  }
};
/*
FUNCTION to START THE GAME:if the button clicked was 'START' than the game will START
*/
let round = 0;
let currentPlay = false;
function playGame(e){
  let temp = e.target.textContent;
  if (temp === "Start" || temp === "start") {
    message.style.color = 'black';
    btnRender();
    startGame();
  }

  //FOR QUICKER ROUNDS/ END GAME QUICKER: ALLOWS USER TO SELECT HOW MANY ROUNDS TO PLAY
  if (temp === "Next Round") {
    let tempReps = document.querySelector("input").value;
    response.innerHTML = "";
    for (let i = 0; i < tempReps; i++) {
      if (currentPlay) {
        message.innerHTML = `ROUND: ${i + 1}`;
        makeCards();
      }
    }
  }
}

//HIDE START BUTTON IF GAME HAS STARTED AND SHOW IF GAME HAS ENDED:
btnRender = () => {
  button[0].classList.toggle("hide");
  button[1].classList.toggle("hide");
};

/*SETUP FUNCTION TO BRING Multiple functions together  */
startGame = () => {
  currentPlay = true;
  gameplay.innerHTML ="";
  let numberPlayers = document.querySelector("input").value;                    //2 or 4 depending on what user inputs into the game - USED TO TAKE INTO CONSIDERATION ON HOW MUCH CARDS MUST BE DEALT OUT - accessed using value method on the DOM
  getDeck();                                                                    //calls function to create deck of cards
  setupPlayers(numberPlayers);                                                  // uses number of players inputed from line 44 as a parameter
  dealCards(0);                                                                 // function with parameter of 0 to deal cards to first player within ARRAy(PLAYER 1)
  makeCards();                                                                  //make the cards visible
  //console.log(deck);
  document.querySelector("input").value = "1";                                  //how many attacks go through each iteration 569
};

showCard = (element, card) => {
  //console.log(card);
  if (card !== undefined) {
    element.style.backgroundColor = "ghostwhite";

    let html1 = card.cardRank + "<br>&" + card.suit + ";";                      //&spades; &hearts; &diams; &clubs; will print out symbols
    let html2 = card.cardRank + "&" + card.suit + ";";
    let div = document.createElement("div");
    div.classList.add("card");                                                  //add the class to all cards

    if (card.suit === "hearts" || card.suit === "diams") {
      element.style.color = "#CD212A";
    }
    else {
      element.style.color = "#3078b4";
    }

    let span1 = document.createElement("span");
    span1.innerHTML = html2;
    div.appendChild(span1);

    let span2 = document.createElement("span");
    span2.innerHTML = html1;
    div.appendChild(span2);
    element.appendChild(div);

    //console.log(div);
  }
};

/*FUNCTION TO DECIDE WHO WINS A TIE*/
dealRound = (playerList, tempHolder) => {
  let currentWinner = {
    "high": null,
    "player": playerList[0],                                                      //null because value is unknown
  };

  let tieBreaker = [];                                                          //HOLDER for any tie cards/players
  for ( let i = 0; i < playerList.length; i++ ) {
    let tempPlayerIndex = playerList[i];
    if (deals[tempPlayerIndex].length > 0) {
      let card = deals[tempPlayerIndex].shift();

      if (currentWinner.high === card.cardValue) {
        if (tieBreaker.length === 0) {
          tieBreaker.push(currentWinner.player);                                //{player: currentWinner.player, card: currentWinner.card,});

          //console.log('This is a Tie. Now its time to break it!');
        }
        tieBreaker.push(tempPlayerIndex);
      }

      if (!currentWinner.high || currentWinner.high < card.cardValue) {
        tieBreaker = [];                                                        //reset array
        currentWinner.high = card.cardValue;                                    // current card value
        currentWinner.player = tempPlayerIndex;                                 // player who is current high, which is gotten through loop of x
        currentWinner.card = card;
      }
      tempHolder.push(card);
      showCard(players[tempPlayerIndex], card);
    }
  }

  if (tieBreaker.length > 0) {dealRound(tieBreaker,tempHolder);}
  else {cardUpdate(currentWinner.player, tempHolder);}
};

makeCards = () => {
  let tempHolder = [];                                                          //place card into a holder
  let playerList = [];                                                          //EMPTY ARRAY TO CREATE LIST OF EXISTING PLAYERS
  for (let i = 0; i < players.length; i++) {
    players[i].innerHTML = "";
    if (deals[i].length > 0) {
      playerList.push(i);
    }
  }
  if(playerList.length == 1){winGame();} //if only 1 player than auto WIN
  dealRound(playerList, tempHolder);                                            //function for iteration of rounds to determine tiebreaker
};


/* FUNCTION TO DECLARE WHEN A PLAYER HAS WON: OWNS ALL 52 CARDS */
winGame = () => {
  btnRender();
  currentPlay = false;
  for(let i=0; i<players.length;i++){
    players[i].innerHTML +=(deals[i].length > cardTotal) ? "<br>WINNER": "<br>LOSER";
  }
  message.innerHTML = 'SELECT # OF PLAYERS';
  document.querySelector('input').value = '2';
}


/*FUNCTION TO DECLARE WHAT PLAYER TAKES THE CARDS*/
cardUpdate = (winner, tempHolder) => {
  players[winner].style.backgroundColor = "#56C6A9";                            //green to represent the winner of the ROUND!
  tempHolder.sort(function(){return.5-Math.random();})                          //SORT array to randomize in order to avoid same cards being outputted
  for (let i = 0; i < players.length; i++) {
    let div = document.createElement("div");
    div.classList.add("data-stats");
    if(deals[i].length === cardTotal){
      div.innerHTML ="TOTAL:" + deals[i].length + ' cards';
      winGame();
    }
    else{
    let amount =
      deals[i].length < 1 ? "Lost" : "Card Amount:" + deals[i].length;
    div.innerHTML = amount;
    players[i].appendChild(div);
  }
}
  for (let entry of tempHolder) {
    deals[winner].push(entry);
  }
  response.innerHTML = `PLAYER ${winner + 1} has won this round and earned ${
    tempHolder.length
  } cards<br>`;
};

let deals = [];
/*FUNCTION to DEAL out the cards to the players*/
dealCards = (playerCard) => {
  playerCard =
    playerCard >= players.length
      ? 0 // CHECKING TO SEE IF VALUE IS GREATER THAN ARRAY OF PLAYER NUMBERS INPUT than reset by going to first player
      : playerCard;
  //console.log(playerCard);

  if (deck.length > 0) {
    // as long as it is greater than zero: CARDS will be dealt to players
    let shuffle = Math.floor(Math.random() * deck.length); //Randomize card selection
    let card = deck.splice(shuffle, 1)[0]; //takes out 1st item of the array from deck object

    deals[playerCard].push(card); // pushing single card into player array
    playerCard++;
    return dealCards(playerCard);
    //console.log(deals); //logging iteration of cards being dealt to players based on array
  } else {
    message.textContent = "ALL CARDS ARE DEALT"; // WILL DISPLAY this message after card length reaches zero
    return;
  }
};
