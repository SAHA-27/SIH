const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Progress = require("../models/Progress");

const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register a new student & initialize progress record
// @access  Public
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please provide name, email, and password." });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase().trim() });
    if (existingUser) {
      return res.status(400).json({ message: "An account with this email already exists." });
    }

    // Create User (pre-save hook in User.js hashes the password)
    const newUser = new User({
      name,
      email: email.toLowerCase().trim(),
      password,
    });
    await newUser.save();

    // Create associated Student Progress record
    await Progress.create({
      user_id: newUser._id,
      overall_progress: 0,
      completed_modules: 0,
      completed_lessons: 0,
      quiz_score: 0,
      streak: 1,
      total_points: 50, // Initial signup bonus points
      badges: ["Quantum Novice"],
    });

    // Generate JWT Token
    const jwtSecret = process.env.JWT_SECRET || "quantum_secret_key_2026";
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email, name: newUser.name },
      jwtSecret,
      { expiresIn: "7d" }
    );

    return res.status(201).json({
      message: "Registration successful!",
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        profile_photo: newUser.profile_photo || "",
      },
    });
  } catch (error) {
    console.error("Register Error:", error);
    return res.status(500).json({ message: error.message || "Server error during registration." });
  }
});

// @route   POST /api/auth/login
// @desc    Authenticate student & get token
// @access  Public
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Please provide both email and password." });
    }

    // Find user by email
    const user = await User.findOne({ email: email.toLowerCase().trim() });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    // Compare password using User model method
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    // Generate JWT Token
    const jwtSecret = process.env.JWT_SECRET || "quantum_secret_key_2026";
    const token = jwt.sign(
      { id: user._id, email: user.email, name: user.name },
      jwtSecret,
      { expiresIn: "7d" }
    );

    return res.status(200).json({
      message: "Login successful!",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        profile_photo: user.profile_photo || "",
      },
    });
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ message: error.message || "Server error during login." });
  }
});

module.exports = router;
