import UserModel from "../models/user.model"

function createUser(userData) {
  let newUser = new UserModel(userData)
  return newUser.save()
}

module.exports = { createUser: createUser }
