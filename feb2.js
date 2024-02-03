//     Nested Call back Function

// let function1=(a)=>{
// 	let function2=(b)=>{
// 		let function3=(c)=>{
//              return a+b+c
// 		}
// 		return function3
// 	}
// 	return function2
// }
// console.log(function1(10)(20)(30))




// function func1(num){

//     5*num

// }
// console.log(func1(10))


// function func1(num){

    
// }
// console.log(func1(10))


// function func2(num){
  
//    console.log( 5*num)
//    return 500

// }

// let out=func2(20)
// console.log(out)


// function func1(num){

//     return 5*num

// }
// console.log(func1(10))





///////////*****forEach*****///////////////


let array=['Ind','Pak','SL','Bang','Chi']


array.forEach((el,index,array)=>console.log(el))
array.forEach((el,ind)=>console.log(ind))
array.forEach((el,ind,array)=>console.log(ind+" "+array))



array.forEach((el,index,array)=>console.log(el.toUpperCase()))




let newArray=[]

array.forEach((el)=>newArray.push(el))
console.log(newArray)

array.forEach((el)=>newArray.push(el.toUpperCase()))
console.log(newArray)


/////////*****map******/////////////////

//let numbers=[1,2,3,4,5,6,7]


array=['Ind','Pak','SL','Bang','Chi']

let array2=array.map((el)=>el.toUpperCase())

console.log(array2)


let numbers=[1,2,3,4,5,6,7]

let sqrNum=numbers.map(el=>el**2)
console.log(sqrNum)

// let a=10
// function fun1(){
//  var a=20
// console.log(a)
// }
// var a=10
// console.log(a)
// fun1()