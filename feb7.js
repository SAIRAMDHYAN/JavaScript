/////    class

// It is a template for creating object.

// class vehicle{
// 	 constructor(){
// 	  console.log('Congrats')
// 	}
// }


// let car=new vehicle

////

// class person{
// 	constructor(name,place,age){
// 		this.places=place
// 		console.log(name,place,age)
// 	}
// }

// let p=new person('dhyan','ckm',23)
// console.log(p.places)

///

class Person1{
	constructor(name,place,age){
        this.name=name
        this.place=place
        this.age=age
console.log(name,place,age)
	}

	education(degree){
		this.qualification=degree
	}
}

let p1=new Person1('Sairam','N.R.Pura',23)
console.log(p1)
p1.education('b.sc')
console.log(p1)
console.log(p1.name)

let p2=new Person1('Muddu','TTH',24)
let p3=new Person1('Minnu','Tth',24)

p2.education('B.E')
p3.education('B.Com')
console.log(p2)
console.log(p3)


///////////

class Account{
	constructor(name,account_number,balance){
		this.name=name
		this.account_number=account_number
		this.balance=balance
//console.log(name,account_number,balance)
	}

	 deposit(credit){
		this.balance+=credit
	}

     withdraw(debit){
        this.balance-=debit
    }

}

let acc1=new Account('Sairam',92573,100)
let acc2=new Account('Muddu',82573,500)
let acc3=new Account('Minnu',72573,800)

console.log(acc1.withdraw)

acc1.deposit(500)

acc2.withdraw(21)
// let withd=Account.withdraw
// console.log(acc2.withd(23))

console.log(`Amount remaining in the account of ${acc1.name} is ${acc1.balance}`)
console.log(`Amount remaining in the account of ${acc2.name} is ${acc2.balance}`)




