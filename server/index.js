import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import mongoose from "mongoose"
import authRoutes from "./routes/AuthRoutes.js"

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;
const databaseURL = process.env.DATABASE_URL;

console.log("Allowed Origin:", process.env.ORIGIN);

// Enable CORS
app.use(cors({
    origin: (origin, callback) => {
        if (process.env.ORIGIN.includes(origin) || !origin) { // Allow localhost:5174 or no origin for testing
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
}));

// Static file serving
app.use("/uploads/profiles", express.static("uploads/profiles"));

// Middleware
app.use(cookieParser());
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);

// Start server
const server = app.listen(port, () => {
    console.log(`Server is running at https://localhost:${port}`);
});

// Database connection
mongoose.connect(databaseURL).then(()=> {
    console.log("DB Connection Successful");
}).catch(err=>console.log(err.message));
