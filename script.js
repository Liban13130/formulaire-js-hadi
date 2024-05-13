const form = document.querySelector("form");
const inputMail = document.getElementById("email")


form.addEventListener("submit", (e) => {
    e.preventDefault()

    console.log(inputMail.value);
})