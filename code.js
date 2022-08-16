let grid = document.querySelector('.grid');
let userPrompt = document.querySelector('.generator');
userPrompt.addEventListener('click', () => {generateGrid()}); /*do i need ; here? */
defaultGrid();

function defaultGrid() {
    grid.style.gridTemplateColumns = 'repeat(16, 45px)';
    grid.style.gridTemplateRows = 'repeat(16, 45px)';

    for (let i = 0; i < 256; i++) {
        defaultGridBox = document.createElement('defaultgridbox');
        grid.appendChild(defaultGridBox);
        defaultGridBox.classList.add('gridbox');
    }
}
function generateGrid(num1) {

    let userNum = prompt('Enter a number between 1 and 100.');
    let num2 = (720/userNum);
    num1 = userNum * userNum;

    if (userNum >= 1 && userNum <= 100) {
        while (grid.hasChildNodes()) grid.removeChild(grid.firstChild);
        grid.style.gridTemplateColumns = `repeat(${userNum}, ${num2}px)`;
        grid.style.gridTemplateRows = `repeat(${userNum}, ${num2}px)`;

        for (let i = 0; i < num1; i++) {
            gridBox = document.createElement('gridbox');
            grid.appendChild(gridBox);
            gridBox.classList.add('gridbox');
        }
    }
    else {
        alert("Your entry is not a number between 1 and 100, please try again.");
    }
}