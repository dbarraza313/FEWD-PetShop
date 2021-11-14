function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function getData() {
  let allMsg = [];
  let first_name = document.contactMeForm.fname.value;
  let last_name = document.contactMeForm.lname.value;
  let email = document.contactMeForm.email.value;
  let message = document.contactMeForm.subject.value;
  let errorMessagediv= document.getElementById("errorMessage");
  if(errorMessagediv){
    errorMessagediv.innerHTML="";
  }
  if(validateEmail(email)){
    allMsg.push(first_name);
    allMsg.push(last_name);
    allMsg.push(email);
    allMsg.push(message);
    let stringTemplate = `First Name: ${first_name} Last Name: ${last_name} Email: ${email} `;
    
    return stringTemplate;
  }
  else{

    return "Please enter a valid email";
  }
 
}
function validateEmail(email){
  let regex= /^\S+@\S+\.\S+$/;
  return regex.test(email);

}
function preview () {
  let data = getData();
  let previewMsg = document.getElementById("previewMsg");
  let div=document.createElement("div"); 
  div.id="errorMessage";
  div.innerHTML = `${data}`;
  previewMsg.appendChild(div);
}

