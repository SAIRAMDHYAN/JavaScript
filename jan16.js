
//Variables

// Variables are the containers to store data.

var a=20
let b='hi'
let c=' good morning'
const d='sairam'


console.log(10)
console.log(a)
console.log(b+c)
console.log(d)

//To check type of data we use a built in function ==> typeof()
console.log('Type of data is ' + typeof(d))

//Data Type

//Primitive Data type:-

//1)Integers 
  // It is used to store 2 type of numbers i.e., whole num and decimal num.

const wholeNum=10
let decNum=11.10
console.log(wholeNum)
console.log(decNum)

const height=5.7
let weight=65

console.log(height)
console.log(weight)
console.log('Type of data is ' + typeof(weight))

//2)String 
   //Strings are the tectual data that are written inside ' ' or " " or ` `[back tick].

//Declare a variable and asign string to it.

const firstName='M S '
const Last_name='Dhoni'
console.log(firstName+ Last_name)



let info='He was captain of "Indian  cricket team"'
let info2="He was captain of 'Indian  cricket team'"
let info3="He was captain of 'Indian  cricket team' and 'Channai Super Kings'"
let info4=`He was captain of "Indian  cricket team" and 'Channai Super Kings'`
let info5="He was captain of \"Indian  cricket team\" and 'Channai Super Kings'"

//If i use like this it will through Syntax Error.
//let info='He was captain of 'Indian  cricket team''
//let info3="He was captain of "Indian  cricket team" and 'Channai Super Kings'"

console.log(info)
console.log(info2)
console.log(info3)
console.log('used Backtick to display' +info4)
console.log('used escape caracter to display' + info5)

//Used BackTick to print as it is
let information=`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
printer took a galley of type and scrambled it to make a type specimen book. It has survived 
not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`

console.log(information)

console.log('Length of information text => ' + information.length)

console.log('The letter present in respective Index is ==> ' + information[0])
console.log('The letter present in respective Index is ==> ' + information[12])
console.log('The letter present in respective Index of last letter ==> ' + information[information.length-1])



/* In Js data is read line by line. So if text continues in next line at the end of each line we need to use Escape character \\
  so that text is continuesly printed*/

//Escape characters
/*
\  => before single coat, double coat inside a string.

\n ==>to start in new line

\t ==>to give 1 tab space

\\  => ti print \
*/

let information2=`'Lorem Ipsum \t is simply dummy text of \n the printing and typesetting industry \\ Lorem Ipsum has been the industrys  standard dummy text ever since the 1500s, when an unknown'
'printer took a galley of type and scrambled it to make a type specimen book.'`

console.log(information2) 