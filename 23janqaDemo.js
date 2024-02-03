// a=10

// console.log(a--)

//logical operator

//&& operator

let a=10
let b=20
let c=30

if (a>b&&a>c){
	console.log('a is greatest')
}
else if(b>a&&b>c){
		console.log('b is greatest')

}
else{
		console.log('c is greatest')

}

// ||

//(a>b||a>c)
if(a<b||a<c){
	console.log('a is smaller')
}

else{
	console.log('a is not smaller')
}



//Assignment operator

 a=10
console.log(a)
a+=20
console.log(a)
a-=5
console.log(a)
a*=2
console.log(a)
a/=5
console.log(a)
// 10
// 30
// 25
// 50
// 10

//mathematical operator

a=60
b=40
console.log(a+b)

console.log(a-b)

console.log(a*2)
console.log(a/2)
console.log(a%2)
console.log(5**2)

//comparison operator
a=60
b='40'
console.log(a==b)
console.log(a===b)
console.log(a!=b)
console.log(a!==b)
console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)

//logical Operator

let isTrue=true
let isFalse=false

console.log(isTrue&&isFalse)
console.log(isTrue||isFalse)
console.log(! isTrue)




//incriment and decriment operator

a=60
console.log(a++) //60
console.log(++a)//62
console.log(a--) //62
console.log(--a) //60

//turnary operator
a=60
b=40

let output=a>b?'a is bigger.':'b is bigger';

console.log(output)

//unory operator

a="50"

console.log(-a)

