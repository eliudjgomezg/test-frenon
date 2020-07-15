const Hotels = require("../../collections/Hotels")

const get_all_hotels = async (req, res) => {
    try {
        const list = await Hotels.find({});
        res.send(list);
    } catch (error) {
        res.send(error);
    }
};

const get_one_hotel = async (req, res) => {
    try {
        const id = req.params.id;
        const item = await Hotels.findOne({ _id: id });
        res.send(item);
    } catch (error) {
        res.send(error);
    }
};

const post_hotel= async (req, res) => {
    try {
        const body = req.body;

        const createdItem = await Hotels.create(body);
        res.send(createdItem);
    } catch (error) {
        res.send(error);
    }
};

const put_hotel = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;

        const editedItem = await Hotels.findByIdAndUpdate({ _id: id }, { $set: body }, { new: true });
        res.send({resp:'items edited'});
    } catch (error) {
        res.send(editedItem);
    }
};

const delete_one_totel = async (req, res) => {
    try {
        const deletedList = await Hotels.deleteMany({});
        res.send({resp:'items deleted'});
    } catch (error) {
        res.send(error);
    }
};

const delete_all_hotels = async (req, res) => {
    try {
        const id = req.params.id

        const deletedItem = await Hotels.findByIdAndDelete({ _id: id });
        res.send({resp:'item deleted'})
    } catch (error) {
        res.send(error);
    }
};

module.exports = {
    get_all_hotels,
    get_one_hotel,
    post_hotel,
    put_hotel,
    delete_one_totel,
    delete_all_hotels
};