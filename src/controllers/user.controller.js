import UserModel from "../models/user.model"
import { error } from "util"

function createUser(request, response) {
  let newUser = request.body
  return UserModel.create(newUser)
    .then(data => console.log("coycoy", data))
    .catch(err => console.error(simplifyError(err)))
}

function simplifyError(errorObj) {
  return { code: errorObj.code, name: errorObj.name, msg: errorObj.message }
}

module.exports = { createUser: createUser }
