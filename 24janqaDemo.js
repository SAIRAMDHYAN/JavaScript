// let x = [1, 3454, 655, 24, 7, 8]
// find the largest number in x without using sort method


let x = [1, 655, 24, 7, 8]


let largestNum=x[0];

for(let i=0; i<x.length; i++){

	if(x[i]>largestNum){

		largestNum=x[i]
	}
}
console.log(largestNum)



let name='    sairam   '

console.log(name.trim())
console.log(name.trimEnd())
console.log(name.trimStart())

let firstName='sairam'

let lastname='dhyan'

let FullName=firstName.concat(' ' +lastname)

console.log(FullName)

console.log(lastname.length)

//relation operator,big int
