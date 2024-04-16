const container = document.querySelector('.container');


function makeGrid(rowLength,rowAmount) {
    for (x=0; x < rowAmount; x++){
        let gridRow = document.createElement('div');
        gridRow.classList.add('gridRow');
        for (i=0; i< rowLength; i++) {
            let gridSquare = document.createElement('div');
            gridSquare.classList.add('gridSquare');
            gridRow.appendChild(gridSquare);
        }
        container.appendChild(gridRow);
    }
}

makeGrid(16,16);

