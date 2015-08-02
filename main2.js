//my original attempt with validation


var studentsArr = [];


// function studentInfo (){


userInputNumStudents = prompt("Hello! Please tell me how many students are learning JavaScript?");
userInputPhoneNumber = prompt("Please enter your phone number.");

getStudentNum(userInputNumStudents);

function getStudentNum(input){
  var output = "";
  while(true){
    if (!isNaN(input)){
      output = input;
      break;
    }
    else {
      input = prompt("Sorry, that was not a valid number. Please try again.");
    }
  }
  return output;
}

function validatePhone(input){
  var output = "";
  while(true){
    if (input.charAt(3) !== "-" && input.charAt(7) !== "-" && input.length !== 12){
      output = input;
      break;
    }
    else {
      input = prompt("You did not enter your phone number correctly. Please try again.");
    }
  }
  return output;
}

console.log(validatePhone(userInputPhoneNumber));


for (var i = 0; i <= num; i++) {

  var name = prompt("What is your name?").toString().replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

  var phoneNumber = prompt("What is your phone number?. Please enter in the format: XXX-XXX-XXXX");

  var city = prompt("What is your city?").toString().replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

  var student = {
    City: city,
    Name: name,
    Phone: phoneNumber,
    };
    studentsArr.push(student);
}

