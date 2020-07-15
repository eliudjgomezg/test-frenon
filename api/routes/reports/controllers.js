const Reports = require("../../collections/Reports")

const get_all_reports = async (req, res) => {
    try {
        const list = await Reports.find({});
        res.send(list);
    } catch (error) {
        res.send(error);
    }
};

const get_one_report = async (req, res) => {
    try {
        const id = req.params.id;
        const item = await Reports.findOne({ _id: id });
        res.send(item);
    } catch (error) {
        res.send(error);
    }
};

const post_report= async (req, res) => {
    try {
        const body = req.body;

        const createdItem = await Reports.create(body);
        res.send(createdItem);
    } catch (error) {
        res.send(error);
    }
};

const put_report = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;

        const editedItem = await Reports.findByIdAndUpdate({ _id: id }, { $set: body }, { new: true });
        res.send({resp:'items deleted'});
    } catch (error) {
        res.send(editedItem);
    }
};

const delete_one_report = async (req, res) => {
    try {
        const deletedList = await Reports.deleteMany({});
        res.send({resp:'items deleted'});
    } catch (error) {
        res.send(error);
    }
};

const delete_all_reports = async (req, res) => {
    try {
        const id = req.params.id

        const deletedItem = await Reports.deleteMany({ });
        res.send({resp:'item deleted'})
    } catch (error) {
        res.send(error);
    }
};

module.exports = {
    get_all_reports,
    get_one_report,
    post_report,
    put_report,
    delete_one_report,
    delete_all_reports
};