

function greatestNum(a,b,c){
	if(a>b&&a>c){
		console.log('a is greatest')
	}
	else if(b>c&&b>a){
		console.log('b is greatest')
	}
	else{
		console.log('c is greatest')
	}
}

greatestNum(100,20,30)
greatestNum(100,200,30)
greatestNum(100,20,300)

function greatestNum(a,b,c){
	if(a>b&&a>c){
		return 'a is greatest'	
	}
	else if(b>c&&b>a){
	    return 'b is greatest'
	}
	else{
		return 'c is greatest'
	}
}
console.log(greatestNum(100,20,30))
console.log(greatestNum(100,20,30))
console.log(greatestNum(100,200,30))
console.log(greatestNum(100,20,300))

let x=10;
function add(){
	console.log(x)
}

add()

//

// let x=10;

// function outer(){
// 	console.log(x);

// if(false){
// 	var x=10;
// }
// }
// outer()

//JavaScript is an interpreted language, not a compiled language. A program such as C++ or Java needs to be compiled before it is run. The source code is passed through a program called a compiler, which translates it into bytecode that the machine understands and can execute
 
//JavaScript has no compilation step. Instead, an interpreter in the browser reads over the JavaScript code, interprets each line, and runs it. More modern browsers use a technology known as Just-In-Time (JIT) compilation, which compiles JavaScript to executable bytecode just as it is about to run.
 
 //Interpreter ====>>>> In computer science, an interpreter is a computer program that directly executes instructions written in a programming or scripting language, without requiring them previously to have been compiled into a machine language program

 x=10;

function outer(){
	console.log(x);

if(false){
	var x=20;
}
}
outer()



//while

let counter=5

while (counter){
	console.log(counter)
	counter--
}


counter=5
let something=true

while(something){
	console.log(counter)
	counter--

if(counter==-3){
	something=false
}	
}