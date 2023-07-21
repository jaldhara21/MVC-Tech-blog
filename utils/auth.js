// Middleware for protecting routes by checking if the user is authenticated.
const withAuth = (req, res, next) => {
  // If the user is not authenticated, redirect them to the login page
  if (!req.session.user_id) {
    res.redirect("/login");
  } else {
    // If the user is authenticated, proceed to the next middleware or route
    next();
  }
};

//export the middleware function
module.exports = withAuth;
