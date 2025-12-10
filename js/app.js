const container = document.querySelector('.container');
const reset = document.querySelector('.reset');
const partyBtn = document.querySelector('.party');
let colorDiv = [];
let gridNumber;
let div;

const partyColors = [
  'red',
  'aqua',
  'chartreuse',
  'yellow',
  'blueviolet',
  'dodgerblue',
  'orangered',
  'lightgreen',
  'rebeccapurple',
  'deeppink',
];
const createGrid = () => {
  let grid = prompt('Enter a number 1 - 100');
  if (isNaN(grid) || grid > 100 || grid == '') {
    newGrid();
  } else {
    gridNumber = grid * grid;
    let gridSize = 800 / grid;
    console.log(gridSize);

    for (i = 1; i <= gridNumber; i++) {
      div = document.createElement('div');
      container.appendChild(div);
      div.style.width = `${gridSize}px`;
      div.style.height = `${gridSize}px`;
      div.classList.add('square');
      div.style.backgroundColor = '#f5efe6';

      colorDiv.push(div);
    }

    colorDiv.forEach((div) => {
      div.addEventListener('mouseover', () => {
        let choice = Math.floor(Math.random() * partyColors.length);
        let color = partyColors[choice];
        div.style.backgroundColor = color;
      });
    });
  }
};

const newGrid = () => {
  container.textContent = '';
  colorDiv.length = 0;
  createGrid();
};

createGrid();

reset.addEventListener('click', () => {
  newGrid();
});
