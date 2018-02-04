import express from "express"
import userCtrl from "../controllers/user.controller"
let router = express.Router()

router.route("/users").post(userCtrl.postUser)

export default router
