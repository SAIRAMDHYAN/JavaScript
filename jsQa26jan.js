//1. How can you efficiently reverse a string in JavaScript without using built-in methods?


//2. Explain the difference between slice() and splice() methods when working with arrays.
 //==>slice() this method is used to extract part of an array.
//==>splice() this method is used to add or remove element from array.


// 3. How do you check if a string contains a specific substring in JavaScript?
    //by using includes() method.
let string='Sairam'
console.log(string.includes('Sai'))

// 4. Discuss the performance implications of using different methods to concatenate strings in JavaScript.

// 5. What is the purpose of the map() function in JavaScript arrays? Provide an example.

// 6. Explain the concept of immutability in JavaScript arrays and strings. How does it relate to functional programming?
   //Primitive data types are non mutable,where as non primitive data types are mutable.
   // Immutable means the data cannot be changed.
   // In primitive data type i.e., in strings when we declare a variable a new block of memory is created, and once we add value to that memory location we cannot change value in that memory location.
   // Where as in nonPrimitive data types i.e.,in arrays we can alter the value present in the memory.

// 7. How can you remove duplicates from an array in JavaScript, both with and without using ES6 features?

   let array=[1,2,3,2,6,4,5,5,6]
   let newArray=null;

   for(let i=0;i<array.length;i++){
   	if(i!=newArray){
   		data=newArray;
   	}
   
   }	console.log(newArray)
   

// 8. Describe the difference between forEach(), map(), filter(), and reduce() methods when iterating over arrays in JavaScript.
// 9. Discuss the pros and cons of using the split() method versus regular expressions for splitting a string into an array.
    

// 10. Can you explain the difference between == and === when comparing strings and arrays in JavaScript? Provide examples to illustrate their behavior.

      //==     it is used to compare only value of the variable. 

      //==   it is used to compare value along with data type. It is used for strict comparision.


let a=10;
let b='20';

console.log(a==b)//true
console.log(a===b)//fals
