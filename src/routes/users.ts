// import =================================================== //
import express = require("express");
import connection_DB = require("../mysql/index");

// types ==================================================== //
interface UserType {
    userId: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
}

// constants ================================================ //
const ROUTER = express.Router();
const SQL_QUERIES = {
    getUserById: `
        SELECT firstName, lastName, email
        FROM users
        WHERE userId=?;
    `,
    postUser: `
        INSERT INTO users(
            userId,
            firstName,
            lastName,
            email,
            password
        )
        VALUES (?, ?, ?, ?, ?);
    `,
};

// main ===================================================== //
ROUTER.route("/")
    .put(async (request, response) => {
        let { userId } = request.body as { userId: string };
        connection_DB.query(
            SQL_QUERIES.getUserById,
            [userId],
            (_, results) => {
                response.send(JSON.stringify(results[0]));
            }
        );
    })
    .post(async (request, response) => {
        let {
            userId,
            firstName,
            lastName,
            email,
            password
        } = request.body as UserType;
        connection_DB.query(
            SQL_QUERIES.postUser,
            [userId, firstName, lastName, email, password],
            (error) => {
                response.send(
                    JSON.stringify({ userAdded: !error })
                )
            }
        );
    })

// export =================================================== //
export = ROUTER;