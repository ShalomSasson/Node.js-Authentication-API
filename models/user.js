const config = require('config');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const PasswordComplexity = require('joi-password-complexity');

// Define Data Model Schema 
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  lastName: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  }
},{versionKey:false});

const User = mongoose.model('User', userSchema);

// Validate User Object
function validateUser(user) {
  // get the definition of the complexity of user password
  const passConfig = config.get('password');

  // define user schema validation
  const schema = {
    firstName: Joi.string().min(5).max(50).required(),
    lastName: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: new PasswordComplexity(passConfig.complexityOptions) 
  };

  // validate usr by use schema
  return Joi.validate(user, schema);
}

// Validate Login request Object
function validateLogin(req) {

  // define Login request schema validation
  const schema = {
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(50).required() 
  };

  // validate usr by Login request schema
  return Joi.validate(req, schema);
}

// Encrypt Password 
async function hashUserPassword(password) { 
  const passConfig = config.get('password');
  const salt = await bcrypt.genSalt(passConfig.saltRounds);
  const hashPassword = await bcrypt.hash(password, salt);
  return hashPassword;
}

module.exports.User = User; 
module.exports.validate = validateUser;
module.exports.validateLogin = validateLogin;
module.exports.hashUserPassword = hashUserPassword;