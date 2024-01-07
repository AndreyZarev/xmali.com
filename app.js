let submitButton = document.getElementById('buttonSent') 

//Add event listener on click to the button - notice i added the event as argument to the function
submitButton.addEventListener('click', function(event){

    //prevent the reload of the page. here i prevent the event.
    event.preventDefault()

    //Getting the name and email from the DOM
    let name = document.getElementById('name').value
    let number = document.getElementById('number').value
let text = document.getElementById('textarea').value
    //Sending the email with the name and email
    emailjs.send("gmail", "yourjourney", {
        "from_name": name,
        "from_tel": number,
        "from_text": text
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                
            },
            function (error) {
                console.log("FAILED", error);
                
            }

        );
})