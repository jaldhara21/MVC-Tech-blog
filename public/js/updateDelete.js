// This event listener is triggered when the "Update" button is clicked.
document.querySelector("#update").addEventListener("click",event=>{
    event.preventDefault();
    // Get the blogId and the edited blog title and content
    const blogId = document.querySelector("#hiddenBlogId").value;
    const editBlog = {
        title:document.querySelector("#editedTitle").value,
        content:document.querySelector("#editedContent").value,
    }
    console.log(blogId);
    console.log(editBlog);
    // Send a PUT request to update the blog with the edited content.
    fetch((`/api/blogs/${blogId}`),{
        method:"PUT",
        body:JSON.stringify(editBlog),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            console.log("blog updated")
            // Redirect to the dashboard after successful update.
            location.href="/dashboard"
        } else {
            alert("please try again")
        }
    })
})

// Added event listener is triggered when the "Delete" button is clicked.
document.querySelector("#delete").addEventListener("click",event=>{
    event.preventDefault();
    // Get the blogId from the hidden
    const blogId = document.querySelector("#hiddenBlogId").value;
    // Send a DELETE request to delete the blog with the specified blogId.
    fetch((`/api/blogs/${blogId}`),{
        method:"DELETE",
    }).then(res=>{
        if(res.ok){
            console.log("blog deleted")
            // Redirect to the dashboard after successful deletion.
            location.href="/dashboard"
        } else {
            alert("please try again")
        }
    })
})