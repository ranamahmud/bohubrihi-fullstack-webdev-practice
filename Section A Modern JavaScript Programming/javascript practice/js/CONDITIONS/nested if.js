if (true) {
    console.log("If statement executed!");
  }
  
  if (false) {
    console.log("If statement executed!");
  }
  // use of else
  else {
    console.log("Else Executed!");
  }
  
  var age = prompt();
  
  if ( age >= 50 ) {
      console.log("Old!");
  } else if ( age < 50 && age >= 30 ) {
      console.log("Under 50 but above or equal 30!")
  } // 30 <= age < 50
  else if (age < 30 && age >= 18 ) {
      console.log("Under 30 but above or equal 18");
  } else if ( age < 18 && age > 0) {
      console.log("Under 18!");
  } else {
      console.log("Invalid Input!");
  }
  
  
  //Find the largest number
  var n1 = prompt("First Number: ");
  var n2 = prompt("Second Number: ");
  var n3 = prompt("Third Number: ");
  
  n1 = parseInt(n1);
  n2 = parseInt(n2);
  n3 = parseInt(n3);
  
  if (n1 >= n2) {
      if (n1 >= n3) {
          console.log(n1 + " is the largest!");
      }
      else {
          console.log(n3 + " is the largest!");
      }
  } else {
      if (n2 >= n3) {
          console.log(n2 + " is the largest!");
      }
      else {
          console.log(n3 + " is the largest!");
      }
  }