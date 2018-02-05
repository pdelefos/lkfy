import userService from "../services/user.service"

function postUser(request, response, next) {
  userService
    .createUser(request.body)
    .then(data => {
      console.log("success : ", data)
      response.json({msg: "insert ok"})
    })
    .catch(err => next(err))
}

export default { postUser: postUser }
