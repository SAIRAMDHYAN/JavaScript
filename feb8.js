class PersonData{
	constructor(name,age,skills){
		this.name=name
		this.age=age
		this.skills=skills

		//console.log(name,age,skills)
		return name,age,skills
	}

     display(school){
     this.school=school
     return school
   console.log(this)
	}
}

let p1=new PersonData('hjgd',23,'jxghf')

console.log(p1)
console.log(p1.display('dcmc'))

p1.display('dcmc')
console.log(p1.skills)

////////

class Account{
	static location='N.R.Pura'
	constructor(name,account_number,balance,location){
		this.name=name
		this.account_number=account_number
		this.balance=balance
		this.location=location
		//return name,account_number,balance
	}
     
     display(){
     	console.log(this)
     }

     static branchName(){
		return `The account is present in ${this.location} branch.`
	}

     static district='Chikkamagalur'
	static locationFun(){
		return(this)
	}
	
}

let per1=new Account('Sairam',9035,100,'Mysoor')
let per2=new Account('Muddu',8903,500,'Mysoor')

per1.display()
console.log('Person 1 ',per1)
console.log(per2.name)
console.log(Account.branchName())
console.log(Account.locationFun())

//////     INHERETENCE

//Accessing the properties from parent class and using it in child class is called inheretence.


class Father{
	constructor(cycle,scooter){
		this.cycle=cycle
		this.scooter=scooter
 //console.log(cycle,scooter)
	}

}

class Son1 extends Father{

	constructor(cycle,scooty,car,jeep){
      super(cycle,scooty)
      this.car=car
      this.jeep=jeep
	}

	newVehicle(car,jeep){
		this.car=car
		this.jeep=jeep
	}
}

let f1=new Father('Herculus','Bajaj')
let s1=new Son1('Decathlon','Ola','Kousq','Thar')
let s2=new Son1('Hero','Jupitor','Tiago','Gypsy')
let s3=new Son1('sports','Vespa','Audi Q6','Wrangler ')


console.log(f1)
console.log(s1)
console.log(s2)
console.log(s3)



// console.log(1+2 === 3);
// console.log(0.1+0.2==0.3);
// console.log(typeof 0.1);
// var pattern = /[xyz]/;
// console.log(pattern.test("abc"));
// console.log(1 == true);
// //true    ⇒1 is truthy value
// console.log(2 == true);

for (var i = 0; i < 5; i++) {
(function(){
setTimeout(() => console.log(i), 1000)})()

}



// let arr = [1, 2, 3];
// delete arr[1];
// console.log(arr.length);
// console.log(arr);

// let x = 1;
// function test() {

//   console.log(x);
//   let y = 2;
// }
// test();

// console.log(typeof NaN);

// console.log(3 === 3);
// //true
// console.log(3 === '3');








