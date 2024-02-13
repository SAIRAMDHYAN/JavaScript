// // let str='Sairamdhyanhp'


// // let arr=[]

// // for(let i=3;i<str.length;i=i+3){
	
// // 	arr.push(str[i])
// // }
// // 		console.log(arr)

// // let reverse=str.split('arr')

// // console.log(arr)
// ///////////
// // console.log(reverse)

// //.reverse().join('')



// // console.log(str.indexOf('r'))




// let str='Sairamdhyanhp'


// // let split=str.split('')
// // console.log(split)

// let arr=[]
// let arr2=[]

// for(let i=3;i<str.length;i=i+3){
// 	// let spl=slice(0,3)
// 	arr.push(str[i])

// 	//let spli=str.split(str[i]).reverse()
// 	let spli=str.split(str[i])

// 	arr2.push(spli)

// }




// //console.log(arr2.reverse())

// // console.log(arr)

// 	console.log(arr2)

// let reverse=str.split('arr')

// //console.log(arr)

// let str='abcd'


// to get the character code we use charCodeAt()
// to get the letter based on the code we use String.fromCharCode()
//Each leter du charcater code tagondu adakke 1 add madi then last 
//method use madi letter barutte.

// let str='sairam'
//  let charCodeArr=[]
// for(let i=0;i<str.length;i++){

//  let charCode=str.charCodeAt(i)

//     charCodeArr.push(charCode)

// }

// let string=''
//    for(let code of charCodeArr){
//    let abc=	String.fromCharCode(code+1)
//    string=string+abc
//    }

// console.log(string)


// let str='dhyan'
//  let string=''
// for(let i=0;i<str.length;i++){

//  let charCode=str.charCodeAt(i)
//  let abc=String.fromCharCode(charCode+1)

//      string=string+abc
// }
//    console.log(string)








///////////////////////////////////////////

let name='Sairamdhyanhp'

let splitSize=3
let splitWord=[]
let reversedStr=''

for(let i=0;i<name.length;i+=splitSize){

	let array=name.slice(i,i+splitSize) 
	let reversed=array.split('').reverse().join('')

     splitWord.push(reversed)
reversedStr=reversedStr+reversed
     
}

console.log(splitWord)

console.log(reversedStr)




// console.log(process.argv[2] )

// function sum(...num){
// 	let sum=0
// 	for(let data of arr){
// 	sum=sum+data
// }
// 	console.log(sum)
// }

// let arr=[1,2,3,4,5,6]
// sum(arr)

// function sum(num1,num2){
// 	return num1+num2
// }

//  let input1=process.argv[2]
//  let input2=process.argv[3]
//  console.log(sum(input1,input2))

//////////
// let sum = 0;

// for (let i = 2; i < process.argv.length; i++) {
//     sum += parseInt(process.argv[i]);
// }
// console.log(process.argv)
// console.log(process.argv.length)


// console.log("Sum of command line arguments:",sum)

// console.log(sum(process.argv[],[]))


// let sum=0

// for(let i=2;i<process.argv.length;i++){
  
// 	sum=sum + parseInt(process.argv[i])
// }
// console.log(typeof process.argv.length)
// console.log('The sum for the input taken in terminal is',sum)


/// square

let squaredNumbers=[]
let sum=0
for(let i=2;i<process.argv.length;i++){
   
 //let sqr=process.argv[i]*process.argv[i]

   squaredNumbers.push(process.argv[i]**2)
   
}
console.log('Square of each elements of array is ',squaredNumbers)

























