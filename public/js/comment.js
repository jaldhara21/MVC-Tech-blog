// Add an event listener to the form with the ID "newComment" for the "submit" event
document.querySelector("#newComment").addEventListener("submit", (event) => {
  // Prevent the default form submission behavior to handle the form submission manually
  event.preventDefault();
  // Create a comment object to store the comment body and associated blogId from the input fields
  const comment = {
    body: document.querySelector("#comment").value,
    blogId: document.querySelector("#hiddenCommentId").value,
  };
  // Send a POST request to the "/api/comments" endpoint with the comment data in JSON format
  fetch("/api/comments", {
    method: "POST",
    body: JSON.stringify(comment),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      console.log("comment posted");
      location.reload();
    } else {
      alert("please try again");
    }
  });
});
