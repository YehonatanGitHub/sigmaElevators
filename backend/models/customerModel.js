const mongoose = require('mongoose');

const customerSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    street_name: {
      type: String,
      required: [true, 'Please add a street name'],
    },
    street_number: {
      type: Number,
      required: [true, 'Please add a street number'],
    },
    first_name: {
      type: String,
      required: [true, 'Please add an first Name'],
    },
    last_name: {
      type: String,
      required: [true, 'Please add an last Name'],
    },
    cell_number: {
      type: String,
      required: [true, 'Please add an cell Number'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
    },
    apt_number: {
      type: String,
    },
    date_joined: {
      type: String,
    },
    active: {
      type: Boolean,
    },
    bank_name: {
      type: String,
    },
    bank_number: {
      type: Number,
    },
    account_number: {
      type: Number,
    },
    monthly_charg: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('Customer', customerSchema);
