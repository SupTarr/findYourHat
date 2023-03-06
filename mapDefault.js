const prompt = require("prompt-sync")({ sigint: true });
/* 
  index of the board
        C O L U M N
      ----------------
  R  |  00  01  02  |
  O  |  10  11  12  |
  W  |  20  21  22  |
      ----------------
*/

/* 
  Default Map
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'], 
*/

const hat = "^";
const hole = "O";
const pathCharacter = "*";

class Field {
  constructor(inputBoard) {
    this.board = inputBoard;
    this.playerPosition = [0, 0];
    this.hatPosition = [2, 1];
    this.countHole = 0;
    this.isFallenEdge = false;
    this.isGoBack = false;
    this.isFallenHole = false;
    this.isWin = false;
  }

  get getBoard() {
    return this.board.map((r) => r.join("")).join("\n");
  }

  get getIsFallenEdge() {
    return this.isFallenEdge;
  }

  get getIsFallenHole() {
    return this.isFallenHole;
  }

  get getIsWin() {
    return this.isWin;
  }

  checkFallenEdge(key) {
    switch (key) {
      case "W":
        // Check Fall Upper Edge
        if (this.playerPosition[0] === 0) {
          this.isFallenEdge = true;
        }
        break;
      case "A":
        // Check Fall Left Edge
        if (this.playerPosition[1] === 0) {
          this.isFallenEdge = true;
        }
        break;
      case "S":
        // Check Fall Lower Edge
        if (this.playerPosition[0] === this.board.length - 1) {
          this.isFallenEdge = true;
        }
        break;
      case "D":
        // Check Fall Right Edge
        if (this.playerPosition[1] === this.board[0].length - 1) {
          this.isFallenEdge = true;
        }
        break;
    }
    if (this.isFallenEdge) {
      console.log("Game over!: You fell a map.");
      console.log("Omae Wa Mou Shindeiru! Nani!!!");
    }
  }

  checkGoBack(nextPosition) {
    if (this.board[nextPosition[0]][nextPosition[1]] === pathCharacter) {
      this.isGoBack = true;
    }
    if (this.isGoBack) {
      console.log("You can't go back from where you came from.");
      console.log("Try again!");
    }
  }

  checkFallenHole() {
    if (this.board[this.playerPosition[0]][this.playerPosition[1]] === hole) {
      this.isFallenHole = true;
    }
    if (this.isFallenHole) {
      console.log("Game over!: You fall in a hole.");
      console.log("Omae Wa Mou Shindeiru! Nani!!!");
    }
  }

  checkWin() {
    if (this.board[this.playerPosition[0]][this.playerPosition[1]] === hat) {
      this.isWin = true;
    }
    if (this.isWin) {
      console.log("You Win!: You can find a hat.");
      console.log("Mission Complete!!!");
    }
  }

  checkDirectionInput(key) {
    switch (key) {
      // Move Up
      case "W":
        this.checkFallenEdge("W");
        if (!this.isFallenEdge) {
          this.checkGoBack([
            this.playerPosition[0] - 1,
            this.playerPosition[1],
          ]);
          if (this.playerPosition[0] > 0 && !this.isGoBack) {
            this.playerPosition[0]--;
            this.checkFallenHole();
            this.checkWin();
          }
          if (!this.isFallenHole && !this.isWin) {
            this.board[this.playerPosition[0]][this.playerPosition[1]] =
              pathCharacter;
            console.log(this.getBoard);
          }
        } else {
          break;
        }
        break;
      // Move Left
      case "A":
        this.checkFallenEdge("A");
        if (!this.isFallenEdge) {
          this.checkGoBack([
            this.playerPosition[0],
            this.playerPosition[1] - 1,
          ]);
          if (this.playerPosition[1] > 0 && !this.isGoBack) {
            this.playerPosition[1]--;
            this.checkFallenHole();
            this.checkWin();
          }
          if (!this.isFallenHole && !this.isWin) {
            this.board[this.playerPosition[0]][this.playerPosition[1]] =
              pathCharacter;
            console.log(this.getBoard);
          }
        } else {
          break;
        }
        break;
      // Move Down
      case "S":
        this.checkFallenEdge("S");
        if (!this.isFallenEdge) {
          this.checkGoBack([
            this.playerPosition[0] + 1,
            this.playerPosition[1],
          ]);
          if (
            this.playerPosition[0] < this.board.length - 1 &&
            !this.isGoBack
          ) {
            this.playerPosition[0]++;
            this.checkFallenHole();
            this.checkWin();
          }
          if (!this.isFallenHole && !this.isWin) {
            this.board[this.playerPosition[0]][this.playerPosition[1]] =
              pathCharacter;
            console.log(this.getBoard);
          }
        } else {
          break;
        }
        break;
      // Move Right
      case "D":
        this.checkFallenEdge("D");
        if (!this.isFallenEdge) {
          this.checkGoBack([
            this.playerPosition[0],
            this.playerPosition[1] + 1,
          ]);
          if (
            this.playerPosition[1] < this.board[0].length - 1 &&
            !this.isGoBack
          ) {
            this.playerPosition[1]++;
            this.checkFallenHole();
            this.checkWin();
          }
          if (!this.isFallenHole && !this.isWin) {
            this.board[this.playerPosition[0]][this.playerPosition[1]] =
              pathCharacter;
            console.log(this.getBoard);
          }
        } else {
          break;
        }
        break;
      default:
        console.log("Input Error");
    }
  }
}
// initialize
const myField = new Field([
  ["*", "░", "O"],
  ["░", "O", "░"],
  ["░", "^", "░"],
]);
console.log(myField.getBoard);

while (
  !myField.getIsFallenEdge &&
  !myField.getIsFallenHole &&
  !myField.getIsWin
) {
  console.log("Which way you want to go?");
  const input = prompt("W: Up, A: Left, S: Down, D: right => ");
  myField.checkDirectionInput(input);
}
