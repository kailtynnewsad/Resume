"use strict";

var confirm_button = function(){
var userName = document.getElementById("name").value;
var emailAddress = document.getElementById("email").value;  
var phone = document.getElementById("phone").value; 
var validatePhone = /^\d{3}-\d{3}-\d{4}$/;
var phoneIsValid = validatePhone.test(phone);
var errorMessage = "";
    

 
//Shipping information errors
if (userName == "") {
    errorMessage = "You must enter a name"
    
document.getElementById("name").nextElementSibling.innerHTML =
   errorMessage;  

}
else {
 document.getElementById("name").nextElementSibling.innerHTML = ""; 
}

if (emailAddress == ""){
errorMessage = "You must enter an email address"
 document.getElementById("email").nextElementSibling.innerHTML =
   errorMessage;    
}
else {
  document.getElementById("email").nextElementSibling.innerHTML = ""; 
  
}

    
if (phone ==""){
    errorMessage = "You must enter a phone number"
    
document.getElementById("phone").nextElementSibling.innerHTML =
   errorMessage;
    
} else if(phoneIsValid == "") {
  errorMessage = "Phone formated must be 123-123-1234"
    
   document.getElementById("phone").nextElementSibling.innerHTML =
   errorMessage; 
}

else{
 document.getElementById("phone").nextElementSibling.innerHTML = "";    
}


 // submit the form if all entries are valid/
    if (errorMessage == "") {
      document.getElementById("baseball_form").submit(); 
    }
    
};

var reds_button = function(){
var reds = document.getElementById("team1").checked
 if  (reds = true){
   document.getElementById("cap").src = "images/reds.jpg";  
 } else {
   document.getElementById("cap").src = "images/indians.jpg";  
 } 
   
    
};

var indians_button = function(){
var indians = document.getElementById("team2").checked
 if  (indians = true){
     document.getElementById("cap").src = "images/indians.jpg";
 }
else {
    document.getElementById("cap").src = "images/reds.jpg";    
    }
    
    
};

var tigers_button = function(){
var tigers = document.getElementById("team3").checked
 if  (tigers = true){
     document.getElementById("cap").src = "images/tigers.jpg";
 }
else {
    document.getElementById("cap").src = "images/reds.jpg";    
    }
    
    
};

var reset_button = function(){
var name_box = document.getElementById("name").value = '';
var email_box = document.getElementById("email").value = '';
var phone_box = document.getElementById("phone").value = '';
var textbox = document.getElementById("textbox").value = '';
var tigers = document.getElementById("team3").checked = false;
var indians = document.getElementById("team2").checked = false;  
var reds = document.getElementById("team1").checked = true;
var promotions_box = document.getElementById("option1").checked = false;
var products_box = document.getElementById("option2").checked = false;
var catelog_box = document.getElementById("option3").checked = false;  

    
if (tigers = false){
    document.getElementById("cap").src = "images/reds.jpg"; 
}
else if (reds = true){
   document.getElementById("cap").src = "images/reds.jpg";  
}
else {
    document.getElementById("cap").src = "images/reds.jpg"; 
    }
};

window.onload = function() {
    document.getElementById("confirm").onclick = confirm_button;
    document.getElementById("team1").onclick = reds_button;
    document.getElementById("team2").onclick = indians_button;
     document.getElementById("team3").onclick = tigers_button;
    document.getElementById("reset").onclick = reset_button;
};
