import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected");
  } catch (error) {
    console.error("Database Connection Failed:", error);
    process.exit(1);
  }
};

connectDB();

// Health Check API
app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Server is Running",
    data: null,
  });
});

// Import Models
import Review from "./models/Review.js";
import User from "./models/User.js";
import Payment from "./models/paymentpage_model.js";
import Reservation from "./models/Reservation.js";
import Contact from "./models/ContactUs.js";
import Admin from "./models/Admin.js";

// ==============   Review APIs  =============
app.post("/review", async (req, res) => {
  const { name, message, userPhoto } = req.body;

  if (!name || !message) {
    return res.status(400).json({
      success: false,
      message: "Name and message are required",
      data: null,
    });
  }

  try {
    const newReview = await Review.create({ name, message, userPhoto });
    res.json({
      success: true,
      message: "Review added successfully",
      data: newReview,
    });
  } catch (error) {
    console.error("Error adding review:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

app.get("/review", async (req, res) => {
  try {
    const review = await Review.find();
    res.json({
      success: true,
      message: "Review fetched successfully",
      data: review,
    });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

app.delete("/review/:id", async (req, res) => {
  try {
    await Review.deleteOne({ _id: req.params.id });
    res.json({ success: true, message: "Review deleted successfully" });
  } catch (error) {
    console.error("Error deleting review:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// ==============   User APIs (Login & Signup)  =============
app.post("/user", async (req, res) => {
  const { email, userName, userPhoto } = req.body;

  try {
    let existingUser = await User.findOne({ email });

    if (existingUser) {
      existingUser.isLoggedIn = true;
      await existingUser.save();
      res.json({ success: true, message: "User logged in", data: existingUser });
    } else {
      const newUser = await User.create({ email, userName, userPhoto, isLoggedIn: true });
      res.json({ success: true, message: "User created", data: newUser });
    }
  } catch (error) {
    console.error("Error handling user login:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    const bcrypt = await import("bcrypt");
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({ name, email, password: hashedPassword });

    res.status(201).json({ success: true, message: "User registered", data: newUser });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

app.post("/user/logout", async (req, res) => {
  const { email } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      user.isLoggedIn = false;
      await user.save();
      res.json({ success: true, message: "User logged out" });
    } else {
      res.status(404).json({ success: false, message: "User not found" });
    }
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// ==============   Reservation APIs  =============
app.post("/reservation", async (req, res) => {
  const { name, phone, gender, seat, email, age } = req.body; // Fixed missing `age` field

  try {
    const book = await Reservation.create({ name, phone, email, gender, seat, age });
    res.json({ success: true, message: "Reservation created", data: book });
  } catch (error) {
    console.error("Reservation error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

app.get("/reservation", async (req, res) => {
  try {
    const book = await Reservation.find();
    res.json({ success: true, message: "Reservations fetched", data: book });
  } catch (error) {
    console.error("Error fetching reservations:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// ==============   Contact APIs  =============
app.post("/contact", async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.json({ success: true, message: "Message sent", data: contact });
  } catch (error) {
    console.error("Contact error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

app.get("/contact", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json({ success: true, message: "Contacts fetched", data: contacts });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// ==============   Admin APIs  =============
app.post("/admin", async (req, res) => {
  try {
    const admin = await Admin.create(req.body);
    res.json({ success: true, message: "Admin created", data: admin });
  } catch (error) {
    console.error("Admin error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

app.get("/admin", async (req, res) => {
  try {
    const admin = await Admin.findOne();
    if (admin) {
      res.json({ success: true, message: "Admin details fetched", data: admin });
    } else {
      res.status(404).json({ success: false, message: "Admin not found" });
    }
  } catch (error) {
    console.error("Admin fetch error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
