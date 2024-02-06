//1)Sum of Two Numbers:
//Write a function that takes two parameters, a and b, and returns their sum.

function twoNumSum(num1,num2){

 return num1+num2

}
console.log(twoNumSum(10,20))


//2)Check for Even or Odd:
//Create a function that takes a number as an argument and returns whether it is even or odd.


function eveOdd(num){

	if(num%2==0){
		console.log(`The number Given number ${num} is Even`)
	}
	else{
		console.log(`The number Given number ${num} is Odd`)

	}
}
eveOdd(15)

//3)Reverse a String:
//Implement a function that takes a string as input and returns the reversed version of that string.

let string ='Sairam'

function reverse(string){

  return  string.split('').reverse().join('')
}
console.log(reverse(string))


//4)Calculate Square:
//Write a function that calculates the square of a given number.

let sqr=(num)=>{
	console.log(num**2)
}
sqr(10)
/////or
let sqr1=(num)=>{
	return num**2
}

console.log(sqr1(10))

//5)Concatenate Strings:
//Create a function that takes two strings as parameters and returns their concatenation.

let str1='Sairam'
let str2='Dhyan'

let concat=function(str1,str2){

	return str1.toUpperCase() + ' '+ str2.toUpperCase()
}
console.log(concat(str1,str2))

//6)Check for Palindrome:
//Implement a function that checks if a given string is a palindrome.


function isPalindrome(str){

	let reverse=str.split('').reverse().join('')

	if(str.toUpperCase()===reverse.toUpperCase()){
		console.log('The given string is a Palindrome')
	}
	else{
		console.log('The given string is not a Plindrome')
	}


}
let string3= "Sairam"
//string3= "Medem"
isPalindrome(string3)


//7)Calculate Factorial:
//Write a function to calculate the factorial of a non-negative integer.

// 5==5*4*3*2*1=120

function factorial(factNum){

    
let num=1
	for(let i=1;i<=factNum;i++){
     
     num=i*num
		
	}
console.log(num)
}
factorial(5)


//8)Maximum of Two Numbers:
//Create a function that takes two numbers as parameters and returns the larger of the two.


function maxNum(num1,num2){

	if(num1>num2){
		return (`${num1}`)
	}
	else if(num1<num2){
		return(`${num2}`)
	}
}

console.log(maxNum(100,20))

//or

let maxNum2=(num1,num2)=>{
	return num1>num2?num1:num2;}

console.log(maxNum2(50,1000))

//or
let maxNum3=function(num1,num2){
	return num1>num2?num1:num2;
}

console.log(maxNum3(500,100))


//9)Greet a Person:
//Write a function that takes a person's name as a parameter and returns a greeting message.

let greet=(name)=>{
		console.log(`Hi ${name} good morning.`)
	return `${name} how are you.`

}

let name='Minnu'
console.log(greet(name))

//10)Calculate Average:
//Implement a function that takes an array of numbers and returns their average.

let array=[1,2,3,4,5,6]

function average(array){

	let sum=0;

	for (let i=0;i<=array.length;i++){

		sum +=i
	}
	return sum/2
// console.log(sum)
// let averageOfSum=sum/2

// return averageOfSum
}

console.log(average(array))