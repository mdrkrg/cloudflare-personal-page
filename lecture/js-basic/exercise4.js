function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function randomPassword(k = 4) {
  let password = new Array()
  for (let i = 0; i < k; i++) {
    password.push(getRandomInt(10))
  }
  return password
}

var state = {
  answer: "",
  isWin: false,
  attempts: [],
  results: []
}

function userAttempt(answer, input) {
  let result = new Array()
  state.attempts.push(input)
  for (let i = 0; i < input.length; i++) {
    if (input[i] === answer[i]) result.push(0)
    else if (answer.includes(input[i])) result.push(1)
    else result.push(2)
  }

  state.results.push(result)
  delete result
  if (state.attempts.length > 6) return false
}



while (true) {
  if (!userAttempt(randomPassword(), prompt("input")))
    break
}
