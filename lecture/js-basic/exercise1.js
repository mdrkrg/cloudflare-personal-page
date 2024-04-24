let answer = prompt('1 + 2 + ... + 50 = ?')
let confirmed = confirm(`Is your answer ${answer}?`)
if (Number(answer) === 51 * 25) {
  alert('Bingo!')
} else {
  alert('Oops!')
}
