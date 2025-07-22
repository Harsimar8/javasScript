let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// let mycreateDate = new Date(2023, 0 , 23)
// console.log(mycreateDate.toString());
// let create = new Date("01-02-2024")
// console.log(create.toLocaleString());

// let timeStamp = Date.now()
// console.log(timeStamp);

// console.log(mycreateDate.getTime());

console.log(Math.floor(Date.now() /1000));


let newDate = new Date()

console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMinutes());
console.log(newDate.getMonth() + 1);        // as month start from 0 index in javascipt

newDate.toLocaleString('default',{
    weekday : "long"
})








