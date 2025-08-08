

//makes a square grid according to size value and appends it to 
function gridFactory(size) {
    if(size > 100) return "ERROR"
    const squares = document.querySelector('.squares')
    for(let i=0; i< size; i++) {
        for(let j=0; j < size; j++) {
            const newDiv = document.createElement('div')
            newDiv.id = `${j}-by-${i}`
            newDiv.classList.add('square')
            newDiv.setAttribute('style', 
                `flex: 0 0 ${100/size}%;`
            )
            newDiv.addEventListener('mouseover', e => {
                newDiv.style.backgroundColor = 'black';    
            })
            squares.appendChild(newDiv)
        }
    }
}

function clearGridFactory() {
    const squares = document.querySelector('.squares')
    while(squares.firstChild) {
        squares.removeChild(squares.firstChild);
    }
}

const startButton = document.querySelector('.start-button')

startButton.addEventListener('click', e => {
    clearGridFactory()
    gridFactory(100)
})

// function getRandomHexColor() {
//   return "#" + Math.floor(Math.random() * 0xFFFFFF)
//     .toString(16)
//     .padStart(6, "0");
// }

