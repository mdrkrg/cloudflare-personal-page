function userAttempt(answer, input) {
  let result = new Array()
  for (let i = 0; i < input.length; i++) {
    if (input[i] === answer[i]) result.push(0)
    else if (answer.includes(input[i])) result.push(1)
    else result.push(2)
  }
  return result
}


console.log(userAttempt("1234", "1324"))
console.log(userAttempt("1238", "1324"))
