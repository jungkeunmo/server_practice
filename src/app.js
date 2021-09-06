const express = require("express");
const morgan = require("morgan");
const globalRouter = require("./router/globalRouter");

const app = express();
const PORT = 7000;

app.set("view engine", "pug");
app.use(morgan(`dev`));

//app.get("/", (req, res) => {
//res.render("index");
//});

app.use("/", globalRouter);

app.listen(PORT, () => {
    console.log(`${PORT} SERVER START`)
})