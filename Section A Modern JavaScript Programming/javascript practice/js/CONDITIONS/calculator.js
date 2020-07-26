console.log("Select an option");
console.log("1. Add");
console.log("2. Subtract");
console.log("3. Multiply");
console.log("4. Divide");
let num1 = prompt("Enter the first number");
let num2 = prompt("Enter the second number");
let option = prompt("Enter option");
let result = null;

num1 = parseInt(num1);
num2 = parseInt(num2);
option = parseInt(option);
let num1Con = isNaN(num1);
let num2Con = isNaN(num2);
let optionCon = isNaN(option);

if(num1Con || num2Con || optionCon){
    console.log("Invalid Input");
}else{
    switch (option) {
        case 1:
            result = num1 + num2;   
            break;
        case 2:
            result = num1 - num2;
            break;
            case 3:
                result = num1 * num2;
                break;
                case 4:
                    result = num1 / num2;
                    break;
        default:
            break;
    }

    if(result == null){
        console.log("No Result");
    }else{
        console.log(result);
    }
}

