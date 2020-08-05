document.addEventListener('DOMContentLoaded', () => {
    const bird = document.querySelector('.bird')
    const display = document.querySelector('.game-container')
    const ground = document.querySelector('.ground')
    const pipes = document.querySelector('.pipes')
    const score = document.querySelector('.score')

    let birdLeft
    let gravity
    let birdBottom
    let pipeScroll
    let currScore

    let gameState
    let pipeState

    let timerId
    let movePipe
    let objectPosition

    let randPipeHeight


    function startGame() {
        bird.style.display = "initial"
        birdBottom -= gravity
        bird.style.bottom = birdBottom + 'px'
        bird.style.left = birdLeft + 'px'

        score.innerHTML = currScore
    }

    function control(e) {
        if (gameState && e.keyCode === 32) {
            jump()
        }

        if (!gameState && e.keyCode === 32) {
            startIntervals()
        }
    }

    function jump() {
        if (gameState && birdBottom < 715 && ((birdBottom + 50) < 715)) {
            birdBottom += 50
            bird.style.bottom = birdBottom + 'px'
        }
    }

    document.addEventListener('keyup', control)

    function objPosition() {
        if (birdBottom <= 110) {
            clearIntervals()
        }
    }

    function checkIfHit() {
        if (((bird.style.height + birdBottom) <= pipe.style.height) 
        && (150 + 40) >= (500 - pipeScroll - 40)
        && (150 <= (500 - pipeScroll - 40))) {
            clearIntervals()
            console.log(150 + 40)
            console.log(500 - pipeScroll + 40)
        }

    }

    let pipeOne = document.createElement('div');
    pipeOne.className = 'pipe';

    let pipeTwo = document.createElement('div');
    pipeTwo.className = 'pipe';

    pipeStates = {'pipeOne': false, 'pipeTwo': false}

    function addPipe() {
        newPipe.style.height = randPipeHeight + 'px'
        pipes.appendChild(newPipe);
    }

    // function pipeMovement() {
        
    //     checkIfHit()

    //     if (pipeScroll >= 315 && pipeState) {
    //         currScore += 1
    //         score.innerHTML = currScore
    //         pipeState = false
    //     }


    //     if (pipeScroll < 460) {
    //         if (score == 5) {
    //             pipeScroll += 6
    //         } else {
    //             pipeScroll += 1
    //         }
    //     } else {
    //         randPipeHeight = Math.floor(Math.random() * (400 - 200 + 1)) + 200
    //         pipeScroll = 0
    //         pipeState = true
    //     }
    //     pipe.style.right = pipeScroll + 'px'
    // }

    function resetVariables() {
        birdLeft = 150
        birdBottom = 350
        gravity = 2
        pipeScroll = 0
        currScore = 0

        gameState = true
        pipeState = true

        randPipeHeight = Math.floor(Math.random() * (400 - 200 + 1)) + 200
    }

    function startIntervals() {
        newPipe.style.height = randPipeHeight + 'px'
        pipes.appendChild(newPipe);
        pipeStates[""]

        resetVariables()
        addAPipe = setInterval(addPipe, 3000)
        timerId = setInterval(startGame, 20)
        // movePipe = setInterval(pipeMovement, 2)
        objectPosition = setInterval(objPosition, 190)
    }

    function clearIntervals() {
        gameState = false
        clearInterval(timerId)
        clearInterval(objectPosition)
        clearInterval(movePipe)
        
    }

    resetVariables()
    startIntervals()
})