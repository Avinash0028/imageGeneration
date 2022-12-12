const config = require("config");

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: config.get("AUTH.secret"),
});

const openAI = new OpenAIApi(configuration);

const generateImage = async (req, res) => {
    try {
        const response = await openAI.createImage({
            prompt: "a cute girl",
            n: 2,
            size: "512x512",
        });

        const data = response.data;
        res.status(200).render("index", { layout: "main", data });
        console.log(data);
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }

        res.status(400).json({
            success: false,
            error: 'The image could not be generated',
        });

        //   res.status(400).json({Success: false, Data: error.message});
    }
}

module.exports = { generateImage };