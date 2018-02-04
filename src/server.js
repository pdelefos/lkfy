import express from "express"
import mongoose from "mongoose"

const dbURL = "mongodb://127.0.0.1:27017/lkfy"

// express config
let app = express()
let urlEncodedParser = express.urlencoded({ extended: false })

// mongodb config
mongoose.connect(dbURL)
let db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))
db.once("connected", function() {
  console.log("Connected to database at " + dbURL)
})

// routes
import userRoute from "./routes/user.route"

app.get("/", (request, response) => response.send("hello mojo !"))
app.post("/register", urlEncodedParser, userRoute.registerUser)

// server config
let server = app.listen(3000, () => {
  console.log("Server is running at http://localhost:" + server.address().port)
})
