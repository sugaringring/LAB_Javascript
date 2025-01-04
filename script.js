// Exercise 1: Leap Year Check
function checkLeapYear() {
    const year = prompt("Enter the year:");
    const resultDiv = document.getElementById("leapYearResult");

    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        resultDiv.textContent = `${year} is a leap year.`;
        resultDiv.className = 'result success';
    } else {
        resultDiv.textContent = `${year} is not a leap year.`;
        resultDiv.className = 'result error';
    }
}

// Exercise 2: Join Array Elements
function joinArrayElements() {
    const array = ["JavaScript", "HTML", "CSS", "React", "Node.js"];
    const joinedString = array.join(", ");
    const resultDiv = document.getElementById("arrayJoinResult");

    resultDiv.textContent = `Joined Array: ${joinedString}`;
    resultDiv.className = 'result grey';
}

// Exercise 3: Time Greeting
function greetBasedOnTime() {
    const now = new Date();
    const hours = now.getHours();
    let greeting = '';

    if (hours < 12) {
        greeting = "Good Morning!";
    } else if (hours < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    const resultDiv = document.getElementById("greetingResult");
    resultDiv.textContent = greeting;
    resultDiv.className = 'result success';
}

// Exercise 4: Caesar Cipher
function encryptText() {
    const text = document.getElementById("cipherText").value;
    const shift = parseInt(document.getElementById("shiftValue").value);
    const encrypted = caesarCipher(text, shift);

    const resultDiv = document.getElementById("caesarResult");
    resultDiv.textContent = `Encrypted Text: ${encrypted}`;
    resultDiv.className = 'result success';
}

function decryptText() {
    const text = document.getElementById("cipherText").value;
    const shift = parseInt(document.getElementById("shiftValue").value);
    const decrypted = caesarCipher(text, -shift);

    const resultDiv = document.getElementById("caesarResult");
    resultDiv.textContent = `Decrypted Text: ${decrypted}`;
    resultDiv.className = 'result success';
}

function caesarCipher(str, shift) {
    return str.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            const base = (char.toUpperCase() === char) ? 65 : 97;
            return String.fromCharCode(((code - base + shift) % 26 + 26) % 26 + base);
        }
        return char;
    }).join('');
}
