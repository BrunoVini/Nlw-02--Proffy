// Find the button
document.querySelector("#add-time")
.addEventListener('click', cloneField)

// When click the button

var lengthItem = document.querySelector(".schedule-item").length

// Execute a function
function cloneField(){
    // Clone the way
    const newFields = document.querySelector(".schedule-item").cloneNode(true)

    // Clear ways
    const fields = newFields.querySelectorAll('input')

    fields.forEach(function(field){
      field.value = ""
    });

    document.querySelector("#schedule-item").appendChild(newFields)

}

// var number = 0

// document.querySelector('.delete-time').addEventListener('click', number++)