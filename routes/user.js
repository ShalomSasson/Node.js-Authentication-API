const bcrypt = require('bcrypt');
const _ = require('lodash');
const {User, validate, validateLogin, hashUserPassword} = require('../models/user');
const express = require('express');
const router = express.Router();

/*********************************************************************************
 ***********************************  User Login *********************************
/*********************************************************************************/ 
router.post('/login', async (req, res) => {
  // validate user object by user model validation functionallty
  const { error } = validateLogin(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  // check if this user exist in DB
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('Invalid user or password');

  // check if the user use correct password
  const validateLoginPasswor = await bcrypt.compare(req.body.password, user.password);
  if(!validateLoginPasswor) return res.status(400).send('Invalid user or password');
  
  res.send(_.pick(user, ['_id', 'firstName', 'lastName', 'email']));
});

/*********************************************************************************
 ****************************  Registration New User  ****************************
/*********************************************************************************/
router.post('/', async (req, res) => {
  // validate user object by user model validation functionallty
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  // check if the user exist in DB 
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send('User Exist........');

  user = new User(_.pick(req.body, ['firstName', 'lastName', 'email', 'password']));
  
  // Encrypt user password
  user.password = await hashUserPassword(user.password);

  // Save user
  await user.save();
  
  res.send(_.pick(user, ['_id', 'firstName', 'lastName', 'email']));
});

module.exports = router; 
