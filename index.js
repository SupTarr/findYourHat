const prompt = require('prompt-sync')({ sigint: true });
/* index of the board
  ________________
  |  00  01  02  |
  |  10  11  12  |
  |  20  21  22  |
  ----------------
*/
/* Default Map
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'], 
*/
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const percent = 0.3;

class Field {
  constructor(inputBoard, row, column) {
    this.board = inputBoard;
    this.playerPosition = [0, 0];
    this.hatPosition = [2, 1];
    this.checkFall = false;
    this.row = row;
    this.column = column;
    this.countHole = 0;
  }

  generateField() {
    this.board.map(r => {
      r = fieldCharacter;
    })
    let randomRow = Math.floor(Math.random() * this.row);
    let randomColumn = Math.floor(Math.random() * this.column);
    // Random Player
    this.board[randomRow][randomColumn] = pathCharacter;
    randomRow = Math.floor(Math.random() * this.row);
    randomColumn = Math.floor(Math.random() * this.column);
    // Random Hat
    this.board[randomRow][randomColumn] = hat;
    this.board.map(r => {
      if (r !== pathCharacter && r !== pathCharacter) {
        r = fieldCharacter;
      }
    })
    this.print();
  }
  
  print() {
    console.log(this.board.map(r => r.join('')).join('\n'));
  }
  
  checkDirectionInput(key) {
    switch (key) {
      // Move Up
      case 'W':
        // Check Fall Upper Edge
        if (this.playerPosition[0] === 0) {
          console.log('Game over!: You fell a map.');
          console.log('Omae Wa Mou Shindeiru! Nani!!!');
          this.checkFall = true;
        }
        // Move player
        if (this.playerPosition[0] > 0) {
          this.playerPosition[0]--;
          this.checkWin();
        }
        // Check Win
        if (this.checkWin() === true) {
          console.log('You Win!: You can find a hat.');
          console.log('Mission Complete!!!');
        }
        // Check Fall in a hole
        if (this.board[this.playerPosition[0]][this.playerPosition[1]] === hole) {
          console.log('Game over!: You fall in a hole.');
          console.log('Omae Wa Mou Shindeiru! Nani!!!');
          this.checkFall = true;
        }
        if (this.checkFall === false && this.checkWin() === false) {
          this.board[this.playerPosition[0]][this.playerPosition[1]] = pathCharacter;
          this.print();
          break;
        }
        break;
      // Move Left
      case 'A':
        // Check Fall Left Edge
        if (this.playerPosition[1] === 0) {
          console.log('Game over!: You fell a map.');
          console.log('Omae Wa Mou Shindeiru! Nani!!!');
          this.checkFall = true;
        }
        // Move player
        if (this.playerPosition[1] > 0) {
          this.playerPosition[1]--;
          this.checkWin();
        }
        // Check Win
        if (this.checkWin() === true) {
          console.log('You Win!: You can find a hat.');
          console.log('Mission Complete!!!');
        }
        // Check Fall in a hole
        if (this.board[this.playerPosition[0]][this.playerPosition[1]] === hole) {
          console.log('Game over!: You fall in a hole.');
          console.log('Omae Wa Mou Shindeiru! Nani!!!');
          this.checkFall = true;
        }
        if (this.checkFall === false && this.checkWin() === false) {
          this.board[this.playerPosition[0]][this.playerPosition[1]] = pathCharacter;
          this.print();
        }
        break;
      // Move Down
      case 'S':
        // Check Fall Lower Edge
        if (this.playerPosition[0] === (this.board.length - 1)) {
          console.log('Game over!: You fell a map.');
          console.log('Omae Wa Mou Shindeiru! Nani!!!');
          this.checkFall = true;
        }
        // Move player
        if (this.playerPosition[0] < (this.board.length - 1)) {
          this.playerPosition[0]++;
          this.checkWin();
        }
        // Check Win
        if (this.checkWin() === true) {
          console.log('You Win!: You can find a hat.');
          console.log('Mission Complete!!!');
        }
        // Check Fall in a hole
        if (this.board[this.playerPosition[0]][this.playerPosition[1]] === hole) {
          console.log('Game over!: You fall in a hole.');
          console.log('Omae Wa Mou Shindeiru! Nani!!!');
          this.checkFall = true;
        }
        if (this.checkFall === false && this.checkWin() === false) {
          this.board[this.playerPosition[0]][this.playerPosition[1]] = pathCharacter;
          this.print();
        }
        break;
      // Move Right
      case 'D':
        // Check Fall Right Edge
        if (this.playerPosition[1] === (this.board[0].length - 1)) {
          console.log('Game over!: You fell a map.');
          console.log('Omae Wa Mou Shindeiru! Nani!!!');
          this.checkFall = true;
        }
        // Move player
        if (this.playerPosition[1] < (this.board[0].length - 1)) {
          this.playerPosition[1]++;
          this.checkWin();
        }
        // Check Win
        if (this.checkWin() === true) {
          console.log('You Win!: You can find a hat.');
          console.log('Mission Complete!!!');
        }
        // Check Fall in a hole
        if (this.board[this.playerPosition[0]][this.playerPosition[1]] === hole) {
          console.log('Game over!: You fall in a hole.');
          console.log('Omae Wa Mou Shindeiru! Nani!!!');
          this.checkFall = true;
        }
        if (this.checkFall === false && this.checkWin() === false) {
          this.board[this.playerPosition[0]][this.playerPosition[1]] = pathCharacter;
          this.print();
        }
        break;
      default: console.log('Input Error');
    }
  }

  checkWin() {
    if (this.board[this.playerPosition[0]][this.playerPosition[1]] === hat) {
      return true;
    }
    return false;
  }
}
// initialize
const row = prompt('Number of row : ');
const column = prompt('Number of column : ');
const myField = new Field([], row, column);
myField.generateField();

while (myField.checkFall === false && myField.checkWin() === false) {
  console.log('Which way you want to go?');
  const input = prompt('W: Up, A: Left, S: Down, D: right => ');
  myField.checkDirectionInput(input);
}