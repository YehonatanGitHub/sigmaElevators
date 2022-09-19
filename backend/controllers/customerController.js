const asyncHandler = require('express-async-handler');

// const Goal = require('../models/goalModel')
const User = require('../models/userModel');
const Customer = require('../models/customerModel');

// @desc    Get customers
// @route   GET /api/customers
// @access  Private
const getCustomers = asyncHandler(async (req, res) => {
  const customers = await Customer.find();
  res.status(200).json(customers);
});

// @desc    Set Customer
// @route   POST /api/customers
// @access  Private
const setCustomer = asyncHandler(async (req, res) => {
  if (!req.body.street_name) {
    res.status(400);
    throw new Error('Please try again');
  }
  console.log(req.body.street_number);

  const customer = await Customer.create({
    street_name: req.body.street_name,
    street_number: req.body.street_number,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    cell_number: req.body.cell_number,
    email: req.body.email,
    apt_number: req.body.apt_number,
    date_joined: req.body.date_joined,
    date_joined: req.body.apt_number,
    active: req.body.active,
    bank_name: req.body.bank_name,
    bank_number: req.body.bank_number,
    account_number: req.body.account_number,
    monthly_charg: req.body.monthly_charg,
  });
  res.status(200).json(customer);
});

// // @desc    Update goal
// // @route   PUT /api/goals/:id
// // @access  Private
// const updateGoal = asyncHandler(async (req, res) => {
//   const goal = await Goal.findById(req.params.id);

//   if (!goal) {
//     res.status(400);
//     throw new Error('Goal not found');
//   }

//   // Check for user
//   if (!req.user) {
//     res.status(401);
//     throw new Error('User not found');
//   }

//   // Make sure the logged in user matches the goal user
//   if (goal.user.toString() !== req.user.id) {
//     res.status(401);
//     throw new Error('User not authorized');
//   }

//   const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//   });

//   res.status(200).json(updatedGoal);
// });

// // @desc    Delete goal
// // @route   DELETE /api/goals/:id
// // @access  Private
// const deleteGoal = asyncHandler(async (req, res) => {
//   const goal = await Goal.findById(req.params.id);

//   if (!goal) {
//     res.status(400);
//     throw new Error('Goal not found');
//   }

//   // Check for user
//   if (!req.user) {
//     res.status(401);
//     throw new Error('User not found');
//   }

//   // Make sure the logged in user matches the goal user
//   if (goal.user.toString() !== req.user.id) {
//     res.status(401);
//     throw new Error('User not authorized');
//   }

//   await goal.remove();

//   res.status(200).json({ id: req.params.id });
// });

module.exports = {
  getCustomers,
  setCustomer,
  // updateCustomer,
  // deleteCustomer,
};
