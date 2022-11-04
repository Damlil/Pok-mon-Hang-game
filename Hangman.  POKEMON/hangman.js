let pokemons = [
    'charmander',
    'squirtle',
    'bulbasaur',
    'charizard',
    'chansey',
    'pikachu',
    'nidoking',
    'jigglypuff',
    'mew',
]


const startBtn = document.querySelector('.start')     //                START GAME BUTTON 
const hintBtn = document.querySelector('.hint')
const newGame = document.querySelector('.newGameBtn1')
const resetGame = document.querySelector('.newGameBtn')
const hiddenPokemon = document.querySelector('h3')
const displayHint = document.querySelector('h4');   //  
const charizardImg = document.querySelector('article');   //  
const usedLetters = document.querySelector('h5');   //  
const winScreen = document.querySelector('footer');   //  
const winOrLose = document.querySelector('.usedLetters');   //  
const loseScreen = document.querySelector('main');   //  
const gameScreen = document.querySelector('header');   //  
const wrongGuess = document.querySelector('.guessed');   //  
const timeH = document.querySelector('.timer');
let converted = []    //  store that pokemons letter with ( _ ) for each letter
let pokemonSeperated = []   // Seperate pokemons name in array
let usedKey = []
let lowerCase = ('[a-z]')
let gameOver = false
let mistakes = 0
let correctLetters = []
let sameLetter = []
let wrongLetters = []
let timeSecond = 60;
let penaltySec = -10;


startBtn.addEventListener('click', () => {
    if (pokemonSeperated != 0) {
        return
    }
    startBtn.style.display = 'none'
   
    startTimer()
    randomPokemon()
    keyUp()

    console.log(thePokemon);
})


hintBtn.addEventListener('click', () => {
    hintBtn.style.display = 'none'
    hints()
})


function keyUp() {
    document.addEventListener('keydown', (e) => {


        if (sameLetter.includes(e.code) === true) {    //// CHECKS IF WE ALREADY PRESSED THAT KEY 
            alert('already used that letter')               /// IF WE HAVE ,  ALERT SHOWS UP AND CODE STOPS
            {
                return
            }
        }

        if (!e.key.match(lowerCase)) {              /// IF KEY IS NOT LOWER CASE , CODE DOES NOT RUN!   
            return
        }

        else for (i = 0; i < pokemonSeperated.length; i++) {
            if (pokemonSeperated[i] === e.key) {
                correctLetters.splice(i, 1, pokemonSeperated[i])
                hiddenPokemon.innerHTML = correctLetters.join(' ')
                usedKey.push(e.key)

            }
        }

        if (e.code === 'CapsLock' || e.code === 'Tab' || e.code === 'Space' || e.code === 'ControlLeft'
            || e.code === 'ShiftLeft') {
            alert('Use lower case letters only please!')
            return
        }

        else if (correctLetters.includes(e.key) === false) {
            mistakes +=1
            wrongLetters.push(e.key)
            winOrLose.innerText = wrongLetters.join(' ')
            wrongGuess.innerText = mistakes
        }

        if (correctLetters.includes('_') === false) {
            gameOver = true
            timeH.style.display = 'none'
            winOrLose.innerText = 'YOU WON!'
            setTimeout(() => {
                gameScreen.style.display = 'none'
                winScreen.style.display = 'flex'
                newGame.addEventListener('click' ,()=> {
                    location.reload()
                })
                usedLetters.innerHTML = usedKey.join('')
            }, 3500);
        }
        
        sameLetter.push(e.code)
  


        if (mistakes === 1) {
            updateHangman()
        }
        if (mistakes === 2) {
            updateHangman()
            timeSecond = timeSecond + penaltySec
        }
        if (mistakes === 3) {
            updateHangman()
        }
        if (mistakes === 4) {
            hintBtn.style.display = 'flex'
            updateHangman()
        }
        if (mistakes === 5) {
            updateHangman()
        }
        if (mistakes === 6) {
            gameOver = true
            timeH.style.display = 'none'
            updateHangman()
            hiddenPokemon.innerText = 'the pokemon was :' + " " + thePokemon
            hintBtn.style.display = 'none'
            usedLetters.style.display = 'none'
            setTimeout(() => {
                loseScreen.style.display = 'flex'
                resetGame.addEventListener('click' ,()=> {
                    location.reload()
                })
                gameScreen.style.display = 'none'
                newGameFunction()
            }, 3500);
        }
    })
}

function gameOverTimer() {

    
    updateHangman()
    updateHangman()
    updateHangman()
    updateHangman()
    updateHangman()
    updateHangman()
    hiddenPokemon.innerText = 'the pokemon was :' + " " + thePokemon
    hintBtn.style.display = 'none'
    usedLetters.style.display = 'none'
    setTimeout(() => {
        loseScreen.style.display = 'flex'
        resetGame.addEventListener('click' ,()=> {
            location.reload()
        })
        gameScreen.style.display = 'none'
        newGameFunction()
    }, 3500);
}

function updateHangman() {
    document.getElementById('hangmanPic').src = './images/' + mistakes + '.png';
}

function randomPokemon() {
    thePokemon = pokemons[Math.floor(Math.random() * pokemons.length)];
    for (i = 0; i < thePokemon.length; i++) {
        pokemonSeperated.push(thePokemon[i])
        correctLetters.push('_')
        hiddenPokemon.innerHTML = correctLetters.join(' ')
    }
}


function newGameFunction() {
    newGame.addEventListener('click', () => {
        location.reload()
    })
}

function hints() {
   // hintBtn.style.display = 'none'
    if (thePokemon === 'chansey') {
        document.querySelector('.hiddenPokemon').src = './images/' + 'chansey' + '.png';
    }
    if (thePokemon === 'charmander') {
        document.querySelector('.hiddenPokemon').src = './images/' + 'charmander' + '.png';
    }
    if (thePokemon === 'squirtle') {
        document.querySelector('.hiddenPokemon').src = './images/' + 'squirtle' + '.png';
    }
    if (thePokemon === 'bulbasaur') {
        document.querySelector('.hiddenPokemon').src = './images/' + 'bulbasaur' + '.png';
    }
    if (thePokemon === 'charizard') {
        document.querySelector('.hiddenPokemon').src = './images/' + 'charizard' + '.png';
    }
    if (thePokemon === 'pikachu') {
        document.querySelector('.hiddenPokemon').src = './images/' + 'pikachu' + '.png';
    }
    if (thePokemon === 'nidoking') {
        document.querySelector('.hiddenPokemon').src = './images/' + 'nidoking' + '.png';
    }
    if (thePokemon === 'jigglypuff') {
        document.querySelector('.hiddenPokemon').src = './images/' + 'jigglypuff' + '.png';
    }
    if (thePokemon === 'mew') {
        document.querySelector('.hiddenPokemon').src = './images/' + 'mew' + '.png';
    }
}

function startTimer() {
    const countDown = setInterval(() => {
        timeSecond--;
        displayTime(timeSecond)
        if (timeSecond <= 0 || timeSecond < 1) {
            clearInterval(countDown)
            timeH.innerHTML = 'TIME IS UP!'
            gameOverTimer()
        }
    }, 1000)
}

function displayTime(second) {
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timeH.innerHTML = `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;

}








