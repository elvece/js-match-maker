
var studentsArr = [];


// function studentInfo (){

  var num = "";

  function validateNum (userInput){

    if (userInput = typeof("number")){
      // userInput = num;
      return true;
    }
    else {
      //bad input
      return false;
    }
  }

  while(true){
    var enter = Number(prompt("Hello! Please tell me how many students are learning JavaScript?"));
    var endLoop = validateNum(enter);
    if(endLoop){
      break;
    }
    else{
      alert("Please enter a valid number.");
    }
  }


//   function validatePhone(){
//     if (phoneNumber.charAt(3) !== "-" && phoneNumber.charAt(7) !== "-" && phoneNumber.length !== 12){
//     alert("You did not enter your phone number correctly. Please try again.");
//     }
//     return true;
//   }

//   for (var i = 0; i <= num; i++) {

//     var name = prompt("What is your name?").toString().replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

//     var phoneNumber = prompt("What is your phone number?. Please enter in the format: XXX-XXX-XXXX").toString();



//     var city = prompt("What is your city?").toString().replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

//     var student = {
//       City: city,
//       Name: name,
//       Phone: phoneNumber,
//       };
//       studentsArr.push(student);
//   }
// }

// studentInfo();
