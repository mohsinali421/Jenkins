const express = require("express")
const app = express()
require("dotenv").config()

const PORT = process.env.PORT
app.get("/", (req,res) => {
    res.json("Welcome to Docker and jenkins Servers!")
})

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})