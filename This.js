/*
Task 1: this inside object method
Log object property using this.
*/
const thisObj = {
  name: "john",
  age: 20,
  logName() {
    console.log(this.name);
  },
  address: {
    city: "New York",
    state: "NY",
    logCity() {
      console.log(this.city);
    },
  },
  printThis() {
    console.log(this);
  },
};

thisObj.printThis();
/*
 Output: 
{
  name: "john",
  age: 20,
  logName: [Function: logName],
  address: {
    city: "New York",
    state: "NY",
    logCity: [Function: logCity],
  },
  printThis: [Function: printThis],
}
 */

/*
Task 2: this loss in function
Fix the this issue.
❌ Problem
const user = {
  name: "Fenil",
  greet() {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  }
};
*/
// Solution:
const user = {
  name: "Fenil",
  greet: function () {
    setTimeout(() => {
      //converted regular function to arrow function because in arrow function the value of this is same as value of this in outer scope
      console.log(this.name);
    }, 1000);
  },
};

user.greet();
/*
Task 3: this with call
Use call to set this.
*/
const otherUser = {
    name: "fixon",
    surname: "smith",
    getFullName() {
        return this.name + " " + this.surname
    }
}

thisObj.printThis.call(otherUser); 
// logs the details of otherUser instead of thisObj

/*
Task 4: this in constructor
Create a constructor function using this.
*/
class Demo{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
    }
    getValues= () => {
        console.log("value of x is ", this.x);
        console.log("value of y is ", this.y);
        console.log("value of z is ", this.z);       
    }
}

const demoObj = new Demo(3,6,8);
demoObj.getValues()
/*
Task 5: this in arrow vs normal function Observe difference.
 */

const demo = {
  name: "peter",
  role: 'superhero',
  this1: function(){
    console.log('this in normal function');
    console.log(this);
  },
  this2: () => {
    console.log('this in arrow function');
    console.log(this);
  }
}

console.log("task-5");
demo.this1(); 
demo.this2();