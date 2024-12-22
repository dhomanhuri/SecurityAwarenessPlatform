const index = async (req, res) => {
    const isLoggedin = req.cookies.token != undefined ? true : false;
    res.render("asyncPageList", { isLoggedin, user: req.user, title: "Company", data: {} });
};
const company = async (req, res) => {
    const isLoggedin = req.cookies.token != undefined ? true : false;
    res.render("asyncPageList", { isLoggedin, user: req.user, title: "Victim", data: { company_id: req.params.id } });
};

module.exports = { index, company };
