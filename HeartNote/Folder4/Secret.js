const CorrectPassword = '132302080950';

const PasswordInput = document.getElementById('password');
const Login = document.getElementById('Login')
const Message = document.getElementById('message');

Login.addEventListener('submit', function(event){

    event.preventDefault();
    const Password = PasswordInput.value;

    if (Password === CorrectPassword) {

        window.location.href = 'SecretFolder/InSecret.html';

    } else {

        Message.textContent = 'รหัสผ่านไม่ถูกต้อง';
        Message.className = 'error';

    }
})