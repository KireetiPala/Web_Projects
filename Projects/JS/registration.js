
function RegistrationForm(){
    event.preventDefault();
    validateForm();
    
    
}

// function disableCopy(){
//     var flag = false;
//     alert("Copy is disabled for this field..!");
//     return flag;
// }


// function validateForm(){
//     var isValid    = true;
//     var errorMsg   = "Field can not be left blank";
//     var emailVal   = "Enter valid email ID";
//     var mobileVal  = "Enter valid 10 digits mobile number";

//     var firstName  = document.forms["registerForm"] ["fName"].value;
//     var lastName   = document.forms["registerForm"] ["lName"].value;
//     var gender     = document.forms["registerForm"] ["gender"].value;
//     var emailID    = document.forms["registerForm"] ["emailID"].value;
//     var password   = document.forms["registerForm"] ["passWord"].value;
//     var contactNum = document.forms["registerForm"] ["phoneNumber"].value;
    
//     if (firstName == ""){
//         isValid = false
//         document.getElementById("fNameMsg").innerHTML = errorMsg; 
//     }else{
//         isValid = true;
//         document.getElementById("fNameMsg").innerHTML = "";        
//         if(lastName == "") {
//             isValid = false 
//             document.getElementById("lNameMsg").innerHTML = errorMsg;              
//         }else{
//             isValid = true;
//             document.getElementById("lNameMsg").innerHTML = "";            
//             if(gender == ""){
//                 isValid = false;
//                 document.getElementById("genderMsg").innerHTML = errorMsg;
//             }else{
//                 isValid = true;
//                 document.getElementById("genderMsg").innerHTML = ""; 
//                 if(emailID == ""){
//                     isValid = false;
//                     document.getElementById("emailMsg").innerHTML = errorMsg;
//                 } else{
//                     isvalid = validateEmail(emailID);
//                     console.log(isvalid);
//                     if (isValid == true){
//                         if (password == ""){
//                             isValid = false;
//                             document.getElementById("passwordMsg").innerHTML = errorMsg;
//                         }else{
//                             isValid = true;
//                             document.getElementById("passwordMsg").innerHTML = "";
//                             if(contactNum == ""){
//                                 isValid = false;
//                                 document.getElementById("phoneNumMsg").innerHTML = errorMsg;
//                             }else{
//                                 validateMobile(contactNum);
//                             }
//                         }
//                     }
//                 }             
//             }
//         }
//     }

//     function validateEmail(emailID){
//         var mailPattern = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";
//         if (mailPattern.test(emailID)){
//             isValid = true;
//             document.getElementById("emailMsg").innerHTML = "";
//         }else{
//             isValid = false;
//             document.getElementById("emailMsg").innerHTML = emailVal;
//         }
//         return isValid;
//     }

//     function validateMobile(mobileNum){
//         var mobileNumPattern = "/^\d{10}$/";
//         if (mobileNumPattern.test(mobileNum)){
//             isValid = true;
//             document.getElementById("phoneNumMsg").innerHTML = "";
//         }else{
//             isValid = false;
//             document.getElementById("phoneNumMsg").innerHTML = mobileVal;
//         }
//     }
    
// }

// firstName.onblur = function(){
//     var fName = document.getElementById("firstName");


//     // if (fName !== ""){
//         document.getElementById("fNameMsg").innerHTML = "";
//     // }
    
// }

function validateForm(){
    var errorMsg   = "Field can not be left blank";

    document.getElementById("fNameMsg").innerHTML = ""; 
    document.getElementById("lNameMsg").innerHTML = ""; 

    var fName = false;
    var lName = false;

    firstName.onblur = function(){
        checkFname();
    };

    lastName.onblur = function(){
        checkLname();
    };

    function checkFname(){
        var firstName  = document.forms["registerForm"] ["fName"].value;

        if (firstName == ""){
            document.getElementById("fNameMsg").innerHTML = errorMsg;
            fName = true;
        }else{
            document.getElementById("fNameMsg").innerHTML = "";
        }        
    }

    function checkLname(){
        var lastName   = document.forms["registerForm"] ["lName"].value;

        if (lastName == ""){
            document.getElementById("lNameMsg").innerHTML = errorMsg; 
            lName = true;
        }else{
            document.getElementById("lNameMsg").innerHTML = ""; 
        }
    }

        checkFname();
        checkLname();

        if (fName === false && lName === false){
            alert("registration is good");
            return true;
        }else{
            alert("Please fill the form correctly");
            return false;
        }
    


}

// firstName.onblur(function(){
//     checkFname();
// })













