import express, { urlencoded } from "express"
import mongoose from "mongoose"

const router = express.Router()
const dbURL = "mongodb://127.0.0.1:27017/lkfy"

// express config
let app = express()
let urlEncodedParser = express.urlencoded({ extended: false })
app.use(urlEncodedParser)

// mongodb config
mongoose.connect(dbURL)
let db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))
db.once("connected", function() {
  console.log("Connected to database at " + dbURL)
})

// routes
import userRoutes from "./routes/user.route"

router.use("/", userRoutes)
app.get("/", (request, response) => response.send("hello mojo !"))

// server config
let server = app.listen(3000, () => {
  console.log("Server is running at http://localhost:" + server.address().port)
})
