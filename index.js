const prompt = require('prompt-sync')({ sigint: true });
/* index of the board
  ________________
  |  00  01  02  |
  |  10  11  12  |
  |  20  21  22  |
  ----------------
*/
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  board = [[]]
  constructor(inputBoard) {
    this.board = inputBoard;
    this.playerPosition = [0, 0];
    this.hatPosition = [2, 1];
  }
  print() {
    console.log(this.board.map(r => r.join('')).join('\n'));
  }
  checkDirectionInput(key) {
    switch (key) {
      case 'W':
        this.moveUp();
        break;
      case 'A':
        this.moveLeft();
        break;
      case 'S':
        this.moveDown();
        break;
      case 'D':
        this.moveRight();
        break;
      default: console.log('Input Error');
    }
  }
  moveUp() {
    this.playerPosition[0]--;
    this.checkFall();
    this.board[this.playerPosition[0]][this.playerPosition[1]] = pathCharacter
    this.print();
  }
  moveLeft() {
    this.playerPosition[1]--;
    this.checkFall();
    this.board[this.playerPosition[0]][this.playerPosition[1]] = pathCharacter
    this.print();
  }
  moveDown() {
    this.playerPosition[0]++;
    this.checkFall();
    this.board[this.playerPosition[0]][this.playerPosition[1]] = pathCharacter
    this.print();
  }
  moveRight() {
    this.playerPosition[1]++;
    this.checkFall();
    this.board[this.playerPosition[0]][this.playerPosition[1]] = pathCharacter
    this.print();
  }
  checkFall() {
    // Upper Edge
    if (this.playerPosition[0] < 0) {
      console.log('Gameover!: You fell a map.');
      console.log('Omae Wa Mou Shindeiru! Nani!!!');
    }
    // Left Edge
    if (this.playerPosition[1] < 0) {
      console.log('Gameover!: You fell a map.');
      console.log('Omae Wa Mou Shindeiru! Nani!!!');
    }
    // Lower Edge
    if (this.playerPosition[0] > this.board.length) {
      console.log('Gameover!: You fell a map.');
      console.log('Omae Wa Mou Shindeiru! Nani!!!');
    }
    // Right Edge
    if (this.playerPosition[0] > this.board[0].length) {
      console.log('Gameover!: You fell a map.');
      console.log('Omae Wa Mou Shindeiru! Nani!!!');
    }
    // Fall in a hole
    if (this.board[this.playerPosition[0]][this.playerPosition[1]] === hole) {
      console.log('Gameover!: You fall in a hole.');
      console.log('Omae Wa Mou Shindeiru! Nani!!!');
    }
  }
}

const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);

while (true) {
  console.log('Which way you want to go?');
  const input = prompt('W: Up, A: Left, S: Down, D: right => ');
  myField.checkDirectionInput(input);
  // myField.print();
}
