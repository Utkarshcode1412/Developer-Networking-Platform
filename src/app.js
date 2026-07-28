const express = require("express")
const connectDB = require("./config/database.js")
const cookieParser = require("cookie-parser");
const app = express();
const cors = require("cors")
require("dotenv").config();
const http = require("http");

app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true,
    }
));
app.use(express.json());
app.use(cookieParser());


const authRouter = require("./routes/registerAuth.js");
const profileRouter = require("./routes/profile.js");
const requestRouter = require("./routes/request.js");
const userRouter = require("./routes/users.js");
const { configDotenv } = require("dotenv");
const initializeSocket = require("./utils/socket.js");
const chatRouter = require("./routes/chatRoute.js");

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);
app.use("/", chatRouter);


const server = http.createServer(app);
initializeSocket(server);


const BASE_PORT = parseInt(process.env.PORT, 10) || 8001;
const MAX_FALLBACKS = 5;

const startServer = (port, fallbackCount = 0) => {
    server.listen(port)
        .on("listening", () => {
            console.log(`server started on port ${port}`);
        })
        .on("error", (err) => {
            if (err.code === "EADDRINUSE") {
                if (fallbackCount < MAX_FALLBACKS) {
                    const nextPort = port + 1;
                    console.warn(`Port ${port} is already in use. Trying port ${nextPort} instead...`);
                    startServer(nextPort, fallbackCount + 1);
                    return;
                }

                console.error(`Port ${port} is already in use and automatic fallback failed. Stop the conflicting process or set a different PORT in .env.`);
                process.exit(1);
            }
            throw err;
        });
};

connectDB()
    .then(() => {
        console.log("Database connected successfully");
        startServer(BASE_PORT);
    })
    .catch(() => {
        console.log("Database cannot be connected "); 
    });


