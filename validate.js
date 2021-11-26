var errorName = document.getElementsByClassName("errors")[0];
var errorCompany = document.getElementsByClassName("errors")[1];
var errorEmail = document.getElementsByClassName("errors")[2];
var errorPhone = document.getElementsByClassName("errors")[3];
var errorCategory = document.getElementsByClassName("errors")[4];
var errorTextArea = document.getElementsByClassName("errors")[5];




function validateName(){

    var name = document.getElementById("name").value;
    if (name.match(/^[a-zA-Z ]{2,30}$/)) 
    {
        errorName.textContent = ""
    } else {
        
        errorName.textContent = "Please enter Name of more than 1 letter but less than 30"
        errorName.style.color = "red"
        errorName.style.opacity='0.7';
    }
}

function validateEmail(){
    
    var email = document.getElementById("email").value;

    if(email.length>0){
        email_label.style.transform = "translateY(-20px)"
    }
    else 
        email_label.style.transform = "translateY(0px)"

    
    if (email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) 
    {
        errorEmail.textContent = ""
    } 
    else {
        errorEmail.textContent = "Please enter a valid email"
        errorEmail.style.color = "red"
        errorEmail.style.opacity='0.7';
    }
}

function validatePhone(){
    
    var Phone = document.getElementById("phone").value;
    if (Phone.match(/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)) 
    {
        errorPhone.textContent = ""
    } 
    else {
        errorPhone.textContent = "Please enter a valid phone number"
        errorPhone.style.color = "red"
        errorPhone.style.opacity='0.7';
    }
}
function validateTextArea(){
    
    var TextArea = document.getElementById("textArea").value;
    if (TextArea.length > 2) 
    {
        errorTextArea.textContent = ""
    } 
    else {
        errorTextArea.textContent = "Please enter more than 2 letters"
        errorTextArea.style.color = "red"
        errorTextArea.style.opacity='0.7';
    }
}
function validateCompany(){
    
    var Company = document.getElementById("company").value;
    if (Company.match(/^[A-Z][a-z A-Z]{2,30}$/)) 
    {
        errorCompany.textContent = ""
    } 
    else {
        errorCompany.textContent = "More than 2 letters. Starts with capital letter"
        errorCompany.style.color = "red"
        errorCompany.style.opacity='0.7';
    }
}