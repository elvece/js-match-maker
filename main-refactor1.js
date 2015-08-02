//refactoring attempt, trying to display all mentors with specific city

//global variables
var personArray = [];

//all functions

//function that asks the user for their name, phone number, and city, then creates an object for each person and adds each object to an array.
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

//modular function that indiciates while the prompt is true, prompts if wants to add more mentors then runs outoutInfo() if user enters yes, otherwise, ends the entering info phase through break
function addMorePeople(typeStr){
  while(true){
    var addPerson = prompt("Would you like to add another " + typeStr + "? Please answer yes or no.");
    if (addPerson === "yes"){
      outputInfo();
    }
    else {
      break;
    }
  }
}

//function that iterates through the array and displays the mentors of the entered city
//question: since personArry is all students and mentors, how do we find just the mentors with listed city?
//answer? split personArry into serperate student and mentor arrays, but then how do we rework outputInfo function...
function findMentor(city){
  var mentorCityArray = [];
  for (var i = 0; i < personArray.length; i++) {
    var getCity = personArray[1][i].City;
    debugger;
    if (getCity == city){
      mentorCityArray.push(personArray[i].Name);
    }
  }
  console.log(mentorCityArray);
}

//calling functions
alert("Enter student information.");
outputInfo();
addMorePeople("student");

alert("Enter mentor information.");
outputInfo();
addMorePeople("mentor");

prompt("Enter a city to find a mentor.");
findMentor();

// console.log(personArray);



