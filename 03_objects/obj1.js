// singleton

const sym = Symbol("key1")
const js = {
    name : "jia",
    age : 19,
    location : "dfgbdf",
    email : "jia34@gmail.com",
    "full name" : "gbnhgf",
    [sym] : "key1"


}
// console.log(js.email);
// console.log(js["email"]);
// console.log(js["full name"]);
// console.log(js.full name);   this would gvie error if if we write element with space in object so js["email"] is always the recommended way


// // console.log(js[sym]);
// js.email = "jia45@gmail.com"
// // Object.freeze(js);    // freeze the whole object
// // js.email = "gfvds@gmail.com"

// console.log(js);
// js.greeting = function(){
//     console.log(`hELLO FV MEE`);
    
// }
// js.greetingTwo = function(){
//     console.log(`heelo from,${this.name}`);
    
// }
// console.log(js.greetingTwo());


// console.log(js.greeting());
// console.log(js.greeting);


const course =  {
    coursename : "js in hindi",
    price : 999,
    courseInstructor : "jia"
}

course.courseInstructor;

// const {courseInstructor  :instruc}  = course
// console.log(instruc);
 const {courseInstructor} = course
 console.log(courseInstructor);
 // destructuring usedi nreact
 const navbar =({company}) =>{

 }

 navbar(company = "jia")

// json format 
//  {
//     "name " : "gbfvd",
//     "age" : "345",
//     "price" : "gfvd"
//  }








