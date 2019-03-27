// Your code here

let index = 0

function addMovement() {
  document.addEventListener('keydown', function(e) {
    e.preventDefault()
    console.log(e.which)
    standDodger()
    if (e.which == 37) {
      moveDodgerLeft()
    }
    else if (e.which == 39) {
      moveDodgerRight()
    }
    else if (e.which == 40) {
      lookForward()
    }
  })
}


function moveDodgerLeft() {
  const style = window.getComputedStyle(dodger)

  let leftNumbers = style.left.replace('px', '')
  let left = parseInt(leftNumbers, 10)
  let rightNumbers = style.right.replace('px', '')
  let right = parseInt(rightNumbers, 10)

  if (left > 0) {
  dodger.style.left = `${left - 10}px`
  dodger.style.right = `${right + 10}px`
  }
  animateLeftDodger()
}

function moveDodgerRight() {
  const style = window.getComputedStyle(dodger)

  let rightNumbers = style.right.replace('px', '')
  let right = parseInt(rightNumbers, 10)
  let leftNumbers = style.left.replace('px', '')
  let left = parseInt(leftNumbers, 10)

  if (right > 0) {
    dodger.style.right = `${right - 10}px`
    dodger.style.left = `${left + 10}px`
  }
  animateRightDodger()
}

function lookForward() {
  dodger.style.backgroundPosition = forwardSprite;
}



function animateRightDodger() {
  if (index < rightSprite.length) {
    dodger.style.backgroundPosition = rightSprite[index];
    index += 1;
  } else {
    index = 0;
    dodger.style.backgroundPosition = rightSprite[index];
    index += 1;
  }
}

function animateLeftDodger() {
  if (index < leftSprite.length) {
    dodger.style.backgroundPosition = leftSprite[index];
    index += 1;
  } else {
    index = 0;
    dodger.style.backgroundPosition = leftSprite[index];
    index += 1;
  }
}

function standDodger() {
  dodger.style.height = `108px`;
}

// function readDodger() {
//   bookSprite.forEach(function(action){
//     setTimeout
//   }
// }