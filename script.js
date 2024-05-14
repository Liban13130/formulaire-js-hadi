const form = document.querySelector("form");
const inputMail = document.getElementById("email")
const errorMsg = document.getElementById("error")
const userMail = document.getElementById("user-mail")
const landingPage = document.querySelector(".container")
const subscriptionPage = document.querySelector(".container-2")
const backHome = document.querySelector('.back-home')
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/



form.addEventListener("submit", (e) => {
    e.preventDefault()

    if(regexEmail.test(inputMail.value)){
        errorMsg.style.display = "none"
        inputMail.style.borderColor = "inherit"
        subscriptionPage.style.display = "flex"
        landingPage.style.display = "none"

        userMail.textContent = inputMail.value
        userMail.style.fontWeight = "bold"
    }else{
        inputMail.style.borderColor = "red"
        errorMsg.style.display = "block"
    }
})

backHome.addEventListener('click', () => {
    subscriptionPage.style.display = "none"
    landingPage.style.display = "flex"
    inputMail.value = ""
})