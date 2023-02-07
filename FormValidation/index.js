
const t_name = document.getElementById('name');
const t_email = document.getElementById('email');
const t_phone = document.getElementById('phone');
let validEmail = false;
let validPhone = false;
let validUser = false;
$('#failure').hide();
$('#success').hide();

// console.log(name, email, phone);

t_name.addEventListener('blur', ()=>{
    //console.log("name is blurred");

    // Validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = t_name.value;

    //console.log(regex, str);

    if(regex.test(str)){
       // console.log('Your name is valid');
        t_name.classList.remove('is-invalid');
        validUser = true;
    }
    else{
        // console.log('Your name is not valid');
        t_name.classList.add('is-invalid');
        validUser = false;
        
    }
})

email.addEventListener('blur', ()=>{
    //console.log("email is blurred");

    // Validate email here
    // example : _abc@gmail.com

    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = t_email.value;

    //console.log(regex, str);
    if(regex.test(str)){
      //  console.log('Your email is valid');
        t_email.classList.remove('is-invalid');
        validEmail = true;
    }
    else{
      //  console.log('Your email is not valid');
        t_email.classList.add('is-invalid');
        validEmail = false;
    }
})

t_phone.addEventListener('blur', ()=>{
    //console.log("phone is blurred");

    // Validate phone here
    let regex = /^([0-9]){10}$/;
    let str = t_phone.value;
   // console.log(regex, str);
    if(regex.test(str)){
      //  console.log('Your phone is valid');
        t_phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else{
      //  console.log('Your phone is not valid');
        t_phone.classList.add('is-invalid');
        validPhone = false;
        
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
e.preventDefault(); // Clicking on a "Submit" button, prevent it from submitting a form
                    //Clicking on a link, prevent the link from following the URL

   // console.log('You clicked on submit');
   // console.log(validEmail, validUser, validPhone);
    
    // Submit your form here
    if(validEmail && validUser && validPhone){
        let failure = document.getElementById('failure');

        // console.log('Phone, email and user are valid. Submitting the form');
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        // $('#failure').alert('close');
        $('#failure').hide();
        $('#success').show();
        
    }
    else{
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        // $('#success').alert('hide');
        $('#success').hide();
        $('#failure').show();
        }

    
    
})



/* More on classList :

Note
The classList property is read-only, but you can use the methods listed below, to add, toggle or remove CSS classes from the list:

classList Properties and Methods
Name	Description
add()	Adds one or more tokens to the list
contains()	Returns true if the list contains a class
entries()	Returns an Iterator with key/value pairs from the list
forEach()	Executes a callback function for each token in the list
item()	Returns the token at a specified index
keys()	Returns an Iterator with the keys in the list
length	Returns the number of tokens in the list
remove()	Removes one or more tokens from the list
replace()	Replaces a token in the list
supports()	Returns true if a token is one of an attribute's supported tokens
toggle()	Toggles between tokens in the list
value	Returns the token list as a string
values()	Returns an Iterator with the values in the list

*/