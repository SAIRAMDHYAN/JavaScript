let proZ=new Promise(re=>re(2))

proZ.then((v)=>{
   console.log(v)//2

return v*2
	})

.then((v)=>{
   console.log(v)//4

return v*2
	})
.finally((v)=>{
   console.log(v)//8

return v*2
	})
.then((v)=>{
   console.log(v)


	})
