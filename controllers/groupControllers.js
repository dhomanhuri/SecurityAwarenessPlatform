const index = async (req, res) => {
    const isLoggedin = req.cookies.token != undefined ? true : false;
    res.render("asyncPageList", { isLoggedin, user: req.user, title: "Target | Company" });
};

const group = async (req, res) => {};
module.exports = { index, group };
