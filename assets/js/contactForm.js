// const fields = {}

{/* <form id="contact-form">
<input type="hidden" name="contact_number">
<div class="fields">
<div class="field half">
<label for="name">Name</label>
<input type="text" name="user_name" id="user_name" />
</div>
<div class="field half">
<label for="email">Email</label>
<input type="text" name="user_email" id="user_email" />
</div>
<div class="field">
<label for="message">Message</label>
<textarea name="message" id="message" rows="4"></textarea>
</div>
</div>
<ul class="actions">
<li><input type="submit" value="Send" class="primary" /></li>
<li><input type="reset" value="Reset" /></li>
</ul>
</form> */}

// document.addEventListener('DOMContentLoaded', function() {
//     fields.name = document.getElementById('name');
//     fields.email = document.getElementById('email');
//     fields.message = document.getElementById('message');


//     function isNotEmpty(value) {
//         if (value === null || typeof value === 'undefined') return false;
//         return (value.length > 0);
//     }

//     function isEmail(email) {
//         let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
//         return regex.test(String(email).toLowerCase());
//     }

//     function fieldValidation(field, validationFunction) {
//         if (field === null) return false;

//         let isFieldValid = validationFunction(field.value)
//         if (!isFieldValid) {
//             field.className = 'placeholderRed';
//         } else {
//             field.className = '';
//         }

//         return isFieldValid;
//     }

//     function isValid() {
//         var valid = true;

//         valid &= fieldValidation(fields.name, isNotEmpty);
//         valid &= fieldValidation(fields.email, isNotEmpty);
//         valid &= fieldValidation(fields.message, isNotEmpty);
//         valid &= fieldValidation(fields.email, isEmail);

//         return valid;
//     }

//     function isNotEmpty(value) {
//     if(value === null || typeof value === 'undefined') return false;
//     return (value.length > 0);
// }

// function isEmail(email) {
//     let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
//     return regex.test(String(email).toLowerCase());
// }

// function fieldValidation(field, validationFunction) {
//     if (field === null) return false;

//     let isFieldValid = validationFunction(field.value)
//     if (!isFieldValid) {
//         field.className = 'placeholderRed';
//     } else {
//         field.className = '';
//     }

//     return isFieldValid;
// }

// function isValid() {
//     var valid = true;

//     valid &= fieldValidation(fields.name, isNotEmpty);
//     valid &= fieldValidation(fields.email, isNotEmpty);
//     valid &= fieldValidation(fields.message, isNotEmpty);
//     valid &= fieldValidation(fields.email, isEmail);

//     return valid;
// }

// class User {
//     constructor(name, email, message) {
//         this.name = name;
//         this.email = email;
//         this.message = message;
//     }
// }

// function sendContact() {
//     if(isValid()) {
//         let usr = new User(name.value, email.value, message.value);
//         alert("success")
//     }else {
//         alert("error")
//     }

// }

// })\


// (function () {
//     // https://dashboard.emailjs.com/admin/account
//     emailjs.init('YOUR_PUBLIC_KEY');
// })();


// window.onload = function () {
//     document.getElementById('contact-form').addEventListener('submit', function (event) {
//         event.preventDefault();
//         // generate a five digit number for the contact_number variable
//         this.contact_number.value = Math.random() * 100000 | 0;
//         // these IDs from the previous steps
//         emailjs.sendForm('contact_service', 'contact_form', this)
//             .then(function () {
//                 console.log('SUCCESS!');
//             }, function (error) {
//                 console.log('FAILED...', error);
//             });
//     });
// }