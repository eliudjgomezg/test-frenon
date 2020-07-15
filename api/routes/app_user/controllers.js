const AppUsers = require("../../collections/AppUser")

const get_all_AppUsers = async (req, res) => {
    try {
        const list = await AppUsers.find({});
        res.send(list);
    } catch (error) {
        res.send(error);
    }
};

const get_one_AppUser = async (req, res) => {
    try {
        const id = req.params.id;
        const item = await AppUsers.findOne({ _id: id });
        res.send(item);
    } catch (error) {
        res.send(error);
    }
};

const login_post = async (req, res) => {
    try {
        const user = req.body;
        const appUsersToLogin = await AppUsers.findOne({ email: user.email });
        const userWithoutPassword = {
            name: appUsersToLogin.name
        }
        if (appUsersToLogin.password === user.password) {
            res.send(userWithoutPassword)
        } else res.send(false)

    } catch (error) {
        res.send(false);
    }
};

const post_AppUser = async (req, res) => {
    try {
        const body = req.body;

        const createdItem = await AppUsers.create(body);
        res.send({status: 'item created'});
    } catch (error) {
        res.send(error);
    }
};

const put_AppUser = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;

        const editedItem = await AppUsers.findByIdAndUpdate({ _id: id }, { $set: body }, { new: true });
        res.send({ resp: 'items edited' });
    } catch (error) {
        res.send(editedItem);
    }
};

const delete_one_totel = async (req, res) => {
    try {
        const deletedList = await AppUsers.deleteMany({});
        res.send({ resp: 'items deleted' });
    } catch (error) {
        res.send(error);
    }
};

const delete_all_AppUsers = async (req, res) => {
    try {
        const id = req.params.id

        const deletedItem = await AppUsers.findByIdAndDelete({ _id: id });
        res.send({ resp: 'item deleted' })
    } catch (error) {
        res.send(error);
    }
};

module.exports = {
    get_all_AppUsers,
    get_one_AppUser,
    login_post,
    post_AppUser,
    put_AppUser,
    delete_one_totel,
    delete_all_AppUsers
};