const express = require("express")
const cors = require("cors")
const app = express()
const PORT = 5000

app.use(cors())
app.get("/api/data", (req,res)=>{
    res.send({
        message1: "This is a backend test",
        message2: "Basically testing how to retrieve data from a backend",
        message3: "Not much to it really",
        message4: "Quite simple actually",
        message5: "Kinda a waste of time really",
        message6: "Yet you keep clicking that button",
        message7: "You can go back if you want",
        message8: "Won't be the same text though",
        message9: "Even if you go forward",
        message10: "There is no end",
        message11: "Just kidding I got bored"
    })
})



app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`)
})