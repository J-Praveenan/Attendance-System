const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send("Welcome User");
})

app.listen(3002,() => console.log("Backend is running in the port 3002"));