const fields = {}

// document.addEventListener('DOMContentLoaded', function() {
    // fields.name = document.getElementById('name');
    // fields.email = document.getElementById('email');
    // fields.message = document.getElementById('message');


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

(function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('CCmiUEjc9XRCALe-J');
})();

window.onload = function () {
    fields.name = document.getElementById('name');
    fields.email = document.getElementById('email');
    fields.message = document.getElementById('message');

        function isNotEmpty(value) {
            if (value === null || typeof value === 'undefined') return false;
            return (value.length > 0);
        }

        function isEmail(email) {
            let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            return regex.test(String(email).toLowerCase());
        }

        function fieldValidation(field, validationFunction) {
            if (field === null) return false;

            let isFieldValid = validationFunction(field.value)
            if (!isFieldValid) {
                field.className = 'placeholderRed';
            } else {
                field.className = '';
            }

            return isFieldValid;
        }

        function isValid() {
            var valid = true;

            valid &= fieldValidation(fields.name, isNotEmpty);
            valid &= fieldValidation(fields.email, isNotEmpty);
            valid &= fieldValidation(fields.message, isNotEmpty);
            valid &= fieldValidation(fields.email, isEmail);

            return valid;
        }

        function isNotEmpty(value) {
        if(value === null || typeof value === 'undefined') return false;
        return (value.length > 0);
    }

    function isEmail(email) {
        let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return regex.test(String(email).toLowerCase());
    }

    function fieldValidation(field, validationFunction) {
        if (field === null) return false;

        let isFieldValid = validationFunction(field.value)
        if (!isFieldValid) {
            field.className = 'placeholderRed';
        } else {
            field.className = '';
        }

        return isFieldValid;
    }

    document.getElementById('contact-form').addEventListener('submit', function(event){
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        let res = emailjs.sendForm('service_n74l0c9', 'contact_form', this)
        console.log(res, "response")
            // .then(function () {
            //     alert('SUCCESS!');
            // }, function (error) {
            //     alert('FAILED...', error);
            // });
    })
}