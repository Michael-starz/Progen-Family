const signIn = document.querySelector(".signIn");
const closeModal = document.querySelector(".signUpWrapper > img");
const signInModal = document.querySelector(".signUp");

const openPopup = document.querySelector(".submitButton");
// const closePopup = document.querySelector(".closePopup");
const popUp = document.querySelector("#popup");

// $('#popup').submit(function(openPopup){
//   openPopup.preventDefault();
//   this.submit();
//   $('#popup').modal('show');
// })

// $('#popup').click(function(openPopup) {
//   openPopup.preventDefault(); // don't submit multiple times
//   $(".queryForm").submit(); // use the native submit method of the form element
// $('<button type="button" id="btnThankYou" class="hidden" data-toggle="modal" data-target="#thankyouModal">ThankYouButton</button>').appendTo('#popup');

// //This will click the button and open the modal
// $("#popup" ).trigger("click");
// })

// window.onpageshow = function () {
//   if (
//     typeof window.performance != "undefined" &&
//     window.performance.navigation.type === 0
//   ) {
//     $("#popup").modal("show");
//   }
// };

// FOR DISPLAYING AND HIDING THE LOGIN MODAL
signIn.onclick = () => {
  signInModal.style.display = "block";
  signInModal.classList.add("show-logmodal");
};
closeModal.onclick = () => {
  signInModal.style.display = "none";
  // signInModal.classList.add("hide-logmodal");
};
// signIn.style.cursor = "pointer";

// function openPopup(){
//   popUp.classList.add("open-popup");
// }
// function closePopup(){
//   popUp.classList.remove("open-popup");
// }

// openPopup.onclick = () => {
//   popUp.style.top = '20%';
//   popUp.style.transform = 'translate(-50%, -50%) scale(1)';
//   popUp.style.visibility = 'visible';
//   alert('working');
// };

//VALIDATING SIGN UP FORM
function validate() {
  //MY VARIABLES
  const firstName = document.myForm.firstName.value;
  const middleName = document.myForm.middleName.value;
  const lastName = document.myForm.lastName.value;
  const sex = document.myForm.sex.value;
  const email = document.myForm.email.value;
  const atPos = email.indexOf("@");
  const dotPos = email.lastIndexOf(".");
  const phone = document.myForm.phone.value;
  const password = document.myForm.password.value;
  const confirmPassword = document.myForm.confirm_password.value;

  //ERROR HANDLERS
  const fName_err = document.querySelector(".fName-err");
  const mName_err = document.querySelector(".mName-err");
  const lName_err = document.querySelector(".lName-err");
  const sex_err = document.querySelector(".sex-err");
  const email_err = document.querySelector(".email-err");
  const phone_err = document.querySelector(".phone-err");
  const password_err = document.querySelector(".password-err");
  const confirm_err = document.querySelector(".confirm-err");

  //CHECK FOR FIRST NAME
  if (firstName == "") {
    fName_err.innerHTML = "Please fill in your First name";
    return false;
  } else {
    fName_err.innerHTML = "";
  }

  //CHECK FOR MIDDLE NAME
  if (middleName == "") {
    mName_err.innerHTML = "Please fill in your Middle name";
    return false;
  } else {
    mName_err.innerHTML = "";
  }

  //CHECK FOR LAST NAME
  if (lastName == "") {
    lName_err.innerHTML = "Please fill in your Last name";
    return false;
  } else {
    lName_err.innerHTML = "";
  }

  //CHECK FOR PHONE NUMBER
  if (phone == "") {
    phone_err.innerHTML = "Phone number is required";
    return false;
  } else {
    phone_err.innerHTML = "";
  }
  if (isNaN(phone)) {
    phone_err.innerHTML = "Phone field requires a number";
    return false;
  }
  if (phone.length > 14) {
    phone_err.innerHTML = "Enter valid phone number";
    return false;
  }

  //CHECK FOR SEX
  if (sex == "") {
    sex_err.innerHTML = "Please specify your gender";
    return false;
  } else {
    sex_err.innerHTML = "";
  }

  //CHECK FOR EMAIL
  if (email == "") {
    email_err.innerHTML = "Email is required";
    return false;
  } else {
    email_err.innerHTML = "";
  }
  if (atPos < 1 || dotPos - atPos < 2) {
    email_err.innerHTML = "Invalid Email address";
    return false;
  }

  //CHECK FOR PASSWORD
  if (password == "") {
    password_err.innerHTML = "Enter password";
    return false;
  } else {
    password_err.innerHTML = "";
  }
  if (password.length < 8) {
    password_err.innerHTML = "Minimum of 8 characters required";
    return false;
  }

  //CHECK FOR CONFIRM PASSWORD
  if (confirmPassword == "") {
    confirm_err.innerHTML = "Confirm password";
    return false;
  } else {
    confirm_err.innerHTML = "";
  }
  if (confirmPassword != password) {
    confirm_err.innerHTML = "Password error";
    return false;
  }
}

//VALIDATING INQUIRY FORM

function formValidate() {
  //MY VARIABLES
  const secName = document.queryForm.named.value;
  const sex = document.queryForm.sexy.value;
  const phoneNumber = document.queryForm.phoned.value;
  const email = document.queryForm.mail.value;
  const atPos = email.indexOf("@");
  const dotPos = email.lastIndexOf(".");
  const query = document.queryForm.query.value;
  const popUp = document.querySelector("#popup");
  // const openPopup = document.querySelector(".submitButton");

  //ERROR HANDLERS
  const Name_err = document.querySelector(".named-err");
  const sex_err = document.querySelector(".sexy-err");
  const phone_err = document.querySelector(".phony-err");
  const email_err = document.querySelector(".maily-err");
  const query_err = document.querySelector(".query-err");

  //CHECK FOR NAME
  if (secName == "") {
    Name_err.innerHTML = "Fill in your name";
    return false;
  } else {
    Name_err.innerHTML = "";
  }

  //CHECK FOR SEX
  if (sex == "") {
    sex_err.innerHTML = "Fill in your sex";
    return false;
  } else {
    sex_err.innerHTML = "";
  }

  //CHECK FOR PHONE NUMBER
  if (phoneNumber == "") {
    phone_err.innerHTML = "Phone number is required";
    return false;
  } else {
    phone_err.innerHTML = "";
  }
  if (isNaN(phoneNumber) || phoneNumber.length > 14) {
    phone_err.innerHTML = "Invalid phone number";
    return false;
  }

  //EMAIL CHECK
  if (email == "") {
    email_err.innerHTML = "Enter your email address";
    return false;
  } else {
    email_err.innerHTML = "";
  }
  if (atPos < 1 || dotPos - atPos < 2) {
    email_err.innerHTML = "Invalid Email address";
    return false;
  }

  //QUERY INPUT CHECK
  if (query == "") {
    query_err.innerHTML = "Please enter your query or suggestion";
    return false;
  } else {
    // popUp.classList.add("open-popup");
    query_err.innerHTML = "";
    // openPopup.onclick = () => {
    // popUp.style.visibility = "visible";
    // };
  }
}
