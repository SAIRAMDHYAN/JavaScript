//////              	ARROW FUNCTION

let func=()=>{
	console.log('hi')
}
func()

let add=(num1,num2)=>{

	return num1+num2
}



//         Self Invoking Function

//The function that does not require invokig statement that invokes by itself..

 
 (function sqr(num){
 	console.log(num**2)
 })(3)




 //****************************************************************************************************

 let a=10



if(a==10){
	console.log('Ten')
}

//
if(a==10){
	console.log('ten')
}
else {
	console.log('twenty')
}

if(a==10){
	console.log('ten')
}
else if(a==20) {
	console.log('twenty')
}
else{
	console.log('Invalid input')
}

a=50
switch(a){
    case 10:console.log( 'Value of a is 10')
	break
	case 20:console.log( 'Value of a is 20')
	break
	case 30:console.log( 'Value of a is 30')
	break 
	case 40:console.log( 'Value of a is 40')
	break
	case 50:console.log( 'Value of a is 50')
	break
default:console.log('Invalid')
}



////////

//                                       Array


let arr=[ ]
console.log(arr)

arr=Array(1,2,3,4)
console.log(arr)


arr=Array(5).fill('a')
console.log(arr)


//

arr[2]=5
console.log(arr)


arr[10]=10
console.log(arr)



//###########################################################################################################


let ind='India'
let arr=[ind,'sl','chi','sl','np',]
console.log(arr)
console.log(arr[2])
console.log(arr.indexOf('sl'))
console.log(arr.lastIndexOf('sl'))

//while

let couter=5

while(couter){
	console.log(couter)
	couter--
}

let num=5
let something=true
while(something){
    console.log(num)
  

	if(num==3){
		something=false
	}
  num--
}


//do while

let counter=10

do{
	console.log(counter)
	counter--
	if(counter==3){
		break
	}
	
}while(true)

counter=10

do{
	console.log(counter)
	counter--
}while(false)
