// Add an event listener to the form with the ID "login" for the "submit" event
document.querySelector("#login").addEventListener("submit", (event) => {
  event.preventDefault();
  // Create a userObj to store the username and password from the input fields
  const userObj = {
    username: document.querySelector("#loginUsername").value,
    password: document.querySelector("#loginPassword").value,
  };
  console.log(userObj);
  // Send a POST request to the "/api/users/login" endpoint with the userObj data in JSON format
  fetch("/api/users/login", {
    method: "POST",
    body: JSON.stringify(userObj),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    // check if the response is OK
    if (res.ok) {
      // If the response is OK, log a message indicating that the user is logged in
      console.log("user is logged in");
      // Redirect the user to the "/dashboard" page
      location.href = "/dashboard";
    } else {
      // If the response is not OK, show an alert
      alert("please try again");
    }
  });
});
