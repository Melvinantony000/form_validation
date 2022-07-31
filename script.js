function checkHandler(check){
  let submit = document.getElementById("subBmit");
  submit.disabled = check.checked ? false : true;
  if(!submit.disabled){
    submit.focus();
  } 
} 
 
function submitHandler(){
    let compName = document.getElementById("comp_name").value;
    let email = document.getElementById("email_box").value;
    let passWord = document.getElementById("passWord").value;
 
     
// Company
    if(compName === ""){
       document.getElementById("invalid_company").innerHTML="please enter your company name"
    }
 // Email
    let emailAddress = email.slice(email.length - 10, email.length);

    if(emailAddress === "@gmail.com"){
        if(email.length > 10 ){ 
        }else{
            document.getElementById("invalid_email").innerHTML="Please enter valide mail"
        }
    }else{
        document.getElementById("invalid_email").innerHTML="Please enter valide mail"
    }

//PassWord
if(passWord == ""){
    document.getElementById("invalid_password").innerHTML="please enter password"
}
if(passWord.length < 8){
    document.getElementById("invalid_password").innerHTML="Password length must be atleast 8 characters"
}
if(passWord.length > 15){
    document.getElementById("invalid_password").innerHTML="Password length must not exceed 15 characters"
}














} 
