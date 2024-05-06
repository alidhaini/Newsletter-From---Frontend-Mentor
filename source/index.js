const subscription_card = document.querySelector(".subscription-card");
const email_input = document.querySelector('.email-input');
const submit_btn = document.querySelector('.submit');

const invalid_message = document.querySelector('.invalid-email')

const success_card = document.querySelector(".success-card");
const success_email_input = document.querySelector('.success-email-input');
const success_btn = document.querySelector('.success-btn');

function formSuccess() {
    subscription_card.style.display = 'none';
    success_card.style.display = '';
}

function validateEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
    /**
     ^: Asserts the start of the string.
    [^\s@]+: Matches one or more characters that are not whitespace or @.
    @: Matches the @ symbol.
    [^\s@]+: Matches one or more characters that are not whitespace or @.
    \.: Matches a literal dot (.).
    [^\s@]+: Matches one or more characters that are not whitespace or @.
    $: Asserts the end of the string.
     */
}

submit_btn.addEventListener('click',(e) => {
        e.preventDefault();
        const email = email_input.value.trim();

        if(validateEmail(email)){
            formSuccess();
            success_email_input.innerHTML = email;
            email_input.value = '';

            invalid_message.style.display = 'none';
            email_input.classList.remove('invalid-input');
        }

        else{
            invalid_message.style.display = 'block';
            email_input.classList.add('invalid-input');
        }
});


success_btn.addEventListener('click', () => {
    subscription_card.style.display = '';
    success_card.style.display = 'none';
})


