const Notifications = require("../../collections/Notifications")

const get_all_notifications = async (req, res) => {
    try {
        const list = await Notifications.find({});
        res.send(list);
    } catch (error) {
        res.send(error);
    }
};

const get_one_notification = async (req, res) => {
    try {
        const id = req.params.id;
        const item = await Notifications.findOne({ _id: id });
        res.send(item);
    } catch (error) {
        res.send(error);
    }
};

const post_notification= async (req, res) => {
    try {
        const body = req.body;

        const createdItem = await Notifications.create(body);
        res.send(createdItem);
    } catch (error) {
        res.send(error);
    }
};

const put_notification = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;

        const editedItem = await Notifications.findByIdAndUpdate({ _id: id }, { $set: body }, { new: true });
        res.send({resp:'items deleted'});
    } catch (error) {
        res.send(editedItem);
    }
};

const delete_one_notification = async (req, res) => {
    try {
        const deletedList = await Notifications.deleteMany({});
        res.send({resp:'items deleted'});
    } catch (error) {
        res.send(error);
    }
};

const delete_all_notifications = async (req, res) => {
    try {
        const id = req.params.id

        const deletedItem = await Notifications.findByIdAndDelete({ _id: id });
        res.send({resp:'item deleted'})
    } catch (error) {
        res.send(error);
    }
};

module.exports = {
    get_all_notifications,
    get_one_notification,
    post_notification,
    put_notification,
    delete_one_notification,
    delete_all_notifications
};