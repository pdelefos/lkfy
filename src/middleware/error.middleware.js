// Format is : TYPE_OF_ERROR: MESSAGE
const errors = {
  WrongCred: "Wrong username or password",
  LogRequired: "You need to log in to access this ressource",
  ResourceNotFound: "Resource was not found on the server",
  InvalidEmail: "The email is not accessible for some reason",
  InvalidUser: "The provided user doesn't appear to exist",
  InvalidMovieId: "The provided id of the movie doesn't appear to exist",
  MailAlreadyExist: "This email already exist",
  UsernameAlreadyExist: "This username already exist",
  InvalidFileFormat: "This file extension isn't allowed"
}

// Format is : TYPE_OF_SUCCESS: MESSAGE
const success = {
  UserCreateSuccess: "User successfully created",
  LogSuccess: "Succesfully logged in",
  LogoutSuccess: "Successfully logged out",
  ReqSuccess: "Request succesfully executed",
  UserUpSuccess: "User succesfully updated"
}

function errorHandler(result, req, res, next) {
  if ("success" in result) {
    res.status(200).json({
      type: result.type,
      message: success[result.type]
    })
  }
  if ("error" in result) {
  }
}

export default errorHandler
