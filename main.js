const form = document.querySelector("form")
const nameInput = document.querySelector("#name")
const nameError = document.querySelector("#name-error")

form.addEventListener("submit", function(event) {
    event.preventDefault()
    if (nameInput.value === ""){
            nameError.classList.remove("hidden")
    }
    else {
            nameError.classList.add("hidden")
    }
})