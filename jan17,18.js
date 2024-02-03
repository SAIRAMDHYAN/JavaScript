// tempelate string
//Template literals allow you to embed expressions within string literals:

let country='India'

country='America'

let presentCountry=`The country iam presently residing is ${country}`

console.log(presentCountry)

//string metheds or built in functions

//string is immutable
country[0]='a'

//1].toUpperCase()

let uppercase=country.toUpperCase()

console.log(uppercase)

//2].toLowerCase()

let lowercase=uppercase.toLowerCase()
console.log(lowercase)

//To Take a part of string

//3]substr
//It is used to extract the part of string based on index num and number of character need to be extracted

presentCountry=`The country iam presently residing is ${country}`

substr=presentCountry.substr(16,9)

console.log(substr)


//4]substring
//To extract the part of string based on index number.
   //first index number specifies starting, and second number specifies the end letter of extraction.
   //(It takes excluding last letter.)

presentCountry=`The country iam presently residing is ${country}`

let substring=presentCountry.substring(4,12)
console.log(substring)

//5] .split()

//It is a built in function to convert string to array.

presentCountry=`The country iam presently residing is ${country}`

let array=presentCountry.split()
console.log(array)

//It is a built in function to convert string to array =>for Each character.

presentCountry=`The country iam presently residing is ${country}`

 array=presentCountry.split('')
console.log(array)


//It is a built in function to convert string to array =>when the space is present.

presentCountry=`The country iam presently residing is ${country}`

 array=presentCountry.split(' ')
console.log(array)

//It is a built in function to convert string to array =>when the specified character is present.

presentCountry=`The country iam presently residing is ${country}`

 array=presentCountry.split('e')
console.log(array)

//It is a built in function to convert string to array =>when the specified word is present.

presentCountry=`The country iam the presently the residing is ${country}`

 array=presentCountry.split('the')
 console.log(array)
 console.log(array[0])
console.log(array[2])


// 6].trim()
//To remove excess space on either sides of main text.

presentCountry=`           The country is    India      `

let trim=presentCountry.trim()

console.log(trim)

//7].includes()

// To check the given character is present or not.   gives boolean values.

presentCountry=`The country iam the presently the residing is ${country}`

let includes=presentCountry.includes('the')
console.log(includes)

includes=presentCountry.includes('has')
console.log(includes)

includes=presentCountry.includes(' ')
console.log(includes)

includes=presentCountry.includes(10)
console.log(includes)


//8] .indexOf()
// To get the index number of the characters.

let news=`The Prime Minister’s visit to the temple on the banks of Thriprayar River,
 devoted to Lord Rama (known as Thriprayar Thevar), gains importance in the wake of the
  consecration at the Ram Temple in Ayodhya on January 22.`

let indexNum=news.indexOf('visit')

console.log(indexNum)

//9].lastIndexOf()
// To get the Last index number of the sentence.

news=`The Prime Minister’s visit to the temple on the banks of Thriprayar River,
 devoted to Lord Rama (known as Thriprayar Thevar), gains importance in the wake of the
  consecration at the Ram Temple in Ayodhya on January 22.`

let lastindexNum=news.lastIndexOf()+1

console.log(lastindexNum)

lastindexNum=news.lastIndexOf()+1

console.log(lastindexNum)



//10].replace

//To replace a character or word by another

news=`The Prime Minister’s visit to the temple on the banks of Thriprayar River`

let replace=news.replace('Thriprayar River', 'Karnataka')

console.log(replace)


//11] .charAt()

//To check character present at given index number.

news=`The Prime Minister’s visit to the temple on the banks of Thriprayar River`

let character=news.charAt(4)
console.log(character)


//18] .charCodeAt()

//to get the ASCII value of the given element.

news=`The Prime Minister’s visit to the temple on the banks of Thriprayar River`
let characterCode=news.charCodeAt(10)
console.log('Chare code is:- ' + characterCode)

//12]  .slice()

  //To slice or take part of a string.

news=`The Prime Minister’s visit to the temple on the banks of Thriprayar River`

let slice=news.slice(10,15)
console.log(slice)


//13] .repeat()
  //To repeat number of time.

let wish='Hi...'
 let repeat=wish.repeat(5)
console.log(repeat)


//14]  .startsWith('')
    //It checks weather the given character is present or not in the BEGINING or START.
        //It gives Boolean Value. If sentence starts with given char then "true" otherwise "false"

news=`The Prime Minister’s visit to the temple on the banks of Thriprayar River`
 let startingLetter=news.startsWith('The')

 console.log(startingLetter)

 startingLetter=news.startsWith('he')

 console.log(startingLetter)

 //15]  .endsWith('')
 //It checks weather the given character is present or not in the End.
        //It gives Boolean Value. If sentence Ends with given char then "true" otherwise "false"

 news=`The Prime Minister’s visit to the temple on the banks of Thriprayar River.`
 
  let endingLetter=news.endsWith('.')

  console.log(endingLetter)

    endingLetter=news.endsWith('r')

  console.log(endingLetter)

  //16] Concatination            .concat()
      //It is to join two or more strings together.

  let fn='Sairam'
  
  let ln='Dhyan'

  let FullName=fn.concat(ln)
  console.log(FullName)

  FullName=fn.concat(' ',ln)
  console.log(FullName)

//Other Metheds for concatination
  FullName=fn+ln
  console.log(FullName)

   FullName=fn+' '+ln
  console.log(FullName)

//Turnery Operator
   FullName=`${fn}  ${ln}`
  console.log(FullName)

//17]Padding     .padStart(  , ' ')    .padEnd( ,' ')

  //To add number in start or end , which help in sorting number based on aschar value 

 let num= '2'

  let newNum=num.padStart(5,'0')
  console.log(newNum)


   num= '2'

   newNum=num.padEnd(5,'0')
  console.log(newNum)


  //19]Search      .search(/ /gi)    g=globally  i=Case insencitive [either capital/small]

     //To check weather the character is present or not.
    //It give index number.

   news=`The Prime Minister’s visit to the temple on the banks of Thriprayar River.`
   let search=news.search(/Prime/gi)

   console.log(search)

   //20] Match          .match(//gi)

    news=`The Prime Minister’s visit to the temple on the banks of Thriprayar River.`
   let match=news.match(/t/gi)

   console.log(match)

   
let a=true;

console.log(a==0)





