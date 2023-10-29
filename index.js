const form = document.querySelector("form")
const inputs = document.querySelectorAll(".all-inputs input")

console.log(form)


form.addEventListener("submit", (e) => {
    e.preventDefault()
    const inputElements = {}


    inputs.forEach((element) => {
        const key = element.getAttribute('name')
        const value = element.value

        inputElements[key] = value
    })


    const passwordBox = document.querySelector("#password")
    const confirmBox = document.querySelector("#confirm")
    const message = document.querySelector("#alert")
    
    if(inputElements.password !== inputElements.confirmpassword) {
        console.log("error")        

        passwordBox.classList.add("red-border")
        message.classList.remove("displayed")
        confirmBox.classList.add("red-border")
        return
    }

    else {
        passwordBox.classList.remove("red-border")
        message.classList.add("displayed")
        confirmBox.classList.remove("red-border")

        form.reset()
    }

    
})