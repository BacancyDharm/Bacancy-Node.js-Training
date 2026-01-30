// iii) TypeScript: (Beginner => slightly Intermediate)
// Task 1: Create a function that takes a string and returns its length.

const stringLength = (str: string) : number => str.length

console.log(stringLength('hello'))

//Task 2: Create a User interface with optional email.

interface User {
    name: string;
    email?: string;
    age: number;
    isAdmin: boolean;
    // Add more properties as needed
}

//Task 3: Allow function input to be string or number.

const giveTheType = (input: string | number) => {
    console.log(`the type of the input is ${typeof input}`);
}
giveTheType('hello')
giveTheType(3);


//Task 4: Use an interface in a function parameter.
interface Animal{
    name: string;
    eyes: number;
    legs: number;
}

const printAnimal = (animal: Animal) => {
    console.log(animal.name);
    console.log(animal.eyes);
    console.log(animal.legs);
}

//Task 5: Return the first element of an array.

const firstEle = <T>(arr: T[]): T => {
    if(arr[0]) {
        return arr[0];
    }
    return undefined as T;
}