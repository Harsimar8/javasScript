const arr = [3,5,7,8,2,"jia"]

console.log(arr[0]);
 const myArr = new Array(1,2,3,4)
 myArr.push(6)
 myArr.push(7)
 myArr.pop()
 console.log(myArr);

 console.log(myArr.unshift(9));
 console.log(myArr.shift());

 console.log(myArr.includes(9));
 console.log(myArr.indexOf(3));

 const newArr =myArr.join()

 console.log( typeof myArr);
 console.log( typeof newArr);
 

 // slice and splice
 console.log( "A ", myArr);
 const ny = myArr.slice(1,3)
 console.log(ny);

 console.log("B " ,myArr);


 const ny2 = myArr.splice(1,3)
 console.log(ny2);

 console.log("C " ,myArr);

 
 
 
 
 
 
 
 
 
