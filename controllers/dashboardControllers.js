const index = async (req, res) => {
    const isLoggedin = req.cookies.token != undefined ? true : false;
    res.render("index", { title: "Sign In", isLoggedin, user: req.user });
};

module.exports = { index };
