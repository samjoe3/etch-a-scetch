let grid = document.querySelector('.grid');
let userPrompt = document.querySelector('.btncustom');
userPrompt.addEventListener('click', () => {customGrid()});
defaultGrid();


buttonLarge = document.querySelector('.btnlarge');
buttonLarge.addEventListener('click', () => {buttonGrid(25)});
buttonMedium = document.querySelector('.btnmedium');
buttonMedium.addEventListener('click', () => {buttonGrid(50)});
buttonSmall = document.querySelector('.btnsmall');
buttonSmall.addEventListener('click', () => {buttonGrid(75)});
buttonMicro = document.querySelector('.btnmicro');
buttonMicro.addEventListener('click', () => {buttonGrid(100)});

let penColor = "black";
btnw = document.querySelector('.btnwhite');
btnw.addEventListener('click', () => {penColor = "white"});
btnr = document.querySelector('.btnred');
btnr.addEventListener('click', () => {penColor = "red"});
btno = document.querySelector('.btnorange');
btno.addEventListener('click', () => {penColor = "orange"});
btny = document.querySelector('.btnyellow');
btny.addEventListener('click', () => {penColor = "yellow"});
btng = document.querySelector('.btngreen');
btng.addEventListener('click', () => {penColor = "green"});
btnb = document.querySelector('.btnblue');
btnb.addEventListener('click', () => {penColor = "blue"});
btnp = document.querySelector('.btnpurple');
btnp.addEventListener('click', () => {penColor = "purple"});
btnblk = document.querySelector('.btnblack');
btnblk.addEventListener('click', () => {penColor = "black"});

function defaultGrid() {
    grid.style.gridTemplateColumns = 'repeat(50, 14.4px)';
    grid.style.gridTemplateRows = 'repeat(50, 14.4px)';

    for (let i = 0; i < 2500; i++) {
        let defaultGridBox = i;
        defaultGridBox = document.createElement('defaultgridbox');
        grid.appendChild(defaultGridBox);
        defaultGridBox.classList.add('gridbox');
        defaultGridBox.onmouseenter = () => {defaultGridBox.style.backgroundColor = `${penColor}`};
    }   
}
function customGrid() {

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
            gridBox.addEventListener('mouseenter', () => {gridBox.style.backgroundColor = `${penColor}`});
        }
    }
    else {
        alert("Your entry is not a number between 1 and 100, please try again.");
    }
}
function buttonGrid(buttonNum) {
    let pxNum = (720/buttonNum) ;
    gridNum = buttonNum * buttonNum;
    while (grid.hasChildNodes()) grid.removeChild(grid.firstChild);
    grid.style.gridTemplateColumns = `repeat(${buttonNum}, ${pxNum}px)`;
    grid.style.gridTemplateRows = `repeat(${buttonNum}, ${pxNum}px)`;

    for (let i = 0; i < gridNum; i++) {
        let btnBox = i;
        btnBox = document.createElement('btnbox');
        grid.appendChild(btnBox);
        btnBox.classList.add('gridbox'); 
        btnBox.addEventListener('mouseenter', () => {btnBox.style.backgroundColor = `${penColor}`});
    }
}