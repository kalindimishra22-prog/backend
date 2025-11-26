const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Hello World...!")
})

app.get("/:name", (req, res) => {
    const name = req.params.name
    if (name === "stuti") {

        res.send(`Hello battery`)
    } else {
                res.send(`Hello ${name}`)

    }
})

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});