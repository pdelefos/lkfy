import express from "express"
import userCtrl from "../controllers/user.controller"
import errorHandler from "../middleware/error.middleware"
let router = express.Router()

router.route("/").post(userCtrl.postUser)
router.use(errorHandler)

export default router
