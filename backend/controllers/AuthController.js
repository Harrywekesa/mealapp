const User = require('../models/User');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

function registerUser(req, res) {
  // Add registration logic here
}

function loginUser(req, res) {
  // Add login logic here
}

function logoutUser(req, res) {
  // Add logout logic here
}

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
};