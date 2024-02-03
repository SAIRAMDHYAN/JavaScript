//               Functions

//It is used to reuse the block of code, it is reused when invoked.

function func(){

console.log('Hello world')

}
func()

 //Passing PARAMETER or ARGUMENT

function add(num1,num2,num3){   //() has parrameter or argument.

   let sum=num1+num2+num3
   console.log(sum)

}
add(10,30,50)//() has value to parrameter or argument.


//***********Using return to get output ***************

function add6(num1,num2){

   let sum =num1+num2
     return sum

}
console.log(add6(10,20))  //30

   //return will not print the output,

function add6(num1,num2){

   let sum =num1+num2
     return sum

}
add6(10,20)  //Nothing will be printed,,because not used console statement.


//********************************************

  //To pass value to argument in other ways.


function profile(name,age,country){

console.log(`Myself ${name} iam ${age} iam from ${country} `)

}
profile('Sairam',23,'India')
profile('Muddu',24,'India')
profile('Minnu',24,'India')

//////To pass DEFAULT value to argument.

function profile(name,age,country="India"){

console.log(`Myself ${name} iam ${age} iam from ${country} `)

}
profile('Sairam',23)
profile('Donald',70,'USA')
profile('Minnu',24)
profile('Rishi Sunak',44,'UK')


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//*******************************************  ANNONYMOUS FUNCTION  **********************************************************************
    //  Function without a function name is called annonymous function.
      //Here a function is assigned to variable, and invoked by using variable name.


    let variable=function(){
      console.log('Hello...!')
    }
    variable()

//**********

     let variable1= function(name){
      console.log(`Hi myself ${name}`)
     }   

     variable1('H.P.Sairam')

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// undefined values, null, NaN

function add7(num1){

     console.log(num1)

}
add7()   //undefined


function add8(num1){

     console.log(num1)

}
add8(undefined)   //undefined


function add9(num1){

     console.log(num1)

}
add9(null)  //null



function add2(num1,num2){


   let sum =num1+num2
     console.log(sum)

}
add2()   //NaN    =>because argument will be undefined, so undefined + undefined will be NaN.



function add3(num1,num2){

   let sum =num1+num2
     return 
}
console.log(add3(10,20))   //undefined   =>If return statement is empty it means undefined.


function add4(num1){
     
     return
     console.log(num1)

}
console.log(add4(10)) //undefined   =>Anything after return will not be considered,,If return statement is empty it means undefined.


function add5(num1,num2){


   let sum =num1+num2
     return 
     sum

}
console.log(add5(10,20))  //undefined   =>Anything after return will not be considered,,,If return statement is empty it means undefined.


//  arguments   =>keyword to represent values of argument *********************

  function addAll(){
         
         console.log(arguments)
           }

   addAll(10,20,30,40,50)


  function addAll1(){
         
         console.log(arguments.length)
           }

   addAll1(10,20,30,40,50)

   //sum


     function addAll2(){
         
         for(let data of arguments){

            let sum=0

             sum +=data
             console.log(sum)

           }
         }

   addAll2(10,20,30,40,50)



//*********  console .log()   =>it is function used to print the value,, it does not return any value.   ***********  

console.log(console.log('Hello'))

let out=console.log('hello')

console.log(out)