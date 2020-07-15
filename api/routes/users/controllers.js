const Users = require("../../collections/Users")

const get_all_users = async (req, res) => {
    try {
        const list = await Users.find({});
        res.send(list);
    } catch (error) {
        res.send(error);
    }
};

const get_one_user = async (req, res) => {
    try {
        const id = req.params.id;
        const item = await Users.findOne({ _id: id });
        res.send(item);
    } catch (error) {
        res.send(error);
    }
};

const post_user= async (req, res) => {
    try {
        const body = req.body;

        const createdItem = await Users.create(body);
        res.send(createdItem);
    } catch (error) {
        res.send(error);
    }
};

const put_user = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;

        const editedItem = await Users.findByIdAndUpdate({ _id: id }, { $set: body }, { new: true });
        res.send({resp:'items deleted'});
    } catch (error) {
        res.send(editedItem);
    }
};

const delete_one_user = async (req, res) => {
    try {
        const deletedList = await Users.deleteMany({});
        res.send({resp:'items deleted'});
    } catch (error) {
        res.send(error);
    }
};

const delete_all_users = async (req, res) => {
    try {
        const id = req.params.id

        const deletedItem = await Users.findByIdAndDelete({ _id: id });
        res.send({resp:'item deleted'})
    } catch (error) {
        res.send(error);
    }
};

module.exports = {
    get_all_users,
    get_one_user,
    post_user,
    put_user,
    delete_one_user,
    delete_all_users
};