//your code here
let board = document.querySelector('.grid-container')

for(let i = 0;i<100;i++){
    let boardCell = document.createElement('div')
    boardCell.id = i;
    boardCell.setAttribute('data-attri',"0")
    boardCell.classList.add('grid-item','valid')
    // boardCell.innerText = i
    board.appendChild(boardCell)
}


//=========adding bombs=============//
let noOfMines = 10;
for(let i = 0; i<noOfMines ;i++){
    let randomId = Math.round(Math.random()*99);
    let bombDiv = document.getElementById(randomId);
    bombDiv.classList.remove('valid')
    bombDiv.classList.add('bomb')
    bombDiv.style.backgroundColor = 'red'
}
//============revelaing boxes===============//

let boardDivs = document.querySelectorAll('.grid-item')
boardDivs.forEach(boardCell => {
    boardCell.addEventListener("click",revealingDivs)
})
boardDivs.forEach(boardCell => {
    boardCell.addEventListener("contextmenu",addingFlag)
})

function revealingDivs(e){
    let id = e.target.id
    let clickedCell = document.getElementById(id)
    clickedCell.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
    clickedCell.style.opacity = '0.6'
    clickedCell.classList.add('checked')
    //====displaying the number of bobms==//
    if(!clickedCell.classList.contains('bomb')){
        let bombCount = 0;

        let bombArr = {
            left : -1,
            right : "+" + 1,
            up : -10,
            down : "+" + 10,
            upLeft : -9,
            upRight : -11,
            downLeft : "+" + 9,
            downRight : "+" + 11
        };
        
    
        if(id > 10 && (id/10) !== 0 && id <89 && ((id-9)/10) !== 0){
            for(let bomb in bombArr){
                let bombsNumber = eval(id + String(bombArr[bomb])) 
                console.log("bombNumber>>>>>",bombsNumber,typeof bombsNumber);
                let bombsNumberDiv = document.getElementById(bombsNumber)
                if(bombsNumberDiv.classList.contains('bomb')){
                    bombCount++;  
                }
            }
            clickedCell.innerText = bombCount
            clickedCell.dataset.attri = bombCount
        }
    }
    
}


let flagCount = 0;
let result = document.getElementById('result')

function addingFlag(e){
    e.preventDefault()
    let flagsLeft = document.getElementById('flagsLeft')

    let id = e.target.id
    let clickedCell = document.getElementById(id)
    if(!clickedCell.classList.contains('flag')){
        if(flagCount < 10){
            flagCount++;
            clickedCell.innerText = '🚩' 
            clickedCell.classList.add('flag')
            flagsLeft.innerText = flagCount
            
        }
        
    }else{
        flagCount--;
        clickedCell.innerText = '' 
        clickedCell.classList.remove('flag')
        flagsLeft.innerText = flagCount
    }
    
    if(flagCount === 10){
        if(clickedCell.classList.contains('bomb')){
            result.innerText = "YOU WIN!"
        }
    }
}


    let clickedBomb = document.querySelectorAll(".bomb")
    
    console.log(clickedBomb);
    clickedBomb.forEach(bomb => {
        bomb.addEventListener("click",() => {
            clickedBomb.forEach(bomb => {
                bomb.innerText = "💣" 
                result.innerText = "YOU LOSE!"
            })
        })
    })

















//==================================inbuilt code==============================//
// function reset() {
//     for (i = 1; i <= 9; i++) {
//         const block = document.getElementById(`${i}`);
//         block.style.backgroundColor = "transparent";
//     }
// }
  
// document.getElementById('reset_button').addEventListener('click', reset);

// document.getElementById('change_button').addEventListener('click', () => {
//     reset();
//     const blockId = document.getElementById("block_id").value;
//     const color = document.getElementById("colour_id").value;
//     // alert(colorId)
//     const block = document.getElementById(`${blockId}`);
//     block.style.backgroundColor = color;
// });