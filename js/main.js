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
  allMsg.push(first_name);
  allMsg.push(last_name);
  allMsg.push(email);
  allMsg.push(message);
  let space = `u00A0\u00A0\u00A0\u00A0`;
  let stringTemplate = `First Name: ${first_name}${space}Last Name: ${last_name}${space}Email: ${email} ${space} `;
  return stringTemplate;
}

function preview () {
  let data = getData();
  let previewMsg = document.getElementById("previewMsg");
  previewMsg.innerHTML= `${data}`;
}

