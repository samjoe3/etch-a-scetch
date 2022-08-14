let grid = document.querySelector('.grid');
let userPrompt = document.querySelector('.generator');
userPrompt.addEventListener('click', () => {generateGrid()})
for (let i = 0; i < 16; i++) {
    defaultGridBox = document.createElement('defaultgridbox');
    defaultGridBox.innerHTML = `Default${i+1} `;
    grid.appendChild(defaultGridBox);
}
function generateGrid(num1) {
    while (grid.hasChildNodes()) grid.removeChild(grid.firstChild);

    num1 = prompt('Enter a number between 1 and 100.');

    if (num1 >= 1 && num1 <= 100) {
        for (let i = 0; i < num1; i++) {
            gridBox = document.createElement('gridbox');
            gridBox.innerHTML = `test${i+1} `;
            grid.appendChild(gridBox);
        }
    }
    else alert("Your entry is not a number between 1 and 100, please try again.");
}