import http from "http"
import assert from "assert"

import "../src/server"

describe("lkfy server", () => {
  it("Should return 200", done => {
    http.get("http://localhost:3000", result => {
      assert.equal(result.statusCode, 200)
      done()
    })
  })
})
