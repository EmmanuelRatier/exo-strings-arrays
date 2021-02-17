let str =
  '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

let newStr = str.trim().toLowerCase()
let theName = 'bob'
if (newStr.includes(theName)) {
  console.log(`${theName} is present`)
} else {
  console.log(`${theName} is not present`)
}
