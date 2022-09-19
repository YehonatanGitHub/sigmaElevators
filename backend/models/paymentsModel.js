const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Customer',
    },
    due_date: {
      type: String,
    },
    amount_due: {
      type: Number,
      required: [true, 'Please add an amount_due'],
    },
    amount_paid: {
      type: Number,
    },
    payment_type: {
      type: String,
    },
    Kabbalah: {
      type: String,
    },
    Heshbunit: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('Payments', paymentSchema);
