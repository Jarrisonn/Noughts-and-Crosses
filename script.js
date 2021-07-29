const container = document.querySelector(".container");

const board = (() => {
  let boardArray = ["", "", "", "", "", "", "", "", ""];

  return { boardArray };
})();

const player = (name, sign, myTurn) => {
  this.name = name;
  this.sign = sign;
  this.myTurn = myTurn;

  return { name, sign, myTurn };
};

let playerOne = player("Player one", "X", true);
let playerTwo = player("Player two", "O", false);

const displayController = (() => {
  board.boardArray.forEach((sq, i) => {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.addEventListener(
      "click",
      () => {
        if (playerOne.myTurn === true && playerTwo.myTurn === false) {
          button.textContent = playerOne.sign;
          playerOne.myTurn = !playerOne.myTurn;
          playerTwo.myTurn = !playerTwo.myTurn;
          board.boardArray[i] = button.textContent;
          console.log(board.boardArray);
          console.log("P1 has just played");
          playerOneWinCheck();
        } else if (playerTwo.myTurn === true && playerOne.myTurn === false) {
          button.textContent = playerTwo.sign;
          playerTwo.myTurn = !playerTwo.myTurn;
          playerOne.myTurn = !playerOne.myTurn;
          board.boardArray[i] = button.textContent;
          console.log(board.boardArray);
          console.log("P2 has just played");
          playerTwoWinCheck();
        }
      },
      { once: true }
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
      if (topLeft == "X" && topMid == "X" && topRight == "X") {
        console.log("player 1 wins");
      } else if (midLeft == "X" && midMid == "X" && midRight == "X") {
        console.log("player 1 wins");
      } else if (botLeft == "X" && botMid == "X" && botRight == "X"){
        console.log("player 1 wins");
      }else if (topLeft == "X" && midLeft == "X" && botLeft == "X"){
        console.log("player 1 wins");
      }else if (topMid == "X" && midMid == "X" && botMid == "X"){
        console.log("player 1 wins");
      }else if (topRight == "X" && midRight == "X" && botRight == "X"){
        console.log("player 1 wins");
      }else if (topLeft == "X" && midMid == "X" && botRight == "X"){
        console.log("player 1 wins");
      }else if (topRight == "X" && midMid == "X" && botLeft == "X"){
        console.log("player 1 wins");
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
      if (topLeft == "O" && topMid == "O" && topRight == "O") {
        console.log("player 2 wins");
      } else if (midLeft == "O" && midMid == "O" && midRight == "O") {
        console.log("player 2 wins");
      } else if (botLeft == "O" && botMid == "O" && botRight == "O"){
        console.log("player 2 wins");
      }else if (topLeft == "O" && midLeft == "O" && botLeft == "O"){
        console.log("player 2 wins");
      }else if (topMid == "O" && midMid == "O" && botMid == "O"){
        console.log("player 2 wins");
      }else if (topRight == "O" && midRight == "O" && botRight == "O"){
        console.log("player 2 wins");
      }else if (topLeft == "O" && midMid == "O" && botRight == "O"){
        console.log("player 2 wins");
      }else if (topRight == "O" && midMid == "O" && botLeft == "O"){
        console.log("player 2 wins");
      }
    };
    

    container.appendChild(button);
  });
})();
