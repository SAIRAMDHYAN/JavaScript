////////////////////         PROMISES

// let myPromise=new Promise((resolve,reject)=>{

// 	let condetion=true

// 	if(condetion==true){

// 		resolve ('Promise is resolved')
// 	}else{
// 		reject ('Promise is rejected')
// 	}
// })


// myPromise.then(()=>console.log('Condetion is true so continue'))
// .catch(()=>console.log('Condition is false so Stop exegution'))


// console.log(myPromise)




// let promise1=new Promise((resolve,reject)=>{

//    setTimeout(()=>{
//    	resolve('foo',5000)
//    })


// })

// promise1.then((value)=>{
// 	console.log(value)
// }).catch(()=>{
// 	console.log('Rejected')
// })

// console.log(promise1)


// console.log('hi')


// Original array with nested arrays
let originalArray = [[1,2], 2, 3,4, 5, 6];
// Shallow copy using spread syntax
let shallowCopiedArray = [...originalArray];
//before modify
console.log("Original array:", originalArray);
console.log("Shallow copied array:", shallowCopiedArray);
// Modify the original array
originalArray[0][0] = 0;
shallowCopiedArray[0][1]=5;
console.log("Original array:", originalArray);
console.log("Shallow copied array:", shallowCopiedArray);
 
// Ex2:
// // Original object with nested object
// let originalObject ={student:{name:"deepa"},age:24}
// // Shallow copy using spread syntax
// let shallowCopiedobject = {...originalObject};
// //before modify
// console.log("Original object:", originalObject);
// console.log("Shallow copied object:", shallowCopiedobject);
// // Modify the original object
// originalObject.student.name = "ram";
// console.log("Original object:", originalObject);
// console.log("Shallow copied object:", shallowCopiedobject);




//  DEEP COPY


const originalObject = { a: 1, b: { c: 2 } }; 
const deepCopy = JSON.parse(JSON.stringify(originalObject));
console.log("originalObject",originalObject)
console.log("deepCopy",deepCopy)
//after modify
deepCopy.a = 3; // Changes deepCopy, but not originalObject
console.log("originalObject",originalObject)
console.log("deepCopy",deepCopy)
originalObject.b.c = 4; // Changes originalObject, but not deepcopy
console.log("originalObject",originalObject)
console.log("deepCopy",deepCopy)



/////////////   PROMISES


let pro=new Promise((resolve,reject)=>{

let a=1+2

if(a==2){
	resolve('Successful')
}else{
	reject('Failed')
}

})

console.log(pro)

pro.then((value)=>{
	console.log(` The given program is ${value} `)
}).catch((value)=>{
	console.log(`The given program is  ${value}`)
})



//////   Promise methods


let pro1=new Promise((resolve,reject)=>{
	let recorded=false

if(recorded==true){
	resolve('Video 1 is recorded')
}else{
	reject('Video 1 is not-recorded')
}
})

console.log(pro1)


let pro2=new Promise((resolve,reject)=>{
	let recorded=true

if(recorded==true){
	resolve('Video 2 is recorded')
}else{
	reject('Video 2 is not-recorded')
}
})

console.log(pro2)

let pro3=new Promise((resolve,reject)=>{
	let recorded=true

if(recorded==true){
	resolve('Video 3 is recorded')
}else{
	reject('Video 3 is not-recorded')
}
})

console.log(pro3)

Promise.allSettled([pro1,pro2,pro3]).then((message)=>{
	console.log(message)
}).catch((message)=>console.log(message))



// Whe all method is used 1 promises is rejected so all are rejected,,enters catch()block
Promise.all([pro1,pro2,pro3]).then((message)=>{
	console.log('When we use all method==>',message)
}).catch((message)=>console.log('When we use all method==>',message))





// Whe any method is used 1 promises is full filled,enters then() block

Promise.any([pro1,pro2,pro3]).then((message)=>{
	console.log('When we use any method==>',message)
}).catch((message)=>console.log('When we use any method==>',message))


// Whe race method is used 1 promises is full filled,enters then() block

Promise.race([pro1,pro2,pro3]).then((message)=>{
	console.log('When we use race method==>',message)
}).catch((message)=>console.log('When we use race method==>',message))



let promise1=Promise.resolve(50)
let promise2=30;
let promise3=new Promise((resolve,reject)=>{

	setTimeout(resolve,1000,'Sairam')
})

Promise.all([promise1,promise2,promise3]).then((value)=>console.log(value))

console.log(promise1,promise2,promise3)



let prom1=Promise.reject(20)
let prom2=new Promise((resolve,reject)=>setTimeout(resolve,1000,'Hello'))
let prom3=new Promise((resolve,reject)=>setTimeout(resolve,500,'HI'))

let prom=[prom1,prom2,prom3]

Promise.any(prom).then((ele)=>console.log(ele))



let prome1=Promise.resolve(20)
let prome2=new Promise((resolve,reject)=>setTimeout(resolve,1000,'Hello'))
let prome3=new Promise((resolve,reject)=>setTimeout(resolve,500,'HI'))


Promise.race([prome1,prome2,prome3]).then((value)=>console.log(value))



