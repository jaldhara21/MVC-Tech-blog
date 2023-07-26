// Get references to HTML elements using querySelector
var existingBlogs = document.querySelector("#existingblogs");
var createNew = document.querySelector("#createNew");
var newPost = document.querySelector("#newpost");
var newBlog = document.querySelector("#newBlog");

// Function to hide the "Create New Post" section
function hideCreateNew() {
  createNew.hidden = true;
}

hideCreateNew();
// Add a submit event listener to the "New Post" form
newPost.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("click");
  existingBlogs.hidden = true;
  newPost.hidden = true;
  // Show the "Create New Post" section
  createNew.hidden = false;
});
// Add a submit event listener to the "Create New Post" form
newBlog.addEventListener("submit", (event) => {
  var title = document.querySelector("#title").value;
  var content = document.querySelector("#content").value;
  event.preventDefault();
  console.log("you clicked me");
  // Check if both title and content are provided
  if (!title || !content) {
    alert("Please enter both title and content");
    return;
  }
  // Create a blog object with title and content properties
  const blogObj = {
    title: title,
    content: content,
  };
  // Send a POST request to the server to create a new blog post
  fetch("/api/blogs", {
    method: "POST",
    body: JSON.stringify(blogObj),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      // If the POST request is successful, reload the page to show the new blog post
      createNew.setAttribute("hidden", "false");
      location.reload();
    } else {
      alert("Error - please try again");
    }
  });
});
