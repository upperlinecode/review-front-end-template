const nameField = document.querySelector("input#query")
const codeField = document.querySelector("input#code")
const response = document.querySelector(".response")

nameField.addEventListener("input", respond)
codeField.addEventListener("input", respond)

function respond(e) {
  console.log(e.target.value)
  let name = nameField.value
  let code = codeField.value
  if (name == "Dracula" || code == 42) {
    vampire()
  } else if (name == "Beyonce") {
    queen()
  }
}

function vampire() {
  response.innerHTML += `<img src="https://media.giphy.com/media/upztYklL3VhNm/giphy.gif"/>`
}

function queen() {
  response.innerHTML += `<img src="https://media.giphy.com/media/11wsZr0jbXc15m/giphy.gif"/>`
}
