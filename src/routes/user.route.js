import userCtrl from "../controllers/user.controller"

function registerUser(request, response) {
  if (!request.body) return response.sendStatus(400)
  userCtrl.createUser(request, response)
  response.end()
}

export default {
  registerUser: registerUser
}
