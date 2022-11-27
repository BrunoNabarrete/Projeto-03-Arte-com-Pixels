let buttonOne = document.getElementsByClassName('color')[0];
//console.log(buttonOne)
buttonOne.style.backgroundColor = 'black';
let buttonTwo = document.getElementsByClassName('color')[1];
buttonTwo.style.backgroundColor = 'blue';
let buttonThre = document.getElementsByClassName('color')[2];
buttonThre.style.backgroundColor = 'purple';
let buttonFour = document.getElementsByClassName('color')[3];
buttonFour.style.backgroundColor = 'red';

let arrayStyle = [buttonFour.style.backgroundColor, buttonThre.style.backgroundColor, buttonTwo.style.backgroundColor];

window.onload = function () {
    let randomButton = document.querySelector('#button-random-color');

    let buttonTwo = document.getElementsByClassName('color')[1];
    let buttonThre = document.getElementsByClassName('color')[2];
    let buttonFour = document.getElementsByClassName('color')[3];

    
    randomButton.addEventListener('click', function(){
        let arrayRandom = [ 'number1', 'number2', 'number3', 'number4', 'number5', 'number6', 'number7', 'number8', 'number9'];

        for(let index = 0; index < arrayRandom.length; index +=1){
            arrayRandom[index] = Math.floor(Math.random() * 256);
            buttonTwo.style.backgroundColor = 'rgb('+ arrayRandom[0] + ',' + arrayRandom[1] + ',' + arrayRandom[2] + ')';
            buttonThre.style.backgroundColor = 'rgb('+ arrayRandom[3] + ',' + arrayRandom[4] + ',' + arrayRandom[5] + ')';
            buttonFour.style.backgroundColor = 'rgb('+ arrayRandom[6] + ',' + arrayRandom[7] + ',' + arrayRandom[8] + ')';
        }
        let myJSON = JSON.stringify(arrayRandom);
        localStorage.setItem('colorPalette', myJSON);
    })
    
    let palleteColors = JSON.parse(localStorage.getItem('colorPalette'));
    if(!palleteColors){
        palleteColors = arrayStyle;
    }
    //console.log(palleteColors);

    buttonTwo.style.backgroundColor = 'rgb('+ palleteColors[0] + ',' + palleteColors[1] + ',' + palleteColors[2] + ')';
    buttonThre.style.backgroundColor = 'rgb('+ palleteColors[3] + ',' + palleteColors[4] + ',' + palleteColors[5] + ')';
    buttonFour.style.backgroundColor = 'rgb('+ palleteColors[6] + ',' + palleteColors[7] + ',' + palleteColors[8] + ')';



    let selectColor = document.querySelectorAll('.color');

    for(let index = 0; index < selectColor.length; index +=1){
        const item = selectColor[index];
        item.addEventListener('click', selectColorButton);
    }
    
    let selectBackgroundColor = 'black'; 

    function selectColorButton(event) {
        for(let index = 0; index < selectColor.length; index +=1){
            const item = selectColor[index];
            item.classList.remove('selected');
            selectBackgroundColor = event.target.style.backgroundColor
        }

        event.target.classList.add('selected');
    }

    let selectPixel = document.querySelectorAll('.pixel');

    let arrayBackground = [];

    for (let index = 0; index < selectPixel.length; index +=1){
        let itemPixel = selectPixel[index];
        itemPixel.addEventListener('click', selectBackColor)
        arrayBackground.push(itemPixel.style.backgroundColor);
    }
    
    function selectBackColor(event){
        for(let index = 0; index < selectPixel.length; index +=1){
            const item = selectPixel[index];
            item.style.backgroundColor
        }
        event.target.style.backgroundColor = selectBackgroundColor;
    }

    let test = document.querySelector('#pixel-board')

        test.addEventListener('click', function(event) {
        storeDraw();
        })

    let clearButton = document.querySelector('#clear-board');

    clearButton.addEventListener('click', function(){
        for(let index = 0; index < selectPixel.length; index +=1){
            selectPixel[index].style.backgroundColor = 'white';
        }
    })

    let get2 = JSON.parse(localStorage.getItem('pixelBoard'));
    if (get2 !== null) {
        for (let index = 0; index < selectPixel2.length; index +=1){
            selectPixel2[index].style.backgroundColor = get2[index];
        }
    }
}

let selectPixel2 = document.getElementsByClassName('pixel');

function storeDraw(){
    let arrDrw = [];
    for (let index = 0; index < selectPixel2.length; index +=1){
        let select = getComputedStyle(selectPixel2[index]).backgroundColor;
        arrDrw.push(select);        
    }
    
    let storegeDraw = JSON.stringify(arrDrw);
    localStorage.setItem('pixelBoard', storegeDraw);
}

let boardPixel = document.getElementsByClassName('pixel');
let panel = document.querySelector('#pixel-board');
let testBoardSize = 80;  
let boardSize = document.getElementById('board-size');
let naosei = boardSize.value;

fillBox();
let buttonCreatBoard = document.querySelectorAll('#generate-board')



//buttonCreatBoard.addEventListener('click', fillBox)

console.log(boardSize);




function fillBox() {
    for(let index = 0; index < boardSize; index +=1){
        panel.appendChild(createBox('pixel'));
    }
};


function createBox (className) {
    let box = document.createElement('div');
    box.className = className;
    return box;
}

