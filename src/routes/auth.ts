// import =================================================== //
import express = require("express");
import connection_DB = require("../mysql/index");
import { MysqlError } from "mysql";

// types ==================================================== //
interface UserValidationType {
    email: string,
    password: string,
}
interface ResultUserPostType {
    userId: string,
}

// constants ================================================ //
const ROUTER = express.Router();
const SQL_QUERIES = {
    postUserData: `
        SELECT userId
        FROM users
        WHERE email=? and password=?;
    `,
};

// main ===================================================== //
ROUTER.route("/")
    .post(async (request, response) => {
        let { email, password } = request.body as UserValidationType;
        connection_DB.query(
            SQL_QUERIES.postUserData,
            [email, password],
            (error: MysqlError | null, results: ResultUserPostType[]) => {
                if (error) console.log(error);
                let hasUserId = !error && results.length;
                response.send(
                    JSON.stringify({
                        userId: hasUserId ? results[0].userId : null
                    })
                );
            }
        );
    });

// export =================================================== //
export = ROUTER;