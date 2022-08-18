let grid = document.querySelector('.grid');
let userPrompt = document.querySelector('.btncustom');
userPrompt.addEventListener('click', () => {generateGrid()});
defaultGrid();

function defaultGrid() {
    grid.style.gridTemplateColumns = 'repeat(50, 14.4px)';
    grid.style.gridTemplateRows = 'repeat(50, 14.4px)';

    for (let i = 0; i < 2500; i++) {
        color = "black";
        let defaultGridBox = i;
        defaultGridBox = document.createElement('defaultgridbox');
        grid.appendChild(defaultGridBox);
        defaultGridBox.classList.add('gridbox');
        defaultGridBox.onmouseenter = () => {defaultGridBox.style.backgroundColor = `${color}`};
        btnw = document.querySelector('.btnwhite');
        btnw.addEventListener('click', () => {color = "white"});
        btnr = document.querySelector('.btnred');
        btnr.addEventListener('click', () => {color = "red"});
        btno = document.querySelector('.btnorange');
        btno.addEventListener('click', () => {color = "orange"});
        btny = document.querySelector('.btnyellow');
        btny.addEventListener('click', () => {color = "yellow"});
        btng = document.querySelector('.btngreen');
        btng.addEventListener('click', () => {color = "green"});
        btnb = document.querySelector('.btnblue');
        btnb.addEventListener('click', () => {color = "blue"});
        btnp = document.querySelector('.btnpurple');
        btnp.addEventListener('click', () => {color = "purple"});
        btnblk = document.querySelector('.btnblack');
        btnblk.addEventListener('click', () => {color = "black"}); 
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
            let gridBox = i;
            gridBox = document.createElement('gridbox');
            grid.appendChild(gridBox);
            gridBox.classList.add('gridbox'); 
            gridBox.addEventListener('mouseenter', () => {gridBox.style.backgroundColor = "black"});       
        //change the line before this and add a function to get more colors etc..
        }
    }
    else {
        alert("Your entry is not a number between 1 and 100, please try again.");
    }
}