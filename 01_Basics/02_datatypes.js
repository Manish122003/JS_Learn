"use Strict"; //treat all js  code as new version

//primitive (uses stack memory)
//whwnever stack is used we get the copy of object
//7 types
//String, Number, Boolean, null, undefined, Symbol, NigInt
const no = new Number(123);
const no2 = 56;
const str = String("String");
const str2 = "string";
const id = Symbol("12354");
const newId =Symbol("12354");
console.log(id,typeof id);
console.log(id===newId);

//Non-primitive or refrence type (uses heap memory) 
//whwnever something is stored in head the refrence of original object is shared
//Array, Objects, Functions