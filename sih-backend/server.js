require("dotenv").config({ path: "./.env" });
const express = require('express');
const app = express();
const cors = require('cors');

// db connection
require("./models/database").connectDatabase();

//connection b/w backend and frontend
app.use(cors());
const PORT = 8080;

app.get("/api/home", (req,res) => {
    res.json({
        message:"Hello World!!!"
    })
})

app.listen(PORT, ()=>{
    console.log(`Server started at port : ${PORT}. To visit simply visit : http://localhost:${PORT}/`)
})