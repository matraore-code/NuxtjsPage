const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    formule: { type: String, required: true },
    photo: { type: String, required: false },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    address: { type: String, required: true },
    codePostal: { type: String, required: false },
    city: { type: String, required: true },
    province: { type: String, required: false },
    country: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 8 },
    telephone: { type: String, required: true },
    whatsapp: { type: String, required: false },
    linkedin: { type: String, required: false },
    instagram: { type: String, required: false },
    facebook: { type: String, required: false },
    fax: { type: String, required: false },
    github: { type: String, required: false },
    biography: { type: String, required: true },
    notes: [{ type: mongoose.Types.ObjectId, required: false, ref: 'Note' }],
    rappels: [{ type: mongoose.Types.ObjectId, required: false, ref: 'Rappel' }]
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);