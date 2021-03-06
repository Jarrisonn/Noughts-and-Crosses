const container = document.querySelector(".container");


const board = (() => {
  let boardArray = ["", "", "", "", "", "", "", "", ""];

  return { boardArray };
})();

const player = (name, sign, myTurn, hasWon) => {
  this.name = name;
  this.sign = sign;
  this.myTurn = myTurn;
  this.hasWon = hasWon;

  return { name, sign, myTurn, hasWon };
};

let playerOne = player("Player one", "X", true, false);
let playerTwo = player("Player two", "O", false, false);

const displayController = (() => {
  board.boardArray.forEach((sq, i) => {
    const button = document.createElement("button");
    button.classList.add("btn");
    let btnListen = button.addEventListener(
      "click",
      () => {
        if (playerOne.myTurn === true && playerTwo.myTurn === false) {
          button.disabled = true
          button.textContent = playerOne.sign;
          playerOne.myTurn = !playerOne.myTurn;
          playerTwo.myTurn = !playerTwo.myTurn;
          board.boardArray[i] = button.textContent;
          button.classList.add("clicked");
          console.log(board.boardArray);
          console.log("P1 has just played");
          playerOneWinCheck();
        } else if (playerTwo.myTurn === true && playerOne.myTurn === false) {
          button.disabled = true
          button.textContent = playerTwo.sign;
          playerTwo.myTurn = !playerTwo.myTurn;
          playerOne.myTurn = !playerOne.myTurn;
          board.boardArray[i] = button.textContent;
          button.classList.add("clicked");
          console.log(board.boardArray);
          console.log("P2 has just played");
          playerTwoWinCheck();
        }
      }
    );

    

    const playerOneWinCheck = () => {
      //name board pieces
      let topLeft = board.boardArray[0];
      let topMid = board.boardArray[1];
      let topRight = board.boardArray[2];
      let midLeft = board.boardArray[3];
      let midMid = board.boardArray[4];
      let midRight = board.boardArray[5];
      let botLeft = board.boardArray[6];
      let botMid = board.boardArray[7];
      let botRight = board.boardArray[8];
      //set win conditions
      if (
        topLeft == `${playerOne.sign}` &&
        topMid == `${playerOne.sign}` &&
        topRight == `${playerOne.sign}`
      ) {
        playerOne.hasWon = true;
        displayWinner();
        console.log("player 1 wins");
      } else if (
        midLeft == `${playerOne.sign}` &&
        midMid == `${playerOne.sign}` &&
        midRight == `${playerOne.sign}`
      ) {
        playerOne.hasWon = true;
        displayWinner();
        console.log("player 1 wins");
      } else if (
        botLeft == `${playerOne.sign}` &&
        botMid == `${playerOne.sign}` &&
        botRight == `${playerOne.sign}`
      ) {
        playerOne.hasWon = true;
        displayWinner();
        console.log("player 1 wins");
      } else if (
        topLeft == `${playerOne.sign}` &&
        midLeft == `${playerOne.sign}` &&
        botLeft == `${playerOne.sign}`
      ) {
        playerOne.hasWon = true;
        displayWinner();
        console.log("player 1 wins");
      } else if (
        topMid == `${playerOne.sign}` &&
        midMid == `${playerOne.sign}` &&
        botMid == `${playerOne.sign}`
      ) {
        playerOne.hasWon = true;
        displayWinner();
        console.log("player 1 wins");
      } else if (
        topRight == `${playerOne.sign}` &&
        midRight == `${playerOne.sign}` &&
        botRight == `${playerOne.sign}`
      ) {
        playerOne.hasWon = true;
        displayWinner();
        console.log("player 1 wins");
      } else if (
        topLeft == `${playerOne.sign}` &&
        midMid == `${playerOne.sign}` &&
        botRight == `${playerOne.sign}`
      ) {
        playerOne.hasWon = true;
        displayWinner();
        console.log("player 1 wins");
      } else if (
        topRight == `${playerOne.sign}` &&
        midMid == `${playerOne.sign}` &&
        botLeft == `${playerOne.sign}`
      ) {
        playerOne.hasWon = true;
        displayWinner();
        console.log("player 1 wins");
      }
      if(topLeft && topMid && topRight && midLeft && midMid && midRight && botLeft && botMid && botRight && playerOne.hasWon === false && playerTwo.hasWon ===false){
        displayTie();
      }
    };

    const playerTwoWinCheck = () => {
      //name board pieces
      let topLeft = board.boardArray[0];
      let topMid = board.boardArray[1];
      let topRight = board.boardArray[2];
      let midLeft = board.boardArray[3];
      let midMid = board.boardArray[4];
      let midRight = board.boardArray[5];
      let botLeft = board.boardArray[6];
      let botMid = board.boardArray[7];
      let botRight = board.boardArray[8];
      //set win conditions
      if (
        topLeft == `${playerTwo.sign}` &&
        topMid == `${playerTwo.sign}` &&
        topRight == `${playerTwo.sign}`
      ) {
        playerTwo.hasWon = true;
        displayWinner();
        console.log("player 2 wins");
      } else if (
        midLeft == `${playerTwo.sign}` &&
        midMid == `${playerTwo.sign}` &&
        midRight == `${playerTwo.sign}`
      ) {
        playerTwo.hasWon = true;
        displayWinner(); 
        console.log("player 2 wins");
      } else if (
        botLeft == `${playerTwo.sign}` &&
        botMid == `${playerTwo.sign}` &&
        botRight == `${playerTwo.sign}`
      ) {
        playerTwo.hasWon = true;
        displayWinner();
        console.log("player 2 wins");
      } else if (
        topLeft == `${playerTwo.sign}` &&
        midLeft == `${playerTwo.sign}` &&
        botLeft == `${playerTwo.sign}`
      ) {
        playerTwo.hasWon = true;
        displayWinner();
        console.log("player 2 wins");
      } else if (
        topMid == `${playerTwo.sign}` &&
        midMid == `${playerTwo.sign}` &&
        botMid == `${playerTwo.sign}`
      ) {
        playerTwo.hasWon = true;
        displayWinner();
        console.log("player 2 wins");
      } else if (
        topRight == `${playerTwo.sign}` &&
        midRight == `${playerTwo.sign}` &&
        botRight == `${playerTwo.sign}`
      ) {
        playerTwo.hasWon = true;
        displayWinner();
        console.log("player 2 wins");
      } else if (
        topLeft == `${playerTwo.sign}` &&
        midMid == `${playerTwo.sign}` &&
        botRight == `${playerTwo.sign}`
      ) {
        playerTwo.hasWon = true;
        displayWinner();
        console.log("player 2 wins");
      } else if (
        topRight == `${playerTwo.sign}` &&
        midMid == `${playerTwo.sign}` &&
        botLeft == `${playerTwo.sign}`
      ) {
        playerTwo.hasWon = true;
        displayWinner();
        console.log("player 2 wins");
      }
      if(topLeft && topMid && topRight && midLeft && midMid && midRight && botLeft && botMid && botRight && playerOne.hasWon === false && playerTwo.hasWon ===false){
        displayTie();
      }
    };

    displayTie = () => {
      container.classList.add("hidden");
      container.classList.remove("container");
      let resultDiv = document.createElement("div");
      let resultEl = document.createElement("h2");
      let newGameBtn = document.createElement("button");
      resultDiv.classList.add("result");
      newGameBtn.classList.add("restartgame");
      newGameBtn.innerText = "Restart Game";
      resultEl.innerText = "Tie Game!"
      resultDiv.appendChild(resultEl);
      resultDiv.appendChild(newGameBtn);
      document.body.appendChild(resultDiv);
      newGameBtn.addEventListener("click", () => {
        restartGame();
        resultDiv.innerHTML = "";

      });
    }

    displayWinner = () => {
      container.classList.add("hidden");
      container.classList.remove("container");
      let resultDiv = document.createElement("div");
      let resultEl = document.createElement("h2");
      let newGameBtn = document.createElement("button");
      resultDiv.classList.add("result");
      newGameBtn.classList.add("restartgame");
      newGameBtn.innerText = "Restart Game";
      console.log(playerOne.hasWon);
      if(playerOne.hasWon === true){
        resultEl.innerText = `${playerOne.name} has won the game!`;
      }else if(playerTwo.hasWon === true){
        resultEl.innerText = `${playerTwo.name} has won the game!`;
      }
      
      resultDiv.appendChild(resultEl);
      resultDiv.appendChild(newGameBtn);
      document.body.appendChild(resultDiv);
      newGameBtn.addEventListener("click", () => {
        restartGame();
        resultDiv.innerHTML = "";

      });
    };

    restartGame = () => {
      playerOne.hasWon = false;
      playerTwo.hasWon = false;
      playerOne.myTurn = true;
      playerTwo.myTurn = false;
      container.classList.remove("hidden");
      container.classList.add("container");
      let childrenArray = [...container.children];
      console.log(childrenArray);
      childrenArray.forEach((btn) => {
        btn.innerText = "";
        btn.disabled = false
      });
      console.log(board.boardArray);
      board.boardArray = ["", "", "", "", "", "", "", "", ""];
      console.log(board.boardArray);
      
     
    };

    

    container.appendChild(button);
  });

  chooseName = () => {
    container.classList.remove("container");
    container.classList.add("hidden")
    const form = document.createElement("form")
    const playerOneNameEl = document.createElement("input")
    const playerTwoNameEl = document.createElement("input")
    const startGameBtn = document.createElement("button")
    startGameBtn.textContent = "Start Game"
    playerOneNameEl.placeholder = "Please Choose a name for player one"
    playerTwoNameEl.placeholder = "Please Choose a name for player two"
    startGameBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if(playerOneNameEl.value){
        playerOne.name = playerOneNameEl.value;
      }else{
        playerOne.name = "Player One"
      }
      if(playerTwoNameEl.value){
        playerTwo.name = playerTwoNameEl.value;
      }else{
        playerTwo.name = "Player Two"
      }
      
      
      console.log(playerOneNameEl.value)
      form.classList.add("hidden");
      container.classList.remove("hidden")
      container.classList.add("container")
    })

    form.appendChild(playerOneNameEl);
    form.appendChild(playerTwoNameEl);
    form.appendChild(startGameBtn);
    document.body.appendChild(form)
  }
  chooseName();
})();
