///////////////// J.S PRACTICE


////////////    VARIABLES

// Variables are the containers to store the data.
// declared using    let, var,const  KEY WORDS

///decleration
var declare;  //global scope
let declares;  //block scope

i
//initialisation
declare=10
declares=10
const declareee=20   //Should be declared and initialised together.

console.log(declare)
console.log(declares)
console.log(declareee)

//////////////////  DATA TYPES /////////////////////


///*****************  PRIMITIVE data type   ************

//1) NUMBERS

let int=100

let float=1.234


//2)Strings

let str='Sairam'

//3)Boolean

let boo1=true
console.log(str!==int)
let boo2=false
console.log(str===int)
//4)Undefined

let und;

//5)null

let nu=null;

//6)NaN

let nan=NaN

nan=int*str

console.log(nan)

//7)Symbols

let sym=Symbol(12345)
console.log(sym)

/////////////////////STRING METHODS///////

let a='Sairam'
let b='Dhyan'
console.log('charAt',a.charAt(3))

console.log('charCodeAt',a.charCodeAt(3))

console.log(a.concat(b))

console.log(a.indexOf('m'))

console.log(a.lastIndexOf('a'))

console.log(a.replace('a','A'))

console.log(a.repeat(3))

let c='    Mudda    '

console.log(c.trim())

console.log(c.trimStart().concat(a))
console.log(c.trimEnd().concat(a))

console.log(c.toUpperCase())
console.log(c.toLowerCase())


let d='Hi this Is a demo text'

console.log(d.substr(13,4))
console.log(d.substring(18,d.length))

console.log(d.slice(13,22))

console.log(d.split(''))
console.log(d.split(' '))

console.log(d.startsWith('H'))

console.log(d.endsWith('t'))

console.log(d.match(/i/gi))

console.log(d.search(/a/gi))


let e="25"

console.log(e.padStart(5,'0'))

console.log(e.padEnd(5,'0'))



// ///    JavaScript Reserved Words

// 1) var,let,const
// 2) function  and all higher order function names,return
// 3)class
// 4)true,false,undefined,null,NaN
// if,else, switch,continue,break
// for,of in,while,do while
// typeof
// export,super


// ///  JavaScript Variable Names

//  RULES
 
//   should start with LETTER, UNDERSCORE, DOLLAR

//    can be followed by NUMBER,SPECIAL CHARACTER, DOLLAR, UNDERSCORE

//   CASE SENSITIVE

//   RESERVED key words should not be used


//  GENERAL PRACTICE

//   can use CAMEL CASING
//   can use SNAKE CASING   ex==snake_casing_name
//   should not be single letter
//   Meaning full name is prefered.



/////////////////    OPERATORS    /////////////


///                  ASSIGNMENT OPERATOR

let f=100
let g=200

f+=100
g-=10
g*=5
g/=2
console.log(f)
console.log(g)

///                 MATHEMATICAL OPERATOR

//  ADDITION OPERATOR

console.log('ADDITION OPERATOR',f+g)

////  SUBTRACTION OPERATOR
console.log('SUBTRACTION OPERATOR',f-g)

//  MULTIPICATION OPERATOR
console.log('MULTIPICATION OPERATOR',f*8)

//  DIVISION OPERATOR
console.log('DIVISION OPERATOR',f/2)

//  MODULOUS OPERATOR    for getting reminder

console.log('MODULOUS OPERATOR',g/5)


///                 COMPARISION OPERATOR

let h=100;
let i=200;
let j='100';
console.log('==',h==j)
console.log('==',h!=j)
console.log('===',h===j)
console.log('===',h!==j)//first compares data types are not not equal
  
console.log('Greater than',h>i)
console.log('Lesser than',h<i)
  console.log('Greater than or equal to',h>=j)
   console.log('Greater than or equal to',h>=i)
  console.log('Lesser than or equal to',h<=j)
  console.log('Lesser than or equal to',h<=i)

///                 LOGICAL OR BITWISE OPERATOR


  console.log('AND OPERATOR',h==j&&h<i)
  console.log('AND OPERATOR',h==j&&h>i)
  console.log('OR OPERATOR',h==j||h<i)

  console.log('NOT OPERATOR',h!=i)
  console.log('NOT OPERATOR  !true=',!true)
  console.log('NOT OPERATOR  !false=',!false)


///                 INCRIMENT AND DECRIMENT OPERATOR
  let k=100
  let l=200

  console.log('PRE INCRIMENT',++k) 
   console.log('POST INCRIMENT',l++); console.log('POST INCRIMENT',l) 


  console.log('PRE DECRIMENT',--k)
  console.log('POST DECRIMENT',k--);  console.log('POST DECRIMENT',k)


  ///              CONDITION  OPERATOR
 
  
 k==l ? console.log('k is grater'):console.log('l is greatest');


 ////////////    JAVASCRIPT – If-Else CONDETION

let m=100;
let n=200;
 
 //if()

 if(m>n){console.log('m is greatest')}

// if(), else
 	if(m>n){
            console.log('m is greatest')
 	}

  else{
  	console.log('n is greatest')
  }

// if(), else if(), else
m=100;
n=100;

  if(m>n){
  	console.log('m is greatest.')
  }
  else if(n<m){
  	console.log('n is greatest.')
  }
  else{
  	console.log('m and n are same.')
  }
 

////////////    JAVASCRIPT – Switch-Case

  //


  let operator='sub'
  let a=100
  let b=20

  switch (operator){
  case 'add': console.log(a+b)
  	break

  case 'sub': console.log(a-b)
  	break

  case 'multi':console.log(a*b)
  	break

  case 'divi':console.log(a/b)
  	break

  default: console.log('Enter a valid number')
  }


//////////     JAVASCRIPT – For Loops

//    for 
let oStr='sairam'
for(let i=0;i<oStr.length;i++){
     console.log(oStr[i].toUpperCase())
}

//  for of

let pArray=[10,20,30,40,50]

for(let data of pArray){

	console.log(data*data)
}


//    for in
for(let index in pArray){
	console.log(index)
}



//    while

let p=1

while(p<10){
	console.log('Hello')
	p++
}


// do while

let q=5

do{
	console.log(q)
	q++
	if(q==10){
		break  }
	}

	while(true)



for(let i=0;i<10;i++){

console.log('brak example',i)
	if(i==5){
		break
	}
}


for(let i=0;i<10;i++){
	
	if(i==5){
		continue
	}
	console.log('continue ex ',i)
}


////////////    ARRAY METHODS          


let aArray=[1,2,3,4,5]
let bArray=[6,7,8,9,10,6,7]

  console.log('concat ', aArray.concat(bArray))

  console.log('reverse ',aArray.reverse())

  console.log('sort ',aArray.sort())

  console.log('indexOf ',bArray.indexOf(8))

  console.log('lastIndexOf ',bArray.lastIndexOf(6))

  console.log('join ',aArray.join(''))

  console.log('pop',bArray.pop())
  console.log('Elements remaining after pop',bArray)

  console.log('shift',bArray.shift())
  console.log('Elements remaining after shift',bArray)

  console.log('unshift',aArray.unshift(50))
  console.log('Elements remaining after unshift',aArray)

  console.log('push',aArray.push(50))
  console.log('Elements remaining after unshift',aArray)



  console.log('slice 3 element',aArray.slice(0,3))

  console.log('splice',aArray.splice(0,5))
  console.log('Elements remaining after splice',aArray)

  console.log('spliced and removed two element and added 3',bArray.splice(1,2,1,2,3))

  console.log('3 elements are added',bArray)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







