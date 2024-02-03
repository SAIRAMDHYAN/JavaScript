// Heigher order functions

 //This are the function which takes other function as an argument or 
 // returns a function is callled heiger order function.



// function sqr(num1){
// 	return num1**2

// }

// function cube(num2){
// 	return num2**3
// }

// function main_func(fun1){
//   return fun1(5)
// }
// console.log(main_func(cube))



// function func1(num){
// 	return num*num
// }

// console.log(func1(10))

function func1(num){
	return num*num
}

function func2(func){
	return func1(10)
}

console.log(func2())



////////

let x=10

console.log(x++)

let y='10'
// y++
// console.log(y)

let c=x+y

console.log(c)
console.log(typeof c)
console.log(isNaN(c))
