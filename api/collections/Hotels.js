const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HotelsSchema = new Schema({
    hotels: { type: Array }
});
module.exports = mongoose.model("Hotels", HotelsSchema);