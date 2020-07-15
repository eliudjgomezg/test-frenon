const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const AppUserSchema = new Schema({
    name: { type: String, required: true, unique: true, dropDups: true },
    email: { type: String, required: true, unique: true, dropDups: true },
    password: { type: String,  default: 12345678 },

});
module.exports = mongoose.model("AppUser", AppUserSchema);