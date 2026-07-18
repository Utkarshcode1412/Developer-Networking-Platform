const { connection } = require("mongoose");
const socket = require("socket.io");
const crypto = require("crypto");

const getSecretRoomId = ({userId, targetUserId}) => {
    return crypto   
        .createHash("sha256")
        .update([userId, targetUserId].sort().join("_"))
        .digest("hex");
};

const initializeSocket = (server) => {
    const io = socket(server, {
        cors: {
            origin: "http://localhost:5173",
        },
    });

    io.on("connection", (socket) => {
        // handle events

        socket.on("joinChat", ({firstName, userId, targetUserId}) => {
            const roomId = getSecretRoomId(userId, targetUserId);
            socket.join(roomId);
        });

        socket.on("sendMessage", () => {
            const roomId = getSecretRoomId(userId, targetUserId);
            io.on(roomId).emit("messageReceived", {firstName, text});
        });



        socket.on("disconnect", () => {});
    });
};

module.exports = initializeSocket;
