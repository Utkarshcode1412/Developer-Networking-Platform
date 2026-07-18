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


app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);


const server = http.createServer(app);
initializeSocket(server);


connectDB()
    .then(() => {
        console.log("Database connected successfully");
        server.listen(process.env.PORT, () => {
            console.log("server started");
        })
    })
    .catch(() => {
        console.log("Database cannot be connected "); 
    });


