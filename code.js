let grid = document.querySelector('.grid');
let userPrompt = document.querySelector('.generator');
userPrompt.addEventListener('click', () => {generateGrid()})
defaultGrid();
function defaultGrid() {
    for (let i = 0; i < 256; i++) {
        defaultGridBox = document.createElement('defaultgridbox');
        //defaultGridBox.innerHTML = `D${i+1} `;
        grid.appendChild(defaultGridBox);
        defaultGridBox.classList.add('gridbox')
    }

}
function generateGrid(num1) {
    while (grid.hasChildNodes()) grid.removeChild(grid.firstChild);

    num1 = prompt('Enter a number between 1 and 10,000.');
    let columnNumber = document.querySelector('.grid');
    let num2 = (720/Math.sqrt(num1));
    if (num1 >= 1 && num1 <= 10000) {
        columnNumber.style.gridTemplateColumns = `repeat(${Math.sqrt(num1)}, ${num2}px)`;
        columnNumber.style.gridTemplateRows = `repeat(${Math.sqrt(num1)}, ${num2}px)`;

        for (let i = 0; i < num1; i++) {
            gridBox = document.createElement('gridbox');
            grid.appendChild(gridBox);
            gridBox.classList.add('gridbox');
        }
    }
    else alert("Your entry is not a number between 1 and 100, please try again.");
}