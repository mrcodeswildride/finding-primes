let number = document.getElementById(`number`)
let primesButton = document.getElementById(`primesButton`)
let box = document.getElementById(`box`)

primesButton.addEventListener(`click`, findPrimes)

number.addEventListener(`keydown`, keyPressed)
number.focus()

function findPrimes() {
  let numberValue = number.value.trim()

  if (numberValue != `` && !isNaN(numberValue)) {
    if (numberValue < 2 || numberValue > 10000) {
      box.innerHTML = `Upper bound must be between 2 and 10,000.`
    }
    else {
      let crossedOut = []

      for (let i = 2; i * i <= numberValue; i++) {
        if (!crossedOut[i]) {
          for (let j = i * i; j <= numberValue; j += i) {
            crossedOut[j] = true
          }
        }
      }

      box.innerHTML = ``

      for (let i = 2; i <= numberValue; i++) {
        if (!crossedOut[i]) {
          let numberDiv = document.createElement(`div`)
          numberDiv.classList.add(`number`)
          numberDiv.innerHTML = i
          box.appendChild(numberDiv)
        }
      }
    }
  }

  number.focus()
}

function keyPressed(event) {
  if (event.keyCode == 13) {
    findPrimes()
  }
}