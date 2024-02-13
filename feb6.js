///////////   OBJECT METHOD       //////////////

///normal object
let student={
	f_name:'Sairam',
	l_name:'Dhyan',
	full_name:function(){
		console.log(this.f_name,this.l_name)

	},
	age:23

}
student.full_name()


////  .call()

// To acces the method of one object inside other object

// let profile={
// 	f_name:'Sairam',
// 	l_name:'Dhyan',
// 	full_name:function(){
//       console.log(this.f_name,this.l_name)
// }
// }

// let rachin_profile={
// 	f_name:'Rachin',
// 	l_name:'Ravindra'
// }
let dhoni_profile={
	f_name:'M.S',
	l_name:'Dhoni'
}

// // console.log(profile.full_name.call(rachin_profile))

// profile.full_name.call(rachin_profile)


//////
let sairam_profile={
	f_name:'Sairam',
	l_name:'Dhyan',
	full_name:function(age,city,team){

		let statment=`Hi myself ${this.f_name} ${this.l_name} iam ${age} years old,iam from ${city} plays for ${team}`
      //console.log(this.f_name,this.l_name)
		console.log(statment)
}
}
sairam_profile.full_name(23,'bnglr','CSK')


let virat_profile={
	f_name:'Virat',
	l_name:'Kohli'
}

sairam_profile.full_name.call(virat_profile,34,'Delhi','RCB')

// let virat_profile={
// 	f_name:'Virat',
// 	l_name:'Kohli'
// }

let rohith_profile={
	f_name:'Rohith',
	l_name:'Sharma'
}

sairam_profile.full_name.apply(rohith_profile,[40,'mumbai','MI'])



//////    bind()

  // sairam_profile.full_name.bind(rohith_profile)()

let fullName=sairam_profile.full_name.bind(virat_profile)

fullName()

////////////////

dhoni_profile={
	f_name:'M.S',
	l_name:'Dhoni'
}


let func=student.full_name.bind(dhoni_profile)

//func()

//let fun1=student.full_name.bind((dhoni_profile))

setTimeout(fun1,3000)

setTimeout(func,3000)






// let rohith_profile={
// 	f_name:'Rohith',
// 	l_name:'Sharma'
// }


