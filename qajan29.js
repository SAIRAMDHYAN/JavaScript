

// let num=prompt('Enter a number')

// if(num<0){
// 	console.log(`The given numer is ${num} it is a Negative number.`)
// }
// else if(num>=0){
// 	console.log(`The given numer is ${num} it is a Positive number`)
// }
// else{
// 	console.log(`Enter a currect number`)
// }



//  Calculator


let oper=prompt('Enter Mathematical operator')

let num1=prompt('Enter First Number')
let num2=prompt('Enter Second Number')

 num1=parseFloat(num1)
 num2=parseFloat(num2)

// let num1=10
// let num2=10




switch(oper){
    case '+' : console.log(num1 + num2)
	break

	case '-' : console.log(num1 - num2)
	break

	case '*' : console.log(num1 * num2)
	break

	case '/' : console.log(num1 / num2)
	break

}