import express from "express"
let app = express()

app.get("/", (request, result) => {
  result.send("hello mojo !")
})

let server = app.listen(3000, () => {
  console.log("Server is running at http://localhost:" + server.address().port)
})
