const express = require("express"),
    config = require("config"),
    bodyParser = require("body-parser"),
    handlebars = require('express-handlebars'),
    app = express();

const {generateImage} = require("./controllers/imageGenerate");

app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
    extname: 'hbs',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'
}));

app.get("/", (req, res) => {

    const data = "Running";

    res.status(200).json({ "Message": "Success", "Data": data })

    console.log(`Running`);
});

app.get("/generate", generateImage);


// app.get("/generate", async (req, res) => {

//     const data = await generateImage;

//     res.status(200).render("index", {layout : "main", data});

// });

app.listen(config.get("App.port"), () => {
    console.log(`App Is Running At http://${config.get("App.host")}:${config.get("App.port")}`);
});