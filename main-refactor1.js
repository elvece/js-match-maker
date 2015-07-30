//global variables
var personArray = [];


//all functions
// function getNumOfPeople(str){
//   return prompt("How many " + str + " are learning Javascript?");
// }

//For each student, ask the user for their name, phone number, and city. Create an object for each person. Add each object to an array.

function getInfo(num){
  var infoArray = [];
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
outputInfo("students");

//refactor so applicable to students and mentors, make function

function outputInfo (str){
  var num = getNumOfPeople(str);
  var infoArray = getInfo(num);
  infoArray.push(infoArray);
  for (var i = 0; i < num; i++) {
    alert("Name: " + infoArray[0][i].Name + "\n" + "City: " + infoArray[0][i].City + "\n" + "Phone Number: " + infoArray[0][i].Phone);
  }
  console.log(infoArray);
}



// var numOfStudents = getNumOfPeople("students");
// var studentArray = getInfo(numOfStudents);
// personArray.push(studentArray);
// for (var i = 0; i < numOfStudents; i++) {
//   alert("Name: " + personArray[0][i].Name + "\n" + "City: " + personArray[0][i].City + "\n" + "Phone Number: " + personArray[0][i].Phone);
// }
// var addStudents = alert("Would you like to add more students?");
// if (addStudents === "yes"){

  //run new refactored function for students
// }

//repeat for mentors

// alert("Enter mentor information");
// var numOfMentors = getNumOfPeople("mentors");
// var mentorArray = getInfo(numOfMentors);
// personArray.push(mentorArray);


// console.log(personArray);
