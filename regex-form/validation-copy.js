let patterns = {
  username: /^[a-z\d]{5,12}$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  password: /^[\w@-]{8,20}$/,
  telephone: /^\d{10}/,
  slug: /^[a-z\d-]{8,20}$/,
};

let input = document.getElementsByTagName("input");

// let inputArray = Array.from(input);

Array.from(input).forEach((element) => {
  element.addEventListener("input", (e) => {
    console.log(e.target, e.target.attributes.name.value);
    validateInput(e.target, patterns[e.target.attributes.name.value]);
  });
});

function validateInput(field, regex) {
  if (field.value.match(regex)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
}

// function validateInput() {
//   if (this.name == "username") {
//     if (this.value.match(/^[a-zA-Z]{5,12}$/)) {
//       this.style.border = "3px solid green";
//     } else if (this.value == "") {
//       this.style.border = "3px solid #bdbdbd";
//     } else {
//       this.style.border = "3px solid orange";
//     }
//   } else if (this.name == "email") {
//     if (this.value.match(/^.+@.+\..+$/)) {
//       this.style.border = "3px solid green";
//     } else if (this.value == "") {
//       this.style.border = "3px solid #bdbdbd";
//     } else {
//       this.style.border = "3px solid orange";
//     }
//   } else if (this.name == "password") {
//     if (this.value.match(/^.{8,20}$/)) {
//       this.style.border = "3px solid green";
//     } else if (this.value == "") {
//       this.style.border = "3px solid #bdbdbd";
//     } else {
//       this.style.border = "3px solid orange";
//     }
//   } else if (this.name == "telephone") {
//     if (this.value.match(/^\d{10}$/)) {
//       this.style.border = "3px solid green";
//     } else if (this.value == "") {
//       this.style.border = "3px solid #bdbdbd";
//     } else {
//       this.style.border = "3px solid orange";
//     }
//   } else if (this.name == "slug") {
//     if (this.value.match(/^[a-z]|\d|-{8,20}$/)) {
//       this.style.border = "3px solid green";
//     } else if (this.value == "") {
//       this.style.border = "3px solid #bdbdbd";
//     } else {
//       this.style.border = "3px solid orange";
//     }
//   }
// }
// ------------------------------------------------------------------------------
// let username = document.querySelector('[name="username"]');

// console.log(username);

// function validateInput() {
//   let regexExp = /^[a-zA-Z]{5,12}$/;
//   console.log(this.value);
//   if (this.value.match(regexExp)) {
//     username.style.border = "3px solid green";
//   } else if (this.value == "") {
//     username.style.border = "3px solid #bdbdbd";
//   } else {
//     username.style.border = "3px solid orange";
//   }
// }

// username.addEventListener("input", validateInput);
