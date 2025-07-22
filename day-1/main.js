let userInput =  document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
console.log(userInput);

function calculateAge() {
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getDate();
    let y1 = birthDate.getDate();
    
    console.log(birthDate);
}
