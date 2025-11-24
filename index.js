// รหัสที่ถูก
const CorrectUsername = 'MALTESE';
const CorrectPassword = '24082568';

// ประกาศตัวแปรทั้งหมด
const Login = document.getElementById('Login');
const UsernameInput = document.getElementById('username');
const PasswordInput = document.getElementById('password');
const Message = document.getElementById('message');

// ดักจับการกดยืนยัน
Login.addEventListener('submit', function(event){
    
    // กันเว็บโหลด
    event.preventDefault();

    // ดึงค่าที่กรอก
    const Username = UsernameInput.value;
    const Password = PasswordInput.value;

    // เทียบรหัส
    if (Username === CorrectUsername && Password === CorrectPassword) {

        window.location.href = 'Eh/Eh.html';

    } else {

        Message.textContent = 'ชื่อผู้ใช้หรือรหัสผ่าน ไม่ถูกต้อง';
        Message.className = 'error';

    }

})
