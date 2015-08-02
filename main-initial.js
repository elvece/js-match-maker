//second attempt, works with alerts

//global variables
var personArray = [];


//all functions
function getNumOfPeople(str){
  return prompt("How many " + str + " are learning Javascript?");
}

//For each student, ask the user for their name, phone number, and city. Create an object for each person. Add each object to an array.

function getInfo(num){
  var infoArray = [];
  for (var i = 0; i < num; i++) {
    var name = prompt("What is your full name?");
    var city = prompt("What city do you live in?");
    var phoneNumber = prompt("What is your phone number?");
    var person = {
      City: city,
      Name: name,
      Phone: phoneNumber,
    };
    infoArray.push(person);
  }
  return infoArray;
}

//calling functions
alert("Enter student information"); //do you want to enter another student
var numOfStudents = getNumOfPeople("students");
var studentArray = getInfo(numOfStudents);
personArray.push(studentArray);
for (var i = 0; i < numOfStudents; i++) {
  alert("Name: " + personArray[0][i].Name + "\n" + "City: " + personArray[0][i].City + "\n" + "Phone Number: " + personArray[0][i].Phone);
}


// alert("Enter mentor information");
// var numOfMentors = getNumOfPeople("mentors");
// var mentorArray = getInfo(numOfMentors);
// personArray.push(mentorArray);


// console.log(personArray);
