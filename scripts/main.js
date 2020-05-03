//var gridSize;

createGrid(256);

document.addEventListener('mouseover', draw);

function draw() {
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);
    var a = Math.random();
    
    if (event.target.matches('.grid-square')) {
        //event.target.classList.add('pen-active');
        event.target.style.backgroundColor = 
            event.target.style.borderColor = 
            'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
}

document.querySelector('.reset-button').addEventListener('click', reset);

function reset(size) {
    var gridSize = prompt('Enter number of squares per side:', '16');
    if (gridSize !== null) {
        for (i = 0; i < size; i++) {
            document.querySelector('.grid' + i).classList.remove('pen-active');  
        }
        createGrid(gridSize**2);
    }
}

function createGrid(size) {
    var getGridContainer = document.querySelector('.grid-container');
    while (getGridContainer.hasChildNodes()) {
        getGridContainer.removeChild(getGridContainer.firstChild);
    }
    for (i = 0; i < size; i++) {
        var div = document.createElement('div');
        document.querySelector('.grid-container').appendChild(div).classList.add('grid' + i, 'grid-square'); 
        squareGrid = document.querySelector('.grid' + i);
        squareGrid.style.width = 705 / Math.sqrt(size) - 1 + 'px';
        squareGrid.style.paddingTop = 705 / Math.sqrt(size) - 1 + 'px';
    }
}
