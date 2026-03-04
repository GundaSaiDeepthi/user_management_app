import cors from "cors";
import exp from 'express';
import { connect } from 'mongoose';
import { config } from 'dotenv';
import { UserApp } from './APIs/UserAPI.js';

//Read environmental variables
config();
//Create HTTP Server
const app=exp();
app.use(cors());
//Add body parser middleware
app.use(exp.json())
//forward req to UserAPI if path starts with /user-api
app.use("/user-api",UserApp);
//connect to DB
async function connectDB() {
    try{
        await connect(process.env.DB_URL);
        console.log("Connected to DataBase")
        //assign port number
        
 app.listen(process.env.PORT, () => console.log(`server started on port ${process.env.PORT}`));
    }catch(err){
        console.log("Error in connecting DB:",err)
    }
}
connectDB()

//Add error handling middleware
app.use((err, req, res, next) => {
  // Mongoose validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation failed",
      errors: err.errors,
    });
  }
  // Invalid ObjectId
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  // Duplicate key
  if (err.code === 11000) {
    return res.status(409).json({
      message: "Duplicate field value",
    });
  }
  res.status(500).json({
    message: "Internal Server Error",
  });
});