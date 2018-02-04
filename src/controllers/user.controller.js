import userService from "../services/user.service"

function postUser(request, response) {
  userService
    .createUser(request.body)
    .then(data => console.log("success : ", data))
    .catch(err => console.log(err))
}

export default { postUser: postUser }
