const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    users: { type: Array }
});
module.exports = mongoose.model("Users", UsersSchema);