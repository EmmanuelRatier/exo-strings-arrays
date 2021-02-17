let code = 'YRMV'
let split = code.split('')
//console.log(split)
let nbr = 12
for (let elem of split) {
  let codeAscii = elem.charCodeAt()
  let codeAsciiIncrement = codeAscii += nbr;
  let decodeStarting = String.fromCharCode(codeAsciiIncrement)
  console.log(decodeStarting)
}