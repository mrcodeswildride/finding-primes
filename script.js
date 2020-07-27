let number = document.getElementById(`number`)
let primesButton = document.getElementById(`primesButton`)
let primesParagraph = document.getElementById(`primesParagraph`)

primesButton.addEventListener(`click`, findPrimes)

number.addEventListener(`keydown`, keyPressed)
number.focus()

function findPrimes() {
  let numberValue = number.value.trim()

  if (numberValue != `` && !isNaN(numberValue)) {
    if (numberValue < 2 || numberValue > 10000) {
      primesParagraph.innerHTML = `Upper bound must be between 2 and 10,000.`
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

      primesParagraph.innerHTML = `Primes:`

      for (let i = 2; i <= numberValue; i++) {
        if (!crossedOut[i]) {
          primesParagraph.innerHTML = `${primesParagraph.innerHTML} ${i}`
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