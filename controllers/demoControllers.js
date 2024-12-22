const index = async (req, res) => {
    const isLoggedin = req.cookies.token != undefined ? true : false;
    res.render("demo", { isLoggedin, user: req.user });
};

module.exports = { index };
