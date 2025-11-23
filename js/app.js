/*-------------------------------- Constants --------------------------------*/
const correct_anwers = {
    'cell1': 2,
    'cell2' : 4,
    'cell3' : 2,
    'cell4' : 5,
    'cell5' : 4,
    'cell6' : 5,
    'cell7' : 3,
    'cell8' : 10
}
/*------------------------ Cached Element References ------------------------*/
let playBtn, checkBtn, resetBtn, numbersBank, inputCells, messageText
/*-------------------------------- Functions --------------------------------*/
function init() {
    playBtn = document.getElementById('playBtn')
    checkBtn = document.getElementById('checkBtn')
    resetBtn = document.getElementById('resetBtn')
    numbersBank = document.getElementById('numbersbank')
    inputCells = document.querySelectorAll('.cell.input-cell input')
    messageText = document.getElementById('messageText')
    
    playBtn.addEventListener('click', startGame)
    resetBtn.addEventListener('click', startGame)
    checkBtn.addEventListener('click', checkAnswers)
    disableGame()
}

function disableGame() {
    numbersBank.style.display = 'none'
    
    inputCells.forEach(input => {
        input.disabled = true
        input.value = ''
    });
    checkBtn.disabled = true
    resetBtn.disabled = true
}

function startGame() {
    numbersBank.style.display = 'grid'
    inputCells.forEach(input => {
        input.disabled = false
        input.value = ''
    });
    checkBtn.disabled = false
    resetBtn.disabled = false
    playBtn.disabled = true
    document.getElementById('messageText').textContent = '🚩 Game Started! Fill in the numbers'
}

function checkAnswers() {
    let allCorrect = true

    inputCells.forEach(input => {
        const userAnswer = parseInt(input.value)
        const CorrectAnswers = correct_anwers[input.id]
        
        if (userAnswer !== CorrectAnswers) {
            allCorrect = false
            input.parentElement.classList.add('incorrect')
        }
        else {
            input.parentElement.classList.remove('incorrect')
        }
    })
    
    if (allCorrect) {
        messageText.textContent = '🏆 You Win! All answers are correct!'
    }
    else {
    messageText.textContent = '🫨 Some answers are not correct, try again'
    }
}

/*-------------------------------- Events Listener --------------------------------*/
document.addEventListener('DOMContentLoaded', init)