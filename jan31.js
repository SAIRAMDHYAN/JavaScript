//      ******************    OBJECT     ******************
    //Objects are the non primitive data types which have properties and values as key and value pair.


// let cricketer={
// 	f_name:'Virat',
// 	l_name:'Kohli',
// 	fullName:function(){
// 		return this.f_name+ " "+ this.l_name
// 	},
// 	age:35

// }


// //Print the object
// console.log(cricketer)

// //print only required property
// console.log(cricketer.f_name)
// console.log(cricketer['l_name'])
// //Print function
// console.log(cricketer.fullName())

// //change the value of a property

// cricketer.age=36
// console.log(cricketer)

// //add propertiees to object

// cricketer.skills=['Batting','Fielding']
// console.log(cricketer)

// //add element to object array[use all array methods]

// cricketer.skills.push('Bowling')
// console.log(cricketer)

// //

// let cricketerBio=cricketer
// cricketerBio.spouse='Anushka'
// console.log(cricketerBio)
// console.log(cricketer)

// let sportsMan=Object.assign({},cricketerBio)
// sportsMan.netWorth=600
// console.log(sportsMan)
// console.log(cricketer)

// //to get keys

// console.log(Object.keys(sportsMan))

// //to get Values

// console.log(Object.values(sportsMan))



let person={
	name:'John',
	age:30
}

console.log(person)

person2=Object.assign({},person)

console.log(person2)

person2.name='Kohli'

console.log(person)

console.log(person2)