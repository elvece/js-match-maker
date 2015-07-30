//global variables
var personArray = [];

//all functions

//For each person, asks the user for their name, phone number, and city. Creates an object for each person. Adds each object to an array.
function getInfo(){
  var initialInfoArray = [];
  var name = prompt("What is your full name?");
  var city = prompt("What city do you live in?");
  var phoneNumber = prompt("What is your phone number?");
  var person = {
    City: city,
    Name: name,
    Phone: phoneNumber,
  };
  initialInfoArray.push(person);
  return initialInfoArray;
}

//function that takes in the information from getInfo() and alerts it in a nicely formatted way; also pushes this array information to personArray
function outputInfo (){
  var outputInfoArray = getInfo();
  alert("Name: " + outputInfoArray[0].Name + "\n" + "City: " + outputInfoArray[0].City + "\n" + "Phone Number: " + outputInfoArray[0].Phone);
  personArray.push(outputInfoArray);
}

//calling functions
alert("Enter student information.");
outputInfo();
//while the prompt is true, prompts if wants to add more students then runs outoutInfo() if user enters yes, otherwise, ends the entering info phase through break
while(true){
var addStudents = prompt("Would you like to add more students? Please answer yes or no.");
  if (addStudents === "yes"){
    outputInfo();
  }
  else {
    break;
  }
}

alert("Enter mentor information.");
outputInfo();
//while the prompt is true, prompts if wants to add more mentors then runs outoutInfo() if user enters yes, otherwise, ends the entering info phase through break
while(true){
  var addMentor = prompt("Would you like to add another Mentor? Please answer yes or no.");
  if (addMentor === "yes"){
    outputInfo();
  }
  else {
    break;
  }
}

console.log(personArray);
