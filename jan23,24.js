//***********************************  ARRAYS  *******************************************

//Arrays are collection of elements of different data type which are orderly arrenged 
//and can be modified at any point of time.
//or
//Arrays are orderly collection of homogenious items.



                                         //Declareing a Array


//Array literal
let array1=[]
console.log(array1)
//constructor
let array2=Array(1,2,3,4)
console.log(array2)

//fill method
let array3=Array(5).fill("a")
console.log(array3)

//split method
let stri="sairam"
let array4=stri.split('')
console.log(array4)


     //                                   Conctination


console.log(array4.concat(array3))


//                                          Adding elements to array

//1]
let countrie=['IND','AUS','SL']

countrie[1]='ENG'

console.log(countrie)

//4]To add new element at required index

countrie[10]='NZ'
console.log(countrie)

//                                  ***************   Array Methods  ***************

//2].push()==>to add element to end of array
 countrie=['IND','AUS','SL']

countrie.push('UK')

console.log(countrie)

//3].unshift()==>to add element to start of array


countrie.unshift('BAN')

console.log(countrie)


//4].splice(start index ,how many element need to be removed,'which element need to be added')

countrie=['IND','AUS','SL','UK','SWZ' ]

countrie.splice(0,0,'PAK','NEP')

console.log(countrie)



//                                            Removing Elements from Array


//  .shift()  ==>to remove element from start of array

countrie.shift()

console.log(countrie)

//  .pop()  ==>to remove element from end of array

countrie.pop()

console.log(countrie)



//splice(start index ,how many element need to be removed )

countrie=['IND','AUS','SL','UK','SWZ' ]

countrie.splice(1,2)

console.log(countrie)


countrie.splice(1)

console.log(countrie)

//**************************************


//.reverse()

countrie=['IND','AUS','SL','UK','SWZ' ]

countrie.reverse()

console.log(countrie)


//.join()

countrie=['IND','AUS','SL','UK','SWZ' ]

countrie.join('')

console.log(countrie)

countrie=['IND','AUS','SL','UK','SWZ' ]

countrie.join(' ')

console.log(countrie)

countrie=['IND','AUS','SL','UK','SWZ' ]

countrie.join(',')

console.log(countrie)


//.indexOf()

countrie=['IND','AUS','SL','UK','SWZ' ]

let output=countrie.indexOf('SL')

console.log(output)

//.includes()
countrie=['IND','AUS','SL','UK','SWZ' ]

output=countrie.includes('SL')

console.log(output)

//.sort()

countrie=['IND','AUS','SL','UK','SWZ' ]

countrie.sort()

console.log(countrie)

//.reverse()

countrie=['IND','AUS','SL','UK','SWZ' ]

countrie.reverse()

console.log(countrie)



//######################################## LOOPS ############################################


//for  LOOP

  //traditional for loop

for(i=0;i< 10; i++){

	console.log(i)
}

for (let i=0;i<3;i++){

	console.log('Hello')
}

for(let i=0;i<10 ;i++){
	console.log('Hi..')
	if(i==5){
		
break
	}

}

for(let i=0;i<10;i++){
	if(i==5){
          break;
	}
}


  //for of loop

countrie=['IND','AUS','SL','UK','SWZ' ]

 for(let country of countrie){

 	console.log(country)

 }

//for in loop

  for(let index in countrie){

 	console.log(index)

 }





// let x=10;

// function outer(){
// 	console.log(x);

// if(false){
// 	var x=20;
// }
// }
// outer()

// //undefined

// const str='virat kohli'
// const arr=str.split(' ')


// const res=arr.map((word)=>{
// 	return word[0].toUpperCase()+word.slice(1)
// })

// const output= res.join("");

// console.log(output)

