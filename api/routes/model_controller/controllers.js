const Collection = require("../../collections/model_collection")

const get_all_collection = async (req, res) => {
    try {
        const list = await Collection.find({});
        res.send(list);
    } catch (error) {
        res.send(error);
    }
};

const get_one_collection = async (req, res) => {
    try {
        const id = req.params.id;
        const item = await Collection.findOne({ _id: id });
        res.send(item);
    } catch (error) {
        res.send(error);
    }
};

const post_collection= async (req, res) => {
    try {
        const body = req.body;

        const createdItem = await Collection.create(body);
        res.send(createdItem);
    } catch (error) {
        res.send(error);
    }
};

const put_collection = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;

        const editedItem = await Collection.findByIdAndUpdate({ _id: id }, { $set: body }, { new: true });
        res.send({resp:'items deleted'});
    } catch (error) {
        res.send(editedItem);
    }
};

const delete_all_collection = async (req, res) => {
    try {
        const deletedList = await Collection.deleteMany({});
        res.send({resp:'items deleted'});
    } catch (error) {
        res.send(error);
    }
};

const delete_one_collection = async (req, res) => {
    try {
        const id = req.params.id

        const deletedItem = await Collection.findByIdAndDelete({ _id: id });
        res.send({resp:'item deleted'})
    } catch (error) {
        res.send(error);
    }
};

module.exports = {
    get_all_collection,
    get_one_collection,
    post_collection,
    put_collection,
    delete_one_collection,
    delete_all_collection
};