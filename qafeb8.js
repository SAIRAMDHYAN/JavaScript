


// let newArr=[]

// for(let element of arr){

//  // console.log(element)
 
// let firstLetter=element.charAt(0).toUpperCase()

// let remLetter=element.slice(1,element.length)

//    let concat=firstLetter+remLetter
//   newArr.push(concat)

// }

// console.log(newArr)


///

// let arr=['hi','hello','greet']

// let newArray=arr.map(el=>el.charAt(0).toUpperCase()+
// 	el.slice(1,el.length)
  
// 	)
// console.log(newArray)

// var pattern = /green/i;
// console.log(pattern.test("Green Apple"));



// let arr1=['d','f','h','b']
// let arr2=['z','d','e','a','g','i']
// //  let newArray=arr1.sort().concat(arr2.sort())
// // console.log(newArray)


// function addSortedArray(firstArray,secondArray)
// {
// 	 let newArray=firstArray.sort().concat(secondArray.sort())
// console.log(newArray)
// }

// addSortedArray(arr1,arr2)

// let [num1,num2]=[2,3]
// console.log(num1,num2)



//

let student={

    full_name:function(age,city,state){
    	let statment=`${this.f_name},${this.l_name},${age},${city},
    	${state}`
    console.log(statment)
    }
}


let st1={
	f_name:'Sairam',
	l_name:'Dhyan'
}

student.full_name.apply(st1,[21,'Chikkamagalur','Karnataka'])

student.full_name.bind(st1)(23,'N.R.Pura','Karnataka')

let mark=
    {
    	subject:'Maths',
    	marks:85

    }

    console.log(mark.marks)

  //     {
  //   	subject:'Kannada',
  //   	marks:99

  //   },

  // {
  //   	subject:'English',
  //   	marks:90

  //   },

  // {
  //   	subject:'Science',
  //   	marks:85

  //   },
	

