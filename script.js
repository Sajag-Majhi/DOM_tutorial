const Name = document.getElementById("name")
const roll = document.getElementById("roll")
const address = document.getElementById("address")

const form = document.getElementById("entryform")
const submit = document.getElementById("btn_submit")
const transcript = document.querySelector("aside")

form.addEventListener("submit", function(event){ 
    event.preventDefault()  //prevent reload
    /*
    alert(
        "name: " + name.value + "\n" +
        "roll: " + roll.value + "\n" +
        "address: " + address.value + "\n"
    )*/

    if(Number(roll.value) < 0)  //explicit type casting in javascript
    {
        alert("Please enter valid roll no")
        return;
    }

    transcript.innerHTML = `
        <h2> Transcript </h2>
        <dl class = "details">
            <dt>Name: </dt>
            <dd>${Name.value}</dd>

            <dt>Roll: </dt>
            <dd>${roll.value}</dd>

            <dt>Address: </dt>
            <dd>${address.value}</dd>
        </dl>
    `
})