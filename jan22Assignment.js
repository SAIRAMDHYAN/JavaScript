//1: Check if a Number is Positive, Negative, or Zero

let a=0


if(a<0){
	console.log('Negative')
}
else if(a>0){
	console.log('Positive')
}
 else{
 		console.log('Zero')

 }


 //2: Check if a Year is a Leap Year

 let year=2024

if (year%4==0){
	console.log('Is leap Year')
	
}
else{
	        console.log('Is not leap Year')
	    }


//3: Determine the Largest of 3 Numbers

let w=100
let x=500
let y=300


if(w>x&&w>y){
	console.log('w is the largest number')
}

else if(x>y){
		console.log('x is the largest number')

}
else {
			console.log('y is the largest number')

}

/*
4: Write code using switch statement to show traffic signal light information

if it is red show ==>  "Stop! The color is red."

if it is green show ==> "Go! The color is green."

if it is yellow show ==> “Slow down! The color is yellow.”  */

let traficLight='green'

switch(traficLight){
case 'red':console.log("Stop! The color is red.")
	break

case 'green':console.log("Go! The color is green.")	
	break

default:console.log("Slow down The color is yellow.")

}