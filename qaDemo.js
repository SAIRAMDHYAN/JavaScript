//Primitive Data type

//1.Number

let a=10

//2.String

let b='Sairam'

  let subStr=b.substr(0,3)

  console.log(subStr)

  //sai

  let subString=b.substring(1,4)
  console.log(subString)

  //air

//3.Boolean

let c=true


//4.Undefined

let d;

//5.Null
let e=null

//6.Nan
let f='Sairam'/5

console.log(f)

//Non Primitive data type


//1. Array

let g=[1,2,3,4,5]





let name='Sairam'

console.log(name.replace('sairam','dhyan'))


//toUpperCase

console.log(name.toUpperCase())

//toLowerCase

console.log(name.toLowerCase())

//charAt

console.log(name.charAt(3))

//charCodeAt

console.log(name.charCodeAt(0))
console.log(name.charCodeAt('s'))
console.log(name.charCodeAt(2))

//concat

let lastName='Dhyan'

console.log(name.concat(' '+lastName))

//.indexOf()
console.log(name.indexOf('r'))

//lastIndexOf()
console.log(name.lastIndexOf())

//slice()
let sent='My name is Sairam'

let slice=sent.slice(0,6)

console.log(slice)

//substr()
 subStr=sent.substr(0,10)
console.log(subStr)

//subString()

 subString=sent.substring(0,7)
console.log(subString)

//trim()

sent='     My name is Sairam         '

console.log(sent.trim())
console.log(sent.trimStart())
console.log(sent.trimEnd())

//split
sent='My name is Sairam'
console.log(sent.split(''))
console.log(sent.split(' '))
console.log(sent.split('a').reverse())
console.log()

//replace
console.log(sent.replace('Sairam','Dhyan'))

//repeat()

console.log(sent.repeat(5))

//startsWith()

console.log(sent.startsWith('S'))


//endsWith()

console.log(sent.endsWith('.'))

//includes()

console.log(sent.includes('is'))

//search()

console.log(sent.search(/name/gi))

//match()

console.log(sent.match(/name/gi))

//pad()

// const originalString = "hello";
// const paddedString = originalString.padStart(8, "123");

// console.log(paddedString); 
let num='2'

console.log(num.padStart(5,'0'))
console.log(num.padEnd(5,'0'))


let a1=10;
let a2=10;

console.log(a1**3)
console.log(20**3)














