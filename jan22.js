//***************************************CONDITIONALS**************************************************


//1]if condition
let a=1

if(true ) console.log('True')

	a=1

if(false ) console.log('True')


	a=1

if(a==1 ) console.log('True')


//2]if else 

	//in case we use if then there must be a condition,,if()  or else if()
 //in case we use only else in that statement there should not use condition,,,else 

        a=10
	let b=20
if(a>b){
	console.log('a is greater')
}

else{
		console.log('b is greater')

}

//3]if , else if


let c=10
let d=10

if (c>d){
	console.log('c is greater')

}
else if(c<d){
     console.log('d is greater')
}

//4]if , else if , else

//we can use multiple else if statements.

let e=100
let f=200


if(e>f){
	     console.log('e is greater')

}
else if(f>e){
	     console.log('f is greater')

}

else {
	     console.log('both are equal')

}


 e=200
 f=200

if(e>f){
	     console.log('e is greater')

}
else if(f>e){
	     console.log('f is greater')

}

else {
	     console.log('both are equal')

}


//switch 
//to write if, else if, else condition easily or with simple syntax.


let g=10

switch(g){
case 1: console.log('g value is 1')
break

case 2: console.log('g value is 2')
	break
case 3: console.log('g value is 3')
	break
case 5: console.log('g value is 5')
	break
case 8: console.log('g value is 8')
	break
case 10: console.log('g value is 10')
	break			

default :console.log('give valid number')
}


 g=10

switch(g){
case 1: console.log('g value is 1')
break

case 2: console.log('g value is 2')
	
case 3: console.log('g value is 3')

case 5: console.log('g value is 5')
	
case 8: console.log('g value is 8')
	break
case 10: console.log('g value is 10')
	break			

default :console.log('give valid number')
}

//******************************************************************************************************************


//1] Program to check given number is even or odd

let z=11

if (z%2==0){
	console.log('The given number is Even')
}

else{
	console.log('The given number is Odd')
}

//2]Number is palindrome or not
 
 //121 or 12321

z=123

let newString=z.toString()

console.log(newString)

let splitString=newString.split('')
console.log(splitString)

let reverseString=splitString.reverse()
console.log(reverseString)

let join=reverseString.join('')
console.log(join)

if(newString==join){
	console.log('The given number is a Palindrome')

}

else{
		console.log('The given number is a Not a Palindrome')

}


//3]  Given Number is Positive or negative

a=-23

if(a<0){
	console.log('negative')
}
else{
	console.log('positive')
}

//4]Determine the largest of three numbers

let w=100
let x=500
let y=300


if(w>x&&w>y){
	console.log('w is the largest number')
}

else if(x>y){
		console.log('x is the largest number')

}
else {
			console.log('y is the largest number')

}



// 4.Check if a year is a leap year


let year=2024

if (year%4==0){
	console.log('Is leap Year')
	
}
else{
	        console.log('Is not leap Year')
	    }


//5]Check if a string is a palindrome

let string='Malayalam'
// let string='malayalame'

let stringLower=string.toLowerCase()
console.log(stringLower)

let split=stringLower.split('')
let reverse=split.reverse()
let joine=reverse.join('')

if (stringLower==joine){
	console.log('Given string is a Plindrome')
}
else {
	console.log('Given string is not a Palindrome')
}

//6]Check if a number is a prime number

z=4

if (z%z==0&&z%1==0) {
	console.log('Given string is a Prime')
}
else {
	console.log('Given string is not a Prime')
}

/*
4: Write code using switch statement to show traffic signal light information

if it is red show ==>  "Stop! The color is red."

if it is green show ==> "Go! The color is green."

if it is yellow show ==> “Slow down! The color is yellow.”  */

let traficLight='green'

switch(traficLight){
case 'red':console.log("Stop! The color is red.")
	break

case 'green':console.log("Go! The color is green.")	
	break

default:console.log("Slow down The color is yellow.")

}

// 1.Determine the largest of three numbers
// 2.Check if a year is a leap year
// 3.Check if a string is a palindrome
// 4.Check if a number is a palindrome
// 5. Check if a number is a prime number
// 6.Check if a given array contains a specific element