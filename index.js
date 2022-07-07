const prompt = require('prompt-sync')({ sigint: true });

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
    this.board[this.playerPosition[0]][this.playerPosition[1]] = pathCharacter
    this.print();
  }
  moveLeft() {
    this.playerPosition[1]--;
    this.board[this.playerPosition[0]][this.playerPosition[1]] = pathCharacter
    this.print();
  }
  moveDown() {
    this.playerPosition[0]++;
    this.board[this.playerPosition[0]][this.playerPosition[1]] = pathCharacter
    this.print();
  }
  moveRight() {
    this.playerPosition[1]++;
    this.board[this.playerPosition[0]][this.playerPosition[1]] = pathCharacter
    this.print();
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
