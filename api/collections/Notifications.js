const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotificationsSchema = new Schema({
    notifications: { type: Array }
});
module.exports = mongoose.model("Notifications", NotificationsSchema);