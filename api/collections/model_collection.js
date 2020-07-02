const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
//const Collection = require("./Collection_to_relacionate")

const CollectionSchema = new Schema({
    name: { type: String },
    idNumber: { type: String, required: true, unique: true, dropDups: true },
    email: { type: String, required: true, unique: true, dropDups: true },
    phone: { type: Number },
    rol: {type: String,  default: 'Profesor'},
    password: { type: String,  default: 12345678 },
    //classroom: {type: ObjectId, ref: Collection},
    serviceDay: { type: String },
    hoursStartSchedule: { type: Number }, 
    minutesStartSchedule: { type: Number },
    hoursFinaltSchedule: { type: Number },
    minutesFinaltSchedule: { type: Number },
    foreing: {type: Boolean, default: false},
    disable: {type: Boolean, default: false}
});
module.exports = mongoose.model("Collection", CollectionSchema);