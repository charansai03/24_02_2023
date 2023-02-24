//constructor function
function Person(){
    this.name='charan',
    this.age='21'
}
const person1=new Person();

//creating class and method
class Person1{
    constructor(name){
        this.name=name;
    }
    get personName(){
        return this.name;
    }
    set personnsme(x){
        this.name=x;
    }
    }
    let person2=new Person1('manikanta');
    console.log(person2.name);


