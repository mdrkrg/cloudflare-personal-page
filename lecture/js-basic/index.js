function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function randomPassword(k = 4) {
  let password = ""
  for (let i = 0; i < k; i++) {
    password += getRandomInt(10)
  }
  return password
}

let state = {
  answer: "",
  isWin: false,
  attempts: [],
  results: [],
  reset: () => {
    self.answer = ""
    self.isWin = false
    self.attempts = []
    self.results = []
  }
}

function userAttempt(answer, input) {
  state.answer = answer
  let result = new Array()
  state.attempts.push(input)
  for (let i = 0; i < input.length; i++) {
    if (input[i] === answer[i]) result.push(0)
    else if (answer.includes(input[i])) result.push(1)
    else result.push(2)
  }

  state.results.push(result)
  delete result
  if (state.attempts.length >= 6) return false
  if (input == answer) {
    state.isWin = true
    return true
  }
}

function resetChallenge() {
  state.reset()
  state.answer = randomPassword()
}

inputBox = document.getElementById('input')

btn = document.querySelector('#button')

btn.onclick = function() {
  userInput = inputBox.value
  if (inputBox.value.length != 4) alert("please input 4 numbers")
  userAttempt(state.answer, userInput)
  if (state.answer == userInput) alert("correct answer!")
  if (state.attempts.length > 6) alert("you lose")
}

rst = document.querySelector('#reset')

rst.onclick = resetChallenge

window.onload = resetChallenge
