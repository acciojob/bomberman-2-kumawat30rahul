//your code here
let board = document.querySelector('.grid-container')

for(let i = 0;i<100;i++){
    let boardCell = document.createElement('div')
    boardCell.id = i;
    boardCell.setAttribute('data-value',"NaN")
    boardCell.classList.add('grid-item','valid')
    boardCell.innerText = i
    board.appendChild(boardCell)
}


//=========adding bombs=============//
// let noOfMines = 10;
for(let i = 0; i<10 ;i++){
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


// let clickedNonBombDivs = [];

function revealingDivs(e){
    let id = e.target.id
    let clickedCell = document.getElementById(id)

    if(clickedCell.classList.contains('bomb')){
            gameOver()
    }else{
        clickedCell.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
        clickedCell.style.opacity = '0.6'
        clickedCell.classList.add('checked')
        // clickedNonBombDivs.push(id)
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
                    let bombsNumberDiv = document.getElementById(bombsNumber)
                    if(bombsNumberDiv.classList.contains('bomb')){
                        bombCount++;  
                    }
                }
                clickedCell.innerText = bombCount
                clickedCell.dataset.value = bombCount
            }

            // if (clickedNonBombDivs.length === 90) {
            //     won();
            //   }

              let allClicked = document.querySelectorAll('.checked')
                // console.log(allClicked);
                let count = 0
                if(allClicked.length === 90){
                    allClicked.forEach(div => {
                        if(!div.classList.contains('bomb')){
                            count++;
                        }
                    })
                    if(count === 90){
                        won()
                    }
                }
                
        }
    }
    


    
    
}
let clickedBomb = document.querySelectorAll(".bomb")
let shouldTriggerClick = true;
let countdgdfg = 0
clickedBomb.forEach(bomb => {
    bomb.addEventListener("click",() => {
        bomb.classList.add('checked')
        if(shouldTriggerClick){
            clickedBomb.forEach(bomb => {
                bomb.innerText = "💣" 
                bomb.classList.add('checked')
                console.log(countdgdfg++);
                bomb.click()
            })
        }
        shouldTriggerClick = false;
    gameOver()

    })

})



let flagCount = 10;
let result = document.getElementById('result')

function addingFlag(e){
    e.preventDefault()
    let flagsLeft = document.getElementById('flagsLeft')

    let id = e.target.id
    let clickedCell = document.getElementById(id)
    if(!clickedCell.classList.contains('flag')){  
        if(flagCount > 0){
            flagCount--;
            clickedCell.innerText = '🚩' 
            clickedCell.classList.add('flag')
            flagsLeft.innerText = flagCount     
        }     
    }else{
         flagCount++;
         clickedCell.innerText = '' 
         clickedCell.classList.remove('flag')
        flagsLeft.innerText = flagCount
        
    }
    
    if(flagCount === 0){
        console.log("won");
        if(clickedCell.classList.contains('bomb')){
            won()
        }
    }
}


    

function gameOver(){
    result.innerHTML = "YOU LOSE!"
    boardDivs.forEach(boardCell => {
        boardCell.removeEventListener("click",revealingDivs)
    })
    boardDivs.forEach(boardCell => {
        boardCell.removeEventListener("contextmenu",addingFlag)
    })
}
function won(){
    result.innerText = "YOU WIN!"

    boardDivs.forEach(boardCell => {
        boardCell.removeEventListener("click",revealingDivs)
    })
    boardDivs.forEach(boardCell => {
        boardCell.removeEventListener("contextmenu",addingFlag)
    })
}















