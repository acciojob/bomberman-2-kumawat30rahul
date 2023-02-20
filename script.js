//your code here
let board = document.querySelector('.grid-container')

for(let i = 0;i<100;i++){
    let boardCell = document.createElement('div')
    boardCell.id = i;
    boardCell.classList.add('grid-item','valid')
    boardCell.innerText = i
    board.appendChild(boardCell)
}


//=========adding bombs=============//
// let noOfMines = 10;
// let bombIds = new Set();

// while (bombIds.size < 10) {
//   let randomId = Math.round(Math.random() * 79);
//   bombIds.add(randomId + 10);
// }

// bombIds.forEach(id => {
//   let bombDiv = document.getElementById(id);
//   bombDiv.classList.remove('valid');
//   bombDiv.classList.add('bomb');
//   bombDiv.style.backgroundColor = 'red';
// });

let bombIds = [];
while (bombIds.length < 10) {
  let randomId = Math.floor(Math.random() * 80) + 10;
  if (!bombIds.includes(randomId)) {
    bombIds.push(randomId);
  }
}

for (let i = 0; i < bombIds.length; i++) {
  let bombDiv = document.getElementById(bombIds[i]);
  bombDiv.classList.remove('valid');
  bombDiv.classList.add('bomb');
  bombDiv.style.backgroundColor = 'red';
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
            console.log("first after declaration",bombCount);
            let bombArr = {
                left : -1,
                right : "+" + 1,
                up : -10,
                down : "+" + 10,
                upLeft : -11,
                upRight : -9,
                downLeft : "+" + 9,
                downRight : "+" + 11
            };
            let bombArrUP = {
                left : -1,
                right : "+" + 1,
                down : "+" + 10,
                downLeft : "+" + 9,
                downRight : "+" + 11
            };
            let bombArrRIGHT = {
                left : -1,
                up : -10,
                down : "+" + 10,
                upLeft : -11,
                downLeft : "+" + 9,
            };
            let bombArrDOWN = {
                left : -1,
                right : "+" + 1,
                up : -10,
                upLeft : -9,
                upRight : -9,
            };
            let bombArrLEFT = {
                right : "+" + 1,
                up : -10,
                down : "+" + 10,
                upRight : -9,
                downRight : "+" + 11
            };
            
            let corner1 = {
                up : -10,
                upRight : -9,
                right : "+" + 1,
            }
            let corner2 = {
                up : -10,
                upLeft : -9,
                left : -1,
            }
        
            if(id >= 10 && (id%10) !== 0 && id <89 && ((id-9)%10) !== 0 ){
                for(let bomb in bombArr){
                    let bombsNumber = eval(id + String(bombArr[bomb])) 
                    let bombsNumberDiv = document.getElementById(bombsNumber)
                    if(bombsNumberDiv.classList.contains('bomb')){
                        bombCount++;  
                        console.log("inside for loop>>>",bombCount);
                    }
                }
                clickedCell.innerText = bombCount
                console.log("outsude for loop>>>",bombCount);
            }else if(id < 10){
                for(let bomb in bombArrUP){
                    let bombsNumber = eval(id + String(bombArrUP[bomb])) 
                    let bombsNumberDiv = document.getElementById(bombsNumber)
                    if(bombsNumberDiv.classList.contains('bomb')){
                        bombCount++;  
                        console.log("inside for loop>>>",bombCount);
                    }
                }
                clickedCell.innerText = bombCount
            }else if(id%10 === 0){
                for(let bomb in bombArrLEFT){
                    let bombsNumber = eval(id + String(bombArrLEFT[bomb])) 
                    let bombsNumberDiv = document.getElementById(bombsNumber)
                    if(bombsNumberDiv.classList.contains('bomb')){
                        bombCount++;  
                        console.log("inside for loop>>>",bombCount);
                    }
                }
                clickedCell.innerText = bombCount
            }else if((id-9)%10 === 0){
                for(let bomb in bombArrRIGHT){
                    let bombsNumber = eval(id + String(bombArrRIGHT[bomb])) 
                    let bombsNumberDiv = document.getElementById(bombsNumber)
                    if(bombsNumberDiv.classList.contains('bomb')){
                        bombCount++;  
                        console.log("inside for loop>>>",bombCount);
                    }
                }
                clickedCell.innerText = bombCount
            }else if(id>91 && id <99 && id!==90 && id!==99){
                for(let bomb in bombArrDOWN){
                    let bombsNumber = eval(id + String(bombArrDOWN[bomb])) 
                    let bombsNumberDiv = document.getElementById(bombsNumber)
                    if(bombsNumberDiv.classList.contains('bomb')){
                        bombCount++;  
                        console.log("inside for loop>>>",bombCount);
                    }
                }
                clickedCell.innerText = bombCount
            }else if(id === 90){
                for(let bomb in corner1){
                    let bombsNumber = eval(id + String(corner1[bomb])) 
                    let bombsNumberDiv = document.getElementById(bombsNumber)
                    if(bombsNumberDiv.classList.contains('bomb')){
                        bombCount++;  
                        console.log("inside for loop>>>",bombCount);
                    }
                }
                clickedCell.innerText = bombCount
            }else if(id === 99){
                for(let bomb in corner2){
                    let bombsNumber = eval(id + String(corner2[bomb])) 
                    console.log("sdgsdfg",bombsNumber);
                    let bombsNumberDiv = document.getElementById(bombsNumber)
                    if(bombsNumberDiv.classList.contains('bomb')){
                        bombCount++;  
                        console.log("inside for loop>>>",bombCount);
                    }
                }
                clickedCell.innerText = bombCount
            }
            console.log("first dec>>",bombCount);
            clickedCell.setAttribute('data-value',bombCount)
            console.log("second dec>>",bombCount);


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














