//primitive data types in javascript
/**
 * String, Number, Boolean, undefined, Null, 
 */
var a='Satwik';
var b=1;
var c=false;
var d = new String('abc') //object equivalent of string, typeof(d)=="object"
var e = "abc" //pure string, typeof(e) == 'string'
//console.log(e.concat('cba')); //concat works on both of them.
let f= null;
// console.log(f); //typeof null is an object
let g = Symbol('Hello Brother'); //a symbol can be initialised with all 3, string, number,boolean
let h = Symbol(1);
let i = Symbol(false);
//new Symbol will throw TypeError 
console.log(typeof(g)); //symbol

//creating boolean with initial value false
var bNoParam = new Boolean();
var bZero = new Boolean(0);
var bNull = new Boolean(null);
var bEmptyString = new Boolean('');
var bfalse = new Boolean(false);

//creating boolean with initial value true
var btrue = new Boolean(true);
var btrueString = new Boolean('true');
var bfalseString = new Boolean('false');
var bSuLin = new Boolean('Su Lin');
var bArrayProto = new Boolean([]);
var bObjProto = new Boolean({});
