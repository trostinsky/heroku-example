const express = require("express");
const app = express();
const {PORT = 3000} = process.env;

app.get("/myname/", (req, res, next) => {
    res.json({
        name: "Vlad"
    })
});

app.listen(PORT, () => {
    console.log("SERVER IS STARTED");
})