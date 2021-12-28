var obj = {
    name:'Sashi',
    age:27,
    getName:function(){
        console.log(this);
    }
}
var obj2 = {a:1}
obj.getName.call(obj2);

class Person {
    constructor(a,b="",c){
        this.name = a;
        this.surname = b;
        this.age = c;
    }
    showAge(){
        console.log(this.age)
    }
}
{
    var z = 1
    var a = ()=>{
        console.log('a fn');
    }
}
// console.log(z);
a();
var p1 = new Person('sat','nay',24);
p1.showAge.call(obj)
function man(a,b){
    this.name = a;
    this.age = b;
}
var m1 = new man('anil',28);
console.log(m1);
console.log(m1 instanceof man);