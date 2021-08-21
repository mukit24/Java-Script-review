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
