const homeController = (req, res) => {
    res.render("home");
};

const globalController = {
    homeController,
};

module.exports = globalController;