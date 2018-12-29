const express = require("express");
const app = express();

app.get("/myname/", (req, res, next) => {
    res.json({
        name: "Vlad"
    })
});

app.listen(3000, () => {
    console.log("SERVER IS STARTED");
})