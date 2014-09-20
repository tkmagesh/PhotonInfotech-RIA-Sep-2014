/*
1. a constructor funtion is usually invoked with "new" keyword
2. 'this' -> a new object
3. 'this' (new object) is returned by default

object.constructor -> constructor function using which the object is created
*/

function Employee(id,name,salary){
    this.id = id;
    this.name = name;
    this.salary = salary;
}
