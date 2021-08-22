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





