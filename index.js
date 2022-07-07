const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  board = [[]]
  constructor(inputBoard) {
    this.board = inputBoard;
  }
  print() {
    console.log(this.board.map(r => r.join('')).join('\n'));
  }
}

const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);

while (true) {
  myField.print();
  // const input = prompt('Please enter + or -');
  // console.log(`Your input is ${input}`)
}
