// Switch
console.log("Select an option:na. Option 1 nb. Option 2 nc. Option 3 ");

choice = prompt();

var text;

switch (choice) {
    case "a": //if(choice=="a")
        text = "Option 1 Selected!";
        break;
    case "b":
        text = "Option 2 Selected!";
        break;
    case "c":
        text = "Option 3 Selected!";
        break;
    default: // else
        text = "No option is selected!";
        break;
}

console.log(text);