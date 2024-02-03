                      //loops

//for loops


let arr=[10,20,30,40,50]

for(let i=0;i<arr.length;i++){
	console.log(arr[i])
}

 arr=[10,20,30,40,50]

for(let i=0;i<10;i++){
	console.log(arr[i])
}

for(let i=1;i<=10;i++){
	console.log(i)
}


for(let i=0;i<=10;i++){
      if(i>5){
      	break
      }
      console.log(i)
}


let countries=['ind','pak','sl','bang','nep']
for(let country of countries){
	console.log(country)
}

for(let country in countries){
	console.log(country,countries[country])
}


let num=[1,23,4,5,69,34]



let greatestNum=null

for (let data of num){

	if(data>greatestNum){
		greatestNum=data

	}
	
}
console.log(greatestNum)

let index=0

for(let x of num){
	if (index<x){
		index=x
	}
}

console.log(index)

num=[100,23,4,5,69,34]
greatestNum=num[0]

for(i=1;i<num.length;i++){

	if(num[i]>greatestNum){

		greatestNum=num[i]
	}
}
console.log(greatestNum)




//Write a JS code to print Even numbers in given array.

// let num1=10

// if(num1%2==0){
// 	 console.log('even')
// }
// else {
// 	 console.log('odd')
// }




num=[1,2,3,4,5,6,7,8,9]
let even=null

for(let data of num){

  if(data%2==0){
   
even=data
console.log(even)
}
}

//Write a JS code to find duplicate values in a given array

let num2=[1,2,3,3,4,5,6,6]

function duplicateNum(){
 
    let nonDuplicateNum=0
   for(let i=0;i<num2.length;i++){
   	  if(num2[i]!==nonDuplicateNum){
   	  	nonDuplicateNum=num2[i]
   	  }
   	  console.log(nonDuplicateNum)

   }

}duplicateNum()


// Example usage:

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       console.log(numbers[i]);
//     }
//   }


for(let i=1;i<10;i++){
	
		if(i===5){
			// break
			continue
		}
			console.log(` hello ${i}`)
	}

function func(){
	for(let i=1;i<10;i++){
		console.log(` hello ${i}`)
		if(i===5){
			// break
			continue
		}
	}
}
func()


let funct=()=>{
	for(let i=0;i<10;i++){
		console.log(` Hi ${i}`)
		if(i===3){
			continue
		}
	}
}

funct()



function biggestNum(num){
    
   console.log(`The biggest number is `+ num.sort().pop())

}

let number=[1,23,4,5,69,34]
biggestNum(number)

