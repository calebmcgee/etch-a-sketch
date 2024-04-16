const container = document.querySelector('.container');
const gridSizeButton = document.querySelector('.gridSizeButton');

function makeGrid(sideLength) {
    let grid = document.createElement('div');
    grid.classList.add('grid');
    for (x=0; x < sideLength; x++){
        let gridRow = document.createElement('div');
        gridRow.classList.add('gridRow');
        for (i=0; i< sideLength; i++) {
            let gridSquare = document.createElement('div');
            gridSquare.classList.add('gridSquare');
            gridRow.appendChild(gridSquare);
        }
        grid.appendChild(gridRow);
    }
    container.appendChild(grid);
}
makeGrid(10);
function colorChange(event){
    if (event.target.classList.value === 'gridSquare'){
        event.target.style.backgroundColor = 'green';
    }
}
let gridSquare = document.querySelectorAll('.gridSquare');
gridSquare.forEach((element)=> addEventListener('mouseover', (event) => {
    colorChange(event);
}));


gridSizeButton.addEventListener('click', (event) =>{
    document.querySelector('.grid').remove();

    let newGridSize = prompt('What would you like the side lengths for the grid to be?');
    makeGrid(newGridSize);
})

