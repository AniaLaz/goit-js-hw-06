const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
        event.preventDefault();
const {email,password} = event.currentTarget.elements;

if(email.value === "" || password.value === ""){
    alert('Pleasa fill in all the fields');
}
console.log(event.currentTarget.elements);

const result = {
    email: email.value, 
    password: password.value
};

// console.log(`${email.name}: ${email.value}, ${password.name}: ${password.value}`);
console.log(result);
alert('Registration was successful');
event.currentTarget.reset();

    }

