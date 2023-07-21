// Add an event listener to the form with the ID "signup" for the "submit" event
document.querySelector("#signup").addEventListener("submit",event=>{
    event.preventDefault();
    // Create a userObj to store the username and password from the input fields
    const userObj = {
        username:document.querySelector("#signupUsername").value,
        password:document.querySelector("#signupPassword").value,
    }
    console.log(userObj)
    // Send a POST request to the "/api/users/" endpoint with the userObj data in JSON format
    fetch("/api/users/",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            console.log("user is signed up")
            location.href="/dashboard"
        } else {
            alert("please try again")
        }
    })
})