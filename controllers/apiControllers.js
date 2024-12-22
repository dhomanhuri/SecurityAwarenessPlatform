const model = require("../models/index");
const { transporter } = require("../utils/mailer");
const group = async (req, res) => {
    const group = await model.Group.findAll();
    return res.json({
        status: true,
        data: group,
    });
};
const group_store = async (req, res) => {
    try {
        const group = await model.Group.create(req.body);
        return res.json({
            status: true,
            message: "data succesfully stored",
        });
    } catch (error) {
        console.log(error);

        return res.status(400).json({
            status: false,
            message: "something wrone",
        });
    }
};
const group_update = async (req, res) => {
    try {
        const group = await model.Group.update(req.body, { where: { id: req.params.id } });
        return res.json({
            status: true,
            message: "data succesfully edited",
        });
    } catch (error) {
        console.log(error);

        return res.status(400).json({
            status: false,
            message: "something wrone",
        });
    }
};
const group_destroy = async (req, res) => {
    try {
        const group = await model.Group.destroy({ where: { id: req.params.id } });
        return res.json({
            status: true,
            message: "data succesfully deleted",
        });
    } catch (error) {
        console.log(error);

        return res.status(400).json({
            status: false,
            message: "something wrone",
        });
    }
};
const group_data = async (req, res) => {
    const group = await model.GroupData.findAll();
    return res.json({
        status: true,
        data: group,
    });
};
const group_data_company = async (req, res) => {
    const group = await model.GroupData.findAll({ where: { group_id: req.params.id } });
    return res.json({
        status: true,
        data: group,
    });
};
const group_data_store = async (req, res) => {
    try {
        const group = await model.GroupData.create(req.body);
        return res.json({
            status: true,
            message: "data succesfully stored",
        });
    } catch (error) {
        console.log(error);

        return res.status(400).json({
            status: false,
            message: "something wrone",
        });
    }
};
const group_data_update = async (req, res) => {
    try {
        const group = await model.Group.update(req.body, { where: { id: req.params.id } });
        return res.json({
            status: true,
            message: "data succesfully edited",
        });
    } catch (error) {
        console.log(error);

        return res.status(400).json({
            status: false,
            message: "something wrone",
        });
    }
};
const group_data_destroy = async (req, res) => {
    try {
        const group = await model.GroupData.destroy({ where: { id: req.params.id } });
        return res.json({
            status: true,
            message: "data succesfully deleted",
        });
    } catch (error) {
        console.log(error);

        return res.status(400).json({
            status: false,
            message: "something wrone",
        });
    }
};

const submit_phishing = async (req, res) => {
    console.log(req.body);
    const victim = await model.GroupData.findAll({ where: { group_id: req.body.target } });
    victim.forEach(async (element) => {
        console.log(element.email);
        const info = await transporter.sendMail({
            from: `noreply@jejaki.id`,
            to: element.email,
            subject: "test phising",
            text: "test?",
            html: `${req.body.content}`,
        });
        console.log(info);
    });
    return res.json({
        status: true,
        message: "data will processed",
    });
};
module.exports = {
    submit_phishing,
    group,
    group_store,
    group_update,
    group_destroy,
    group_data,
    group_data_store,
    group_data_update,
    group_data_destroy,
    group_data_company,
};
