// output
// write() should only use in testing purpose
document.write("Java Script Review");
console.log('Java Script Review');

// varibles
var val1 = 5 + 7 + "2";
console.log("val1="+val1);
var val2 = "5" + 5 + 2;
console.log("val2="+val2);
// let have block scope
let x1 = 10;
function test1(){
    let x1 = 5;
    console.log(x1); //5
}
test1();
console.log(x1); //10
// const must be asigned a value when declared
//it does not define const value..it defines const reference to value
function test2(){
    const x1 = 24;
    console.log(x1);//24
}
test2();
console.log(x1);//10

//arithmatic operation
val1 = 5**2;
console.log('exp operation: '+val1);

//data types
console.log(typeof(val1));
var val3;
console.log(typeof(val3));

//objects
console.log('objects');
const obj1 = {
    name : 'Mukit',
    age : 23,
    is_voter: function(){
        if(this.age > 18)
            return "Voter";
        else
            return "Not Voter";
    }
}
console.log(obj1.name);
console.log(obj1.is_voter());
obj1.varsity = 'Khulna University';
console.log(obj1);

//events
//details are coming later
function showDate(){
    document.getElementById('show_date').innerHTML = Date();
}

//string
let str1 = "My name is \'Mukit\'";
console.log(str1.length);
console.log(str1.slice(11));
// slice exclude the end position
console.log(str1.slice(0,2));
console.log(str1.slice(-10));
//substring doesnt accept negative value
console.log(str1.substring(0,2));
console.log(str1.substr(3,4));
// replace, toUpperCase, toLowerCase, trim, padFirst, padEnd,charAt
//convert string to array
let str_1_arr = str1.split(" ");
console.log(str_1_arr);
// indexOf, search, lastIndexOf, match
console.log(str1.includes("Mukit"));
console.log(str1.startsWith("hello"));

//template literals
// back tick sign
let str2 = `Hello!! My name is ${obj1.name}..My birth year is ${2021-obj1.age}`;
console.log(str2);

//numbers
val1 = 5, val2 = 10;
console.log('ans='+val1+val2); //510
console.log(`ans=${val1+val2}`); //15
val1 = "5", val2 = "10";
//for numeric operation js will convert string to number except +
console.log(val1*val2); //50
console.log(isNaN(5/'a'));
val1 = 5,val2=127;
console.log(val1.toString(2)); //returns bnary
console.log(val2.toString(16)); //returns hex
console.log(Number(true));

//arrays
console.log('array');
const arr1 = ["mukit",obj1,34];
console.log(arr1.length);
console.log(arr1[1].name);
const arr2 = ['Mukit','Hasan','Pranto'];
console.log(arr2.join(' ')); //convert to string
// push,pop,shift,unshift
arr2.unshift("Yoo");
console.log(arr2.toString());
console.log(arr1.concat(arr2).toString());
arr2.splice(0,1,"Heyyy");
console.log(arr2);
console.log(arr2.slice(1,3));
console.log(arr2.sort().reverse()) // descending order
const arr3 = [24,56,21,54,76,89,12,122];
console.log(arr3.sort()); //problem in numeric sort
console.log(arr3.sort(function(a,b){return a-b}));
//array iteration method
arr3.forEach(arr_func_1);
function arr_func_1(value,index,array){
    console.log(`array index ${index} and value ${value}`);
}
const arr4 = arr3.map(arr_func_2);
function arr_func_2(value){
    if(value > 50){
        return 'ov 50 val-'+value;
    }
    else{
        return 'bel 50 val-'+value;
    }
}
console.log(arr4);
const over30 = arr3.filter(arr_func_3);
function arr_func_3(value){
    return value > 30;
}
console.log(over30);
let sum = over30.reduce(arr_func_4);
function arr_func_4(total,value){
    return total+value;
}
console.log(sum);
//some, every

//date
let todays_date = new Date();
console.log(todays_date.toDateString());
//get method
console.log(todays_date.getFullYear());
console.log(todays_date.getMonth()); // january = 0
//set method
todays_date.setFullYear("2046");
console.log(todays_date.toDateString());

//math
console.log(Math.round(10.71));
console.log(Math.trunc(10.92)); // returns integer part
console.log(Math.pow(2,5));
console.log(Math.min(3,6,1,7));

//random
console.log(Math.random()); // 0(inclusive) to 1(exclusive)
//5 to 20 integer ..both included
console.log(Math.floor(Math.random()*16)+5);

//boolean
let st=""
console.log(Boolean(st));

//tarnary operator
let info = (obj1.age > 18) ? "Voter": "Not a Voter";
console.log(info);

// switch case
switch(new Date().getDay()){
    case 5:
    case 6:
        info = "Off Day!! Chill";
        break;
    default:
        info = "Working Days";
}
console.log(info);
// swtich case uses srtict comparison(===)

// for in loop
for(let x in arr3){
    console.log(arr3[x]);
}

//for of loop
for(let x of arr4){
    console.log(x);
}

// sets
const fruits = new Set(["banana","mango"]);
console.log(fruits.values());
fruits.add("apple");
fruits.forEach(function(value){
    console.log(value);
})


//maps
const map1 = new Map([
    ['apple',150],
    ['banana',20],
]);

for(let x of map1){
    console.log(x);
}
//there are diffs between objects and map

// regular expression

// use strict preventing you to use undeclared variable

// arrow function
print_x= x => 'x is'+x;
say_hello = () => "hellooo";
console.log(print_x(24));
console.log(say_hello());

// class
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    isVoter(){
        if(this.age > 18){
            return "Voter";
        }else{
            return "Not Voter";
        }
    }
}

let person1 = new Person("Mukit",24);
console.log(person1.isVoter());






