/* Task 1: Async function returning value
Create an async function that returns a number and log it.*/
async function func1() {
  return 3;
}
console.log(await func1());
/*
Task 2: Await with delay
Wait 1 second before logging "Hello".*/

async function func2() {
  const res = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello");
    }, 10000);
  });
}

func2();

/*
Task 3: Error handling with try/catch
Reject a Promise and catch the error. */
async function func3() {
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Error happened");
      }, 1000);
    });
  } catch (error) {
    console.log(error);
  }
}
func3();

/*
Task 4: Sequential async calls
Call two async functions one after another. */

async function sayHello() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello");
    }, 1000);
  });
}

async function sayWorld() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("World");
    }, 1000);
  });
}
async function func4() {
  const res1 = await sayHello();
  const res2 = await sayWorld();
  console.log(res1 + " " + res2);
}
func4();

/*
Task 5: Parallel execution
Run two async functions in parallel.
*/

async function func5() {
  const [res1, res2] = await Promise.all([
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise 1 resolved");
      }, 1000);
    }),
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise 2 resolved");
      }, 1000);
    }),
  ]);
  console.log(res1 + " " + res2);
}
func5();
