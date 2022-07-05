/*const car = {
    color: 'Blue',
    brand: 'BMW',
    model: 'Sports'
}
const list={}
const count=2

function Person(name) {
    this.name = name;
    this.sayHello = function() {
        console.log("Hello, World!")
    };
}
const joon = new Person();
const jisoo = new Person();

Person.prototype.age = 20;
const name = "Doggo"
const height = 180

const props = {
    name : "kim",
    age : 30,
}

const defaultAge = 20;
const { age } = props;

if(typeof Age!= "undefined") {
    console.log(age);
} else {
    console.log(defaultAge);
}

let age2 = age || defaultAge
console.log(age2)

let sum = function(a,b) {
    return a+b;
}

let sum1 = (a,b) => {
    return a+b;
}

let hi = () => {
    return "Heelooo"
}

function func(...input) {
    let total = 0;
    for(let i of input) {
        total += i;
    }
    return total;
}

function outFunc(name) {
    var outVar = "my name is "
    function innerFunc() {
        return outVar + name
    }
    return innerFunc
}
var result = outFunc('bono')

var out = 'out value' //전역 스코프
function outer() {      //outer 스코프
    var innerFunction = 'in value'
    function inner(inParam) { //inner 스코프
        console.log('out: ' + out)
        console.log("innerFunction: " + innerFunction)
        console.log('inParam: ' + inParam)
    }
    return inner
}
var param = `this is param`
var outResult = outer()
outResult(param)

function ho1() {
    if(true) {
        var name = 'yuddomack';

    }
    console.log(name);
}
function ho2() {
    for(var i=0; i<5; i++) {
        console.log(i);
    }
}
if(true) {
    var score = 100;
}
console.log(score);
*/
const items = ['item1', 'item2', 'item3'];
const copy = [];

/*for(let i=0; i<items.length; i++) {
    copy[i] = items[i];
    console.log(copy[i]);
}*/
console.log("change to foreach")

items.forEach(
    function(item) {
        copy.push(item)
    }
)

function logArrayElements(element, index, array) {
    console.log('a[' + index + '] = ' + element);
  }
  
// 인덱스 2는 배열의 그 위치에 항목이 없기에
// 건너뜀을 주의하세요.
[2, 5, , 9].forEach(logArrayElements);
console.log([2, 5, , 9][2])

var obj = {a:1, b:2, c:3}
for( const prop in obj) {
    console.log(`obj.${prop} = ${obj[prop]}`)
}

Object.prototype.objCustom = function() {return "hi"};
Array.prototype.arrCustom = function() {return "hello"};

let iterable = [3,5,7];
iterable.foo = "Fool"

for(let i in iterable) {
    console.log(i);
}

for(let i of iterable) {
    console.log(i);
}
const arr1 = [1,2,3,4]

const map1 = arr1.map(x=>x*x)
console.log(map1)

// Define a function with two regular parameters and one rest parameter:
function myBio(firstName, lastName, ...otherInfo) {
     return otherInfo;
    }
    // Invoke myBio function while passing five arguments to its parameters:
    console.log(myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male"));
    // Define a destructuring object with two regular variables and one rest variable:
const { firstName, lastName, ...otherInfo } = {
    firstName: "Oluwatobi",
    lastName: "Sofela", 
    companyName: "CodeSweetly",
    profession: "Web Developer",
    gender: "Male"
}
    
// Invoke the otherInfo variable:
console.log(otherInfo);
    
const myName = ["Sofela", "is", "my"];
const aboutMe = ["Oluwatobi", ...myName, "name."];

console.log(aboutMe)