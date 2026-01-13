// Assignment - 1: Number Check
let number;

if(number > 0){
    console.log("Positive Number");
}else if(number < 0){
    console.log("Negative Number");
}else{
    console.log("Zero");
}


// Assignment - 2: Even/Odd in Range

for(let i = 1; i <= 20; i++){
    if(i % 2 == 0){
        console.log(i + " is Even");
    }else{
        console.log(i + " is Odd");
    }
}

// Assignment - 3: Role Access Using Switch Case
let role;

switch(role){
    case "ADMIN":
        console.log("Full Access");
        break;
    case "USER":
        console.log("Limited Access");
        break;
    case "MANAGER":
        console.log("Moderate Access");
        break;
    default:
        console.log("Invalid Role");
}

// Assignment 4: Total Price Function

let calculateTotalPrice = function(price, quantity){
    return price * quantity;
}

// Assignment 5: Coupon Discount Function

let applyCoupon = function(amount, couponCode){
    switch(couponCode){
        case "SAVE10":
            return amount - (amount * 0.1);
        case "SAVE20":
            return amount - (amount * 0.2);
        case "NONE":
            return amount;
    }
}