// Get Elements
let inputName = document.getElementById("name");
let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");
let inputPhone = document.getElementById("phone");
let inputLocation = document.getElementById("location");
let inputConfirmPassword = document.getElementById("confirmPassword");
let submit = document.getElementById("submit");

// Storage Data
let nameValue = "",
  emailValue = "",
  passValue = "",
  conPassVAlue = "",
  phoneValue = "",
  locationValue = "";

// Add Event Listener
inputName.addEventListener("change", (event) => {
  if (event.target.value.trim() && event.target.value.length >= 5) {
    nameValue = event.target.value;
    event.target.classList.remove("false");
    event.target.classList.add("true");
  } else {
    event.target.classList.remove("true");
    event.target.classList.add("false");
  }
});

inputEmail.addEventListener("change", (event) => {
  if (
    event.target.value.trim() &&
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)
  ) {
    emailValue = event.target.value;
    event.target.classList.remove("false");
    event.target.classList.add("true");
  } else {
    event.target.classList.remove("true");
    event.target.classList.add("false");
  }
});

inputPassword.addEventListener("change", (event) => {
  if (event.target.value.trim() && event.target.value.length >= 8) {
    passValue = event.target.value;
    event.target.classList.remove("false");
    event.target.classList.add("true");
  } else {
    event.target.classList.remove("true");
    event.target.classList.add("false");
  }
});

inputConfirmPassword.addEventListener("change", (event) => {
  if (event.target.value.trim() && event.target.value === passValue) {
    conPassVAlue = event.target.value;
    event.target.classList.remove("false");
    event.target.classList.add("true");
  } else {
    event.target.classList.remove("true");
    event.target.classList.add("false");
  }
});

inputLocation.addEventListener("change", (event) => {
  if (event.target.value.trim() && event.target.value.length >= 10) {
    locationValue = event.target.value;
    event.target.classList.remove("false");
    event.target.classList.add("true");
  } else {
    event.target.classList.remove("true");
    event.target.classList.add("false");
  }
});

inputPhone.addEventListener("change", (event) => {
  if (event.target.value.trim() && event.target.value.length === 11) {
    phoneValue = event.target.value;
    event.target.classList.remove("false");
    event.target.classList.add("true");
  } else {
    event.target.classList.remove("true");
    event.target.classList.add("false");
  }
});

submit.addEventListener("click", (e) => {
  // Check Data True => Send Data From DataBase
  e.preventDefault();
  if (
    nameValue.trim() &&
    emailValue.trim() &&
    passValue.trim() &&
    locationValue.trim() &&
    conPassVAlue.trim() &&
    conPassVAlue === passValue &&
    phoneValue.trim()
  ) {
    var data = {
      name: nameValue,
      email: emailValue,
      password: passValue,
      phone: phoneValue,
      address: locationValue,
    };
    // var jsonData = JSON.stringify(data);
    // var xhr = new XMLHttpRequest();
    // xhr.open("POST", "http://localhost/footer-hunter/php/implementation/signUpPartner.php", true);
    // xhr.setRequestHeader("Content-Type", "application/json");
    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState === 4 && xhr.status === 200) {
    //         console.log(xhr.responseText);
    //     }
    // };
    // xhr.send(jsonData);
    localStorage.setItem(
      "data",
      JSON.stringify({
        name: nameValue,
        email: emailValue,
        phone: phoneValue,
        address: locationValue,
      })
    );
    location.href = "../pages/partner/partner.html";
  } else {
    e.preventDefault();
  }
});
