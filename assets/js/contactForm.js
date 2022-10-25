const fields = {}
window.onload = function () {
    let errors = []

    fields.user_name = document.getElementById('user_name');
    fields.user_email = document.getElementById('user_email');
    fields.message = document.getElementById('message');

        (function() {
            // https://dashboard.emailjs.com/admin/account
            emailjs.init('CCmiUEjc9XRCALe-J');
        })();
    
        function isNotEmpty(value) {
            console.log(value, "in is not empty")
            if (value === null || typeof value === 'undefined') {
                errors.push("Field cannot be empty")
                return false;
            }
            return (value.length > 0);
        }

        function isEmail(email) {
            console.log(email, "in is email")
            let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            console.log(regex.test(String(email).toLowerCase()), "regex test")
            if (!regex.test(String(email).toLowerCase())) {
                errors.push("Invalid email")
            }
            return true;
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
            console.log("inside is valid")
            // console.log(fieldValidation(fields))
            console.log(fields.user_name.value, fields.user_email.value, fields.message.value)
            // let userEmpty = fieldValidation(fields.user_name, isNotEmpty);
            if(!isNotEmpty(fields.user_name.value)){
                errors.push("Name field cannot be empty")
                valid = false
            }
            if(!isNotEmpty(fields.user_email.value)){
                errors.push("Email field cannot be empty")
                valid = false
            }
            if(!isNotEmpty(fields.message.value)){
                errors.push("Message field cannot be empty")
                valid = false
            }
            if(!isEmail(fields.user_email.value)){
                errors.push("Invalid email")
                valid = false
            }
            return valid;
        }

        function isNotEmpty(value) {
        if(value === null || typeof value === 'undefined'){
            errors.push("Field cannot be empty")
            return false;
        } 
        return (value.length > 0);
    }

    function isEmail(email) {
        let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return regex.test(String(email).toLowerCase());
    }

    document.getElementById('contact-form').addEventListener('submit', async function(event){
        this.contact_number.value = Math.random() * 100000 | 0;
        if(isValid()) {
            let res = await emailjs.sendForm('service_n74l0c9', 'contact_form', this)
            alert("SUCCESS")
        }else {
            alert(errors.join("\n"))
        }
        errors = []
    })
}