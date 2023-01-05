const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    birthday: { type: Date, required: true },
    image: String
  },
  { timestamps: true }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
