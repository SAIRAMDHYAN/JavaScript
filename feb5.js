/////////////************.every()**********/////////////////////

//it returns true if all the condition are true,and returns falls if 
//any one condition is false.


let citizens=[34,34,6,80,23,7,59]

let voters=citizens.every(el=>el>=18)

console.log(voters)  //false


 citizens=[34,34,60,80,23,77,59]

voters=citizens.every(el=>el>=18)

console.log(voters)


/////////////////********** .some()  ***************////////////////////

// If any one given condition is true then it gives true the value,
//if only all conditions are false it gives false the value.


let marks=[85,34,59,56,84]

let Result=marks.some(el=>el<35)

console.log(`the result failed is ${Result}`)



////////////////***************************************/////////////

///////                 CLOSURES                    ///////////

// The inner function accessing the variable present inside the outer function.

function outer(){

    let x=10;
	function inner(){
          console.log(x)
        }
	inner()
	
}
outer()


/////////////     RECURSION       //////////////////////


//Calling same function inside same function.


// function factorial(num){

//         if(num==0) return

//         	console.log(num)
//         factorial(num-1)

// }
// factorial(5)

function factorial(num){
	if(num==0) return 1

		return num*factorial(num-1)
}
console.log(factorial(5))

//**********************************************************************


//               DESTRUCTURING

//Destructuring is a way to extract values from array or object and
//assigning it into a variable.



// Assigning a array value to a variable
var [num1,num2,num3,num4,num5]=[1,2,3,4,5]

console.log(num3)

//skip elements
var  [num1,num2, ,num4,num5]=[1,2,3,4,5]

console.log(num2,num4)

//assigning rest of element to a variable.

//                  REST OPERATOR

var [nu1,nu2]=[1,2,3,4,5,6,7]

console.log('first Number',nu1,'second number',nu2)
var [nu1,...nu2]=[1,2,3,4,5,6,7]
console.log('first Number',nu1,'All other numbers',nu2)


//coppying complete array elements using rest opperator

var number=[1,2,3,4,5,6,7]

let [...number3]=[number]
console.log(number3)

//coppying complete array elements without rest opperator
// let number2=number

// console.log(number2)

//coppying complete array elements using spread opperator

let [number4]=[...number]

console.log(number4)



/////

let fullstack=[
	['html','css','js','react'],
	['Node js','Express js'],
	['Mongo DB','My SQL']

	]

let [frontEnd,backend,database]=fullstack

for(let[fe,be,db] of fullstack){
	console.log(be)
}

////

let states=[['Karnataka','Bengaloor'],['Bihar','Patna'],['Telengana','Hyd'],
	['MAharastra','Mumbai'],]

let [state,Capital]=states
console.log(state,Capital)

for(let[state,Capital] of states){

	console.log(` The capital city of ${state} is ${Capital}`)
}

/////////////
//without SPREAD OPERATOR
let data1=[1,2,3,4,5]

let data2=data1
data1.pop()
console.log(`data1 after pop without SPREAD OPERATOR ${data1}`)
console.log(`data2 after pop without SPREAD OPERATOR ${data2}`)



//with SPREAD OPERATOR

let data3=[1,2,3,4,5]

let data4=[...data3]

// console.log(`data3 before pop ${data3}`)
// console.log(`data4 before pop ${data4}`)
data3.pop()
console.log(`data1 after pop with SPREAD OPERATOR ${data3}`)
console.log(`data4 after pop with SPREAD OPERATOR ${data4}`)

console.log('******************************************')

///////////////////////////////////////////////////////////////////

///                	DESTRUCTURING OBJECT


let student={
	name:'Sairam',
	age:23,
	skills:['html','css','js','react']
}


let {name,age,skills}=student
 console.log(skills)

 ///Adding new key name
 let {name:full_name,age:ages,skills:techSkills}=student
console.log(full_name,techSkills)

// console.log(student?.name)
// console.log(student?.['age'])



///// Destructuring array of object

let criketers=[
                {
                	first_name:'M.S.',
                	last_name:'Dhoni',
                	age:42
                },
                {
                	first_name:'Sachin',
                	last_name:'Tendulkar',
                	age:52
                },
                {
                	first_name:'Virat',
                	last_name:'Kohli',
                	age:35
                },
                {
                	first_name:'Rohith',
                	last_name:'Sharma',
                	age:34
                }
                

	]


// 

for(let{first_name,last_name,age} of criketers){

	console.log(`Myself ${first_name}  ${last_name} iam ${age} years old.`)
}



// console.log(criketers[2])



/////////////////////////////////////////////////

function add(a,b,...c){///... is rest operator
	console.log(a,b,c)
}

let num=[1,2,3,4,5,6]
console.log(typeof num)
add(...num)//...  is sprad operator


 num2=[1,2,3,4,5]

let copyOfnum2=[...num2]

console.log(copyOfnum2)

   const originalArray = [1, 2, 3];
           	const copiedArray = [...originalArray];
           	console.log(copiedArray); // Output: [1, 2, 3]


         
 //// conctinate
 
 let conArr1=[1,2,3,4]          	
  let conArr2=[5,6,7,8,]   

  let concatArr=[...conArr1,...conArr2]       	
  console.log(concatArr)



 ///coppying object
//  const originalObject = { a: 1, b: 2 };
// const copiedObject = { ...originalObject };
// console.log(copiedObject); // Output: { a: 1, b: 2


//changing value of object

const originalObject={a:1,b:2}

const mutatedObject={...originalObject,b:30,c:50}

console.log(originalObject); 

console.log(mutatedObject); 


