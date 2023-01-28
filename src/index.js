const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.static("public"));
app.use(
    cors({
        origin: "*",
    })
);
app.set("trust proxy", true);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "../public/index.html");
});

app.get("/api/whoami", (req, res) => {
    const ipaddress = req.ip;
    const language = req.headers["accept-language"];
    const software = req.headers["user-agent"];
    res.send({
        ipaddress,
        language,
        software,
    });
});

app.listen(8081, () => {
    console.log("Server running on port 8081");
});
