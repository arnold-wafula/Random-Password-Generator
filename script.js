const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbolChars = "!@#$%^&*()_.+-=`~[]{}\';,./?<>";

function generatePassword() {
    const length = document.getElementById("password-length").value;
    const includeUppercase = document.getElementById("include-uppercase").checked;
    const includeLowercase = document.getElementById("include-lowercase").checked;
    const includeSymbols = document.getElementById("include-symbols").checked;

    let chars = lowercaseChars;
    
    if (includeUppercase) chars += uppercaseChars;
    if (includeLowercase) chars += lowercaseChars;
    if (includeSymbols) chars += symbolChars;

    let password = "";
    for (i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * chars.length);
        password += chars[random];
    }

    let passValue = document.getElementById("password").value = password;
    console.log(passValue);
}

document.getElementById("generate").addEventListener("click", generatePassword, false);