const { argon2d } = require("argon2");
const express = require("express");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const router = express.Router();

const User = require("../models/Users");

//router.get('/', (req, res) => res.send("USER ROUTE"));

// @route POST api/auth/register
// @desc Register user
// @access Public
router.post("/register", async (req, res) => {
  const { email, password, fullName, confirmPassword } = req.body;
  // simple validation
  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Missing email and password!" });
  }
  try {
    //Check for existing user
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "Email is already registered!" });
    }

    //All good
    const hashPassword = await argon2.hash(password);
    const newUser = new User({ email, password: hashPassword });
    await newUser.save();

    //Return token access
    const accessToken = jwt.sign(
      { userId: newUser._id },
      process.env.ACCESS_TOKEN_SECRET
    );
    return res
      .status(200)
      .json({ success: true, message: "User is registered successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route POST api/auth/login
// @desc Login user
// @access Public
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  //simple validation
  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Missing email and password!" });
  }

  try {
    //Check for existing user
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Incorrect email or password" });
    }

    //User found
    const passwordValid = await argon2.verify(user.password, password);
    if (!passwordValid) {
      return res
        .status(400)
        .json({ success: false, message: "Incorrect email or password" });
    }

    //Return token access
    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN_SECRET
    );
    return res
      .status(200)
      .json({
        success: true,
        message: "User logged in successfully!",
        user: user,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
