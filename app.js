const form = document.getElementById("surveyForm");

form.addEventListener('submit', function(event){

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const description = document.getElementById("description").value;

    const recommend = document.querySelector("input[name='recommend']:checked")?.value;

    const languages = [];
    document.querySelectorAll("input[name='languages']:checked").forEach(function(checkbox){
        languages.push(checkbox.value);
    });

    console.log("Nombre", name);
    console.log("Email", email);
    console.log("Edad", age);
    console.log("Which option best describes you?", description);
    console.log("Would you recommend this site?", recommend);
    console.log("Languages and Frameworks:", languages);

    alert("Form Submitted 😉");

});