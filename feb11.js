
// ///////////////////              FUNCTIONS 

// // It is a reusable block of code that is used to perform repetative task.


// // function func(){

// // 	console.log('Hello world')
// // } 

// // func()


// // function func1(para){

// // 	console.log(para)
// // }

// // func1('Hello !!')



// // let fun3=function(){
// // 		return 'Hello'

// // }
// // console.log(fun3())

// ////

// (function(num){
//   console.log(num*num)

// })(20)


// // (function () {
// //   // code inside the function
// //   var x = 10;
// //   console.log(x);
// // })();


// //// arrow func

// let func4=(num)=>console.log(num**3)

// func4(10)


// /////

// function sum(){
// let sum=0

// 	for(let i=0;i<arguments.length;i++){
      
//        sum+=arguments[i]

// 	}
// 	console.log(sum)
// 	console.log(arguments)
// }
// sum(10,20,30,40,50)


// /////////  HIGHER ORDER FUNCTIONS


// function funcSqr(num1){
//    return num1*2
// }

// function funcCube(num2){
// 	return num2**3
// }

// function total(sqr,cube){

//  console.log(sqr(10)+cube(10))
// }

// total(funcSqr,funcCube)





// //  

// let func1=(a)=>{
// 	let func2=(b)=>{
// 		let func3=(c)=>{
// 			return a+b+c
// 		}
// 		return func3
// 	}
// 	return func2
// }

// let arrowOutput=func1(10)(20)(20)

// console.log(arrowOutput)



// /////////////// set timeout interval

// setTimeout(()=>console.log('hi'),1000)

// // function interval(){
// // console.log('Hello')
// // }

// // setInterval(interval,1000)


// let array=[1,2,3,1,2,3,4,5,1,2,4,5]

// //Op  {1:3,2:3,3:2,4:2,5:2}

// console.log(array.sort())

// // [
// //   1, 1, 1, 2, 2,
// //   2, 3, 3, 4, 4,
// //   5, 5
// // ]

// let sortedArray=array.sort()

// let output={}

// for(let ele of sortedArray){

//  //output[ele] = 1;

//    if (output[ele]) {
//       output[ele]++;

//      } 
//      else{
//       output[ele] = 1;
//   }
//   }

// console.log(output)



// let obj={}

// let a=[1,2,3,4,2,4]

// let summ=[]
// for (let i of a){

//   if(summ[i])	{
//   	summ[i]++
//   }else{
//   	summ[i]=1
//   }
// }

// console.log(summ)


// ///////////////////////////////        forEach()


// let aArray=[100,200,300,400,500,600]

// aArray.forEach(ele=>console.log(ele/2))


// ////////            map()

// let bArray=[10,20,30,40,50]

// let mappedArray=bArray.map((el,index,arr)=>el**3)

// console.log(mappedArray)


// ///             filter()

// let cArray=[11,12,13,14,15,16]

// let filterArray=cArray.filter((el,index,arr)=>el%2==0)

// console.log(filterArray)


// let mark=[
//     {
//     	subject:'Maths',
//     	marks:30

//     },

//       {
//     	subject:'Kannada',
//     	marks:99

//     },

//   {
//     	subject:'English',
//     	marks:90

//     },

//   {
//     	subject:'Science',
//     	marks:85

//     },
//       {
//     	subject:'social',
//     	marks:85

//     },
//       {
//     	subject:'hindi',
//     	marks:25

//     }
// ]

// let passedMarks=mark.filter((el=>el.marks>35))

// console.log(passedMarks)


// //////////////   reduce()



// let totalMarks=mark.reduce((agr,currentValue)=>agr+currentValue.marks,0.01)

// console.log(totalMarks)



// ////////////     sume()


// let dArray=[19,33,53,18,10,46,13,65,87,36,45]

// let voters=dArray.some(el=>el>18)

// console.log('Fewe are voters ',voters)


// ////////////     every()


// let eArray=[19,33,53,46,65,87,36,45]

// let all_voters=eArray.every(el=>el>18)

// console.log('All are voters ',all_voters)





//////////////////////  DESTRUCTURING           

// It is used to asign a elements of array or properties of object to a variable.


///  Array destructuring

let x=[10,20,30]

let [a,b,c]=x

console.log('Array destructuring ',b)

let y=[10.20,30,40,50,60,70]
let [d,e,...f]=y

console.log('Array destructuring using rest operator',f)


//  Object destructuring

let fullstack={
  
          frontend:['html','css','js'],
          backend:['NodeJs','ExpressJs'],
          database:['MySQL','MongoDB']

}
let {frontend:fe,backend:be,database:db}=fullstack
console.log(db)



///  spread operator

array1=[10,20,30]

array2=[10.20,30,40,50,60,70]

// to  concat

let array3=[...array1,...array2]
console.log('to  concat Array ',array3)

// COPPY ARRAY

let array4=[...array3]

console.log('COPPY ARRAY ',array3)


//  Passing array of argument to a function
array1=[10,20,30,40,50]
function sum(num1,num2,num3){


	console.log(num1+num2+num3)
}
sum(...array1)



/// copying object 

let student={name:'sairam',age:23}

let myself={...student}

console.log('copying object',myself)


//  merging 2 objects


let merge2Obj={...student,...fullstack}
console.log('copying object',merge2Obj)


///////       rest operator


// to pass rest of element to a function as parameter


function summ(a,b,...c){

  console.log('a =>',a,"b =>",b,"c =>",c)
}
summ(10,20,30,40,50,60,70)



///     passing argument from one function to another



function greet(name,age){

	console.log(`Hi myself ${name} and iam ${age} old.`)
}

function passArgument(...arg){
    greet(...arg)

}
passArgument('Sairam',23)



///////////////    CLOSURES

///  the element in the inner function accessing the variable present 
//in the outer function.

function outer(){

     let x=10
	function inner() {
		console.log(x)
	}
	inner()
}

outer()


//////       RECURSION

// Calling same function inside same function

   
   function reduce(num){

  if(num==0){
  	return
  }
console.log(num)
  reduce(num-1)

   }
reduce(5)

  //
  function factorial(num){

  if(num==1){
  	return 1
  }

return num*factorial(num-1)


  }
console.log(factorial(7))



//////////////           OBJECT 


let students={

	first_name:'Sairam',
    last_name:'Dhyan',
    age:23,
    fullname:function(first_name,last_name) {
    	return this.first_name +' '+this.last_name
    }

}

console.log(students)
console.log(students.age)
console.log(Object.keys(students))
console.log(Object.values(students))
console.log(students.fullname())


//////////////      OBJECT METHODS 


///////    call()


let student2={
   
   first_name:'Minnu',
    last_name:'Gowda',

}

console.log(students.fullname.call(student2))


///      apply()

 students={

	first_name:'Sairam',
    last_name:'Dhyan',
   
    details:function(age,place) {
    	return `Myself ${this.first_name }+ ' ' + ${this.last_name}, i am ${age} years old,i am from ${place}`
    }

}

console.log(students.details.apply(students,[23,'N.R.Pura']))



//        bind()


console.log(students.details.bind(students)(23,'N.R.Pura'))






////////////////    try{} catch(){}


try{

	let first_name='Muddu'
	let last_name=

	console.log(first_name.concat(last_name))
}
catch(err){
   console.log('Enter a valid input')
}




/////////////////////////        OOPs



//////   class
// It is a template for creating object

class Vehicle{
   constructor(wheels,color,brand){
   	this.wheels=wheels;
   	this.color=color;
   	this.brand=brand
   	console.log(wheels,color,brand)
   }

   model(year){
   	this.vehicle_model=year
   }

   regNum(regNum){
   	this.RegisterNumber=regNum
   }
}

let car=new Vehicle(4,'red','Skoda')  ///Instantiation
let bike=new Vehicle(2,'Black','Royal Enfield')
console.log(car.brand)
console.log(bike.color)

bike.model(2022)
console.log(bike)

car.regNum('KA 04 MN 7970')
console.log(car)
console.log(car.RegisterNumber)


//   static

class Vehicles{
   constructor(name,brand,color){
   	this.name=name;
   	this.brand=brand;
   	this.color=color;

   	console.log(name,brand,color)
   }

   static models(year){
   	return this.year=year
   }

   regeNum(regNum){
   	this.RegisterNumber=regNum
   }
}

let carr=new Vehicles('Thar','Mahendra','Black')


console.log(Vehicles.models(2021))




/////////      INHERITANCE


// Accessing the properties from parent class and using it in child class is called Inheretance.



class Father{
	constructor(cycle,scooter){
     this.cycle=cycle;
     this.scooter=scooter;

   }
}

class Son extends Father{
	constructor(cycle,scooter,bike,car){
		super(cycle,scooter)
		this.bike=bike;
		this.car=car;


	}
}

let father=new Father('Herculus','Bajaj')

let son_1=new Son('Herculus','Bajaj','Royal Enfield','Thar')

let son_2=new Son('Hero','Vespa','Dominor','Kousq')

console.log(father)

console.log(son_1)
console.log(son_2)




///////////    JSON




let json_data= [
    {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/1/1.jpg",
        "https://cdn.dummyjson.com/product-images/1/2.jpg",
        "https://cdn.dummyjson.com/product-images/1/3.jpg",
        "https://cdn.dummyjson.com/product-images/1/4.jpg",
        "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
      ]
    },
    {
      "id": 2,
      "title": "iPhone X",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/2/1.jpg",
        "https://cdn.dummyjson.com/product-images/2/2.jpg",
        "https://cdn.dummyjson.com/product-images/2/3.jpg",
        "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
      ]
    },
    {
      "id": 3,
      "title": "Samsung Universe 9",
      "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
      "price": 1249,
      "discountPercentage": 15.46,
      "rating": 4.09,
      "stock": 36,
      "brand": "Samsung",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/3/1.jpg"
      ]
    },
    {
      "id": 4,
      "title": "OPPOF19",
      "description": "OPPO F19 is officially announced on April 2021.",
      "price": 280,
      "discountPercentage": 17.91,
      "rating": 4.3,
      "stock": 123,
      "brand": "OPPO",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/4/1.jpg",
        "https://cdn.dummyjson.com/product-images/4/2.jpg",
        "https://cdn.dummyjson.com/product-images/4/3.jpg",
        "https://cdn.dummyjson.com/product-images/4/4.jpg",
        "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg"
      ]
    },
    {
      "id": 5,
      "title": "Huawei P30",
      "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      "price": 499,
      "discountPercentage": 10.58,
      "rating": 4.09,
      "stock": 32,
      "brand": "Huawei",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/5/1.jpg",
        "https://cdn.dummyjson.com/product-images/5/2.jpg",
        "https://cdn.dummyjson.com/product-images/5/3.jpg"
      ]
    }
  ]


let stringJson=JSON.stringify(json_data)
console.log(stringJson)


let toJsonData=JSON.parse(stringJson)
console.log(toJsonData)

let filtJson=JSON.stringify(toJsonData,['id','title','brand'],3)
console.log(filtJson)


let title=toJsonData.map(el=>console.log('title ',el.title))





///////////////////   REGULAR EXPRESSION       


let str=`Lorem Ipsum +91-9035093877 is simply +91-903 509 3877  dummy text sairam@gmail.com of the printing and typesetting dee@gmail.com industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`

let emailPattren=str.match(/\w+@\w+.\w+/gi)

let numberPattren=str.match(/\+\d+-\d+\s/gi)
let numberPattren2=str.match(/\+\d+-\d+\s\d+\s\d+/gi)


console.log(emailPattren)
console.log(numberPattren)
console.log(numberPattren2)

//  . =>all characters
// \w => Alphabates and numbers excluding special character
// \W => special character and spaces excluding Alphabates and numbers
// \s =>Only spaces
// \S =>Other than space
// \d => Any digit
// \[ ]=> For specific value or To specify range ex [3-7] or [com].
//  +  => for ONE or MORE occurance
//  *  =>for 0 or MORE occurance.
//  ?  => for 0 or 1 occurance
// ||  =>  or
//  ^  => Starts with
//  $  => Ends with 





