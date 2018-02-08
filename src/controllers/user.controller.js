import UserModel from "../models/user.model"

function postUser(request, response, next) {
  let newUser = new UserModel(request.body)
  newUser
    .save()
    .then(success => next({ success, type: "UserCreateSuccess" }))
    .catch(error => next({ error }))
}

export default { postUser: postUser }
