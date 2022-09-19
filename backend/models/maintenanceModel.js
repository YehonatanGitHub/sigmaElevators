const mongoose = require('mongoose');

const maintenanceSchema = mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Customer',
    },
    type: {
      type: String,
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
    },
    date: {
      type: Date,
      required: [true, 'Please add a date'],
    },
    date_done: {
      type: Date,
    },
    cost: {
      type: Number,
      required: [true, 'Please add an amount_due'],
    },
    description_work_done: {
      type: String,
      required: [true, 'Please add a description_work_done'],
    },
    technician: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('Maintenance', maintenanceSchema);
