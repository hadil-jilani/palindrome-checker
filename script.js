function isPalindrome(text) {

    text = text.toLowerCase().replace(/[^0-9a-z]/gi, '');
    // Check if the string is a palindrome
    let reversedText = text.split("").reverse().join('');
    return (reversedText === text)
}

function showResult (res) {
    let resultZone = document.getElementById('result')
    resultZone.innerHTML = res;
}

function startGame() {
    let btnCheck = document.getElementById("check-btn")
    let textInput = document.getElementById("text-input")
    
    let result = false
    btnCheck.addEventListener("click", () => {
        if (textInput.value === "") {
            showResult("Please enter some text :)")
        }
        else {
            result = isPalindrome(textInput.value)
        if (result) {
            showResult(`${textInput.value} is a palindrome! :D`);
        } else {
            showResult(`${textInput.value} is not a palindrome! :(`)
        }
        }
        
    })
}
startGame()
