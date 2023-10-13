require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
//const connection = require("./db");
const mongoose=require('mongoose');
const PORT=process.env.PORT||8080;
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

// database connection
//connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8080;
mongoose.connect("mongodb://127.0.0.1:27017/loginpage")
.then(()=>{
    console.log("db connected"),
app.listen(PORT,()=>console.log("server is running"));
})
.catch((err)=>console.log(err));
