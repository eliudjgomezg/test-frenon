const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReportsSchema = new Schema({
    reports: { type: Array }
});
module.exports = mongoose.model("Reports", ReportsSchema);