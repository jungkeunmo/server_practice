const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = 7000;

app.set("view engine", "pug");
app.use(morgan(`dev`));

app.listen(PORT, () => {
    console.log(`${PORT} SERVER START`)
})