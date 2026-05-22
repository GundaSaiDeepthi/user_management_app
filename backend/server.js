import cors from "cors";
import exp from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import { UserApp } from "./APIs/UserAPI.js";

// Load environment variables
config();

// Create Express app
const app = exp();


// ======================
// MIDDLEWARES
// ======================

// Enable CORS
app.use(cors());

// Parse JSON data
app.use(exp.json());


// ======================
// ROUTES
// ======================

// Default Route
app.get("/", (req, res) => {
  res.send({
    message: "Server Running Successfully",
  });
});

// User Routes
app.use("/user-api", UserApp);


// ======================
// DATABASE CONNECTION
// ======================

async function connectDB() {
  try {

    // Connect MongoDB
    await mongoose.connect(process.env.DB_URL);

    console.log("Database Connected Successfully");

    // Start Server
    app.listen(process.env.PORT, () => {
      console.log(`Server started on port ${process.env.PORT}`);
    });

  } catch (err) {

    console.log("Error in DB Connection:", err.message);

  }
}

// Call DB Function
connectDB();


// ======================
// 404 ROUTE HANDLER
// ======================

app.use((req, res) => {
  res.status(404).send({
    message: "Route Not Found",
  });
});


// ======================
// GLOBAL ERROR HANDLER
// ======================

app.use((err, req, res, next) => {

  console.log("Error:", err);

  // Validation Error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation Failed",
      errors: err.errors,
    });
  }

  // Invalid MongoDB ObjectId
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID Format",
    });
  }

  // Duplicate Key Error
  if (err.code === 11000) {
    return res.status(409).json({
      message: "Duplicate Field Value",
      keyValue: err.keyValue,
    });
  }

  // Default Server Error
  res.status(500).json({
    message: "Internal Server Error",
    reason: err.message,
  });

});