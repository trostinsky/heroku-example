const express = require("express");
const app = express();

// Это нужно для деплоя на хероку
const {PORT = 3000} = process.env;

app.get("/myname/", (req, res, next) => {
    res.json({
        name: "Vlad"
    })
});

// Подключаем фронтэнд нашего приложения
app.use("/", express.static(__dirname + "/heroku-frontend/build"));

// Используем PORT, для интеграции с heroku
app.listen(PORT, () => {
    console.log("SERVER IS STARTED");
})