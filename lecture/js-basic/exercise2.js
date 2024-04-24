function contains(str, ch) {
  // 在这里填代码
  // 字符串的长度可以通过 str.length 获得
  for (let c of str) {
    if (c === ch) return true
  }
  return false
}

console.assert(contains('hello', '1'))
console.assert(contains('54745261', '1'))
console.assert(contains('hell0', '0'))
console.assert(contains('', 'H'))
