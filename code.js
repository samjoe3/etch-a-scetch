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

    num1 = prompt('Enter a number between 1 and 100.');

    if (num1 >= 1 && num1 <= 1000) {
        for (let i = 0; i < num1; i++) {
            gridBox = document.createElement('gridbox');
            //gridBox.innerHTML = `T${i+1} `;
            grid.appendChild(gridBox);
            gridBox.classList.add('gridbox');
        }
    }
    else alert("Your entry is not a number between 1 and 100, please try again.");
}