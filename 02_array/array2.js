const marvel = ['dvf','efr','efg','was','kj']
const dc = ['we','fgf','nhh','cxz'];

//  marvel.push(dc);

//  console.log(marvel);    //push pushes the new array in the orginal array 
//  console.log(marvel[5][1]);
 

// const all = marvel.concat(dc)   // where as concat makes a new array

// console.log(all);


// there is a spread operator   which is better thn the concat  as we can concat multiple arrays

const all_new = [...marvel,...dc]

// console.log(all_new);

// flat (not commonly used)

const another = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real = another.flat(Infinity);                   // you can write any thing inplace of infinity to tell how much depth i want to get into
console.log(real);

console.log(Array.isArray("Jia"));        // tell it is array or not
console.log(Array.from("Jia"));             // convert to array
console.log(Array.from({name:"harsimar"}));   // gives a empty string as it is a key value pair it cantbe converted

let s1 =200
let s2 = 600
let s3 =500
console.log(Array.of(s1,s2,s3));        // convert to array from a elements










