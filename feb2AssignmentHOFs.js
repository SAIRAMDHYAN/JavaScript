///////////////////////////******Coding Questions on HOFs*****//////////////////////////


//Implement forEach:
//Write a function myForEach that takes an array and a callback function and performs 
//the same action as the forEach method.

function myForEach(arr,callback){

	for(let i=0;i<arr.length;i++){
		callback(arr[i],i)
	}
}
let number=[100,90,80,70,60,50]
myForEach(number,(num,index)=>{
	console.log(`${num} ${index}`)
})




// //2)Implement map:
// //Create a function myMap that takes an array and a callback function and
// //returns a new array with the results of applying the callback to each
// //element.

// let array5=[1,2,3,4,5,6,7,8]

// let newArray=array5.map(el=>{return el*10})

// console.log(newArray)


// //3)Implement filter:
// //Write a function myFilter that takes an array and a callback function and returns a new array containing only the elements that satisfy the callback condition

// let array6=[10,20,30,40,70,80,90,50,60,]

// let seniorCitizen=array6.filter((el)=>el<=60)

// console.log(seniorCitizen)


// //4)Implement reduce:
// //Create a function myReduce that takes an array, a callback function, and an initial value, and applies the callback function to reduce the array to a single value.

// let array7=[10,20,30,40,70,80,90,50,60,]

// let myReduce=array7.reduce((accum,el)=>accum+el)

// console.log(myReduce)


// //5)Function Composition:
// //Implement a function compose that takes two functions and returns a new function that is the composition of the two.


// function sqr(num1){
//     return  num1**2

// }
// //console.log(sqr(10))

// function cube(num2){
// 	return num2**3
// }

// //console.log(cube(10))


// function compose(sqr,num1,cube,num2){
// 	let out=sqr(num1)+cube(num2)

// console.log(out)

// }

// compose(sqr,10,cube,10)


// //7)Higher-Order Function Practice:
// //Given an array of numbers, use higher-order functions to find the sum of squares of only the even numbers.

// let array8=[1,2,3,4,5,6,7,8]
// function sumSqr(){

// let even=array8.filter(el=>el%2==0)

// let sqr=even.map(el=>el**2)

// let sum=sqr.reduce((total,el)=>total+el)

// return sum
// }

// //console.log(sumSqr(array8))

// function hof(a){

// console.log('If function is not invoked=',a)
     
// console.log('calling a hof=', a())
// return a()

// }

//  console.log(hof(sumSqr))


// //////////////

// array8=[1,2,3,4,5,6,7,8]
// function sumSqr(){

// let even=[]

// for(let i=0;i<array8.length;i++){

// if(array8[i]%2==0){
// 	even.push(array8[i])
// }
// }console.log('even numbers', even)

// let sqr=[]

// for(let i=0; i<even.length;i++){

// 	sqr.push(even[i]**2)
// }console.log('sqr numbers', sqr)
	
// 	let sum=0
// 	for(let i=0;i<sqr.length;i++){
// 		sum+=sqr[i]
// 	}
// 	console.log('sum of numbers', sum)
// }
// sumSqr()



// //let a=0
// 	// for(let num of array8){
// 	// 	if(num%2==0){
// 	// 		a=a+num
// 	// 	}
// 	// }


// //8)Custom Map and Filter:
// //Write a function customMap and customFilter that behave similarly to
// // the built-in map and filter functions.

// //custom Map

// let  array=[1,2,3,4,5,6,7]
// customMap = (array)=>{
// 	let newArray=[]
// 	for(let i=0;i<array.length;i++){
// 		newArray.push(array[i]**3)


// 	}
// 	return newArray
// }
// console.log(customMap(array))

// // customerFilter

// array=[10,20,30,40,50,60,70]


// custumFilter=(array)=>{
// 	let voters=[]
// 	for(let age of array){

// 		if(age>18){
// 			voters.push(age)

// 		}
// 	}return voters
// }
// console.log(custumFilter(array))









// function myForEach(arr,callback){

// 	for(let i=0;i<arr.length;i++){
// 		callback(arr[i],i,arr)
// 	}
// }
// const number=[1,2,3,4,5]

// myForEach(number,(num,index)=>{
// 	console.log(`The number at  index ${index} is ${num}`)
// })

//////////////////////
//function myForEach(arr,callback){
// 	for(let i=0;i<arr.length;i++){
// 		callback(arr[i],i,arr)
// 	}
// }

// let number=[1,2,3,4,5,6,7,8,9,10]
// // myForEach(number,(num,index)=>{
// // 	console.log(`The number at ${index} is ${num}`)
// // })


// let callback=(num,index,array)=>{
// 	//console.log(`The number at ${index} is ${num}`)
// 	let out=array.map(el=>el**3)
// 	console.log(`The cube of given elements is ${out} `)
// }
// myForEach(number,callback)