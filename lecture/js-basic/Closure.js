// 闭包 Closure
function createCounter() {
  let counter = 0
  return function() { // Closure take place here
    counter++
    return counter
  }
}

const count1 = createCounter()
const count2 = createCounter()
console.log(count1())
console.log(count1())
console.log(count1())
console.log(count2())
