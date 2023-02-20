import express from "express"

const port = process.env.PORT || 3000
const app = express()

app.get("/", (req, res) => {
    res.send("let containersize the app")
    });

app.listen(3000, () => {
    console.log(`Server is running on port ${port}...`)
    });

