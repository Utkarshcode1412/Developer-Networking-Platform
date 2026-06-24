const express = require("express");
const { userAuth } = require("../middleware/auth.js");
const profileRouter = express.Router();
const { validateProfileEdit } = require("../utils/validation.js");



profileRouter.get("/profile/view", userAuth, async (req, res) => {
    try {
        const user = req.user;
    
        res.send(user);
    } catch (err) {
        res.status(400).send("Error" + err.message);
    }
})

profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
    try {
        if(!validateProfileEdit) {
            throw new Error("Invalid Edit request");
        }

        const loggedInUser = req.user;

        Object.keys(req.body).forEach((keys) => (loggedInUser[keys] == req.body[keys]));

        await loggedInUser.save();

        res.json({
            message: `${loggedInUser.firstName}, your profile updated successfuly`,
            data: loggedInUser,
        });


    } catch (err) {
        res.status(400).send("Error" + err.message);
    }
})

module.exports = profileRouter;