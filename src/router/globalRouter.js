const express = require("express");
const {
    homeController,
} = require("../controller/globalController");

const globalRouter = express.Router();

globalRouter.get("/", homeController);

module.exports = globalRouter;