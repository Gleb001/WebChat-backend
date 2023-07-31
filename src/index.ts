// imports ================================================== //
// express -------------------------------------------------- //
import express = require("express");
// cors ----------------------------------------------------- //
import cors = require("cors");
// middleware ----------------------------------------------- //
// import errorHandler = require("@middleware/errorHandler");
// constants ------------------------------------------------ //
import { PORT } from "@constants/index";
// routing -------------------------------------------------- //
import friends = require("@routes/friends");
import chats = require("@routes/chats");
import users = require("@routes/users");
import messages = require("@routes/messages");

// constants ================================================ //
const APP = express();

// main ===================================================== //
APP.use(express.json());
APP.use(cors());

APP.use("/api/friends", friends);
APP.use("/api/chats", chats);
APP.use("/api/users", users);
APP.use("/api/messages", messages);

// APP.use(errorHandler);

APP.listen(
    PORT,
    () => {
        console.log(
            `CORS-mode enabled`, "\n",
            `Server started at http://localserver:${PORT}`, "\n",
        );
    }
);