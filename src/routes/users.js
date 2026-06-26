const express = require("express");
const { userAuth } = require("../middleware/auth.js");
const user = require("../models/user");
const ConnectionRequest = require("../models/connectionRequest.js");

const userRouter = express.Router();
const SAFE_USER_DATA = "firstName lastName photoUrl age gender about skills";

userRouter.get("/user/requests/received", userAuth, async (req, res)  => {
    try {
        const loggedInUser = req.user;

        const connectionRequests = await ConnectionRequest.find(
            {
                toUserId: loggedInUser._id,
                status: "interested"
            }
        ).populate("fromUserId", SAFE_USER_DATA);

        res.status(200).json(
            {
                message: "All pending request fetched successfully",
                data: connectionRequests
            }
        );

    } catch (err) {
        req.statusCode(400).send("ERROR: " + err.message);
    }
});

userRouter.get("/user/connections", userAuth, async (req, res) => {
    try {
        const loggedInUser = req.user;

        const connectionRequest = await ConnectionRequest.find(
            {
                $or: [
                    {toUserId: loggedInUser._id, status: "accepted"},
                    {fromUserId: loggedInUser._id, status: "accepted"}
                ]
            }
        )
        .populate("toUserId", SAFE_USER_DATA)
        .populate("fromUserId", SAFE_USER_DATA);

        const data = connectionRequest.map((row) => {
            if(row.fromUserId._id.toString() === loggedInUser._id.toString()) {
                return row.toUserId;
            }

            return row.fromUserId;
        })

        res.json(
            {
                data
            }
        )

    } catch (err) {
        req.statusCode(400).send("ERROR: " + err.message);
    }    
})


module.exports = userRouter