const express = require("express"),
    config = require("config"),
    bodyParser = require("body-parser"),
    app = express();

    app.get("/", (req, res) => {

        const data = "Running";

        res.status(200).json({"Message" : "Success", "Data" : data})

        console.log(`Running`);
    });

    app.listen(config.get("App.port"), () => {
        console.log(`App Is Running At http://${config.get("App.host")}:${config.get("App.port")}`);
    });