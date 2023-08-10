// import =================================================== //
import express = require("express");
// import connection_DB = require("../mysql/index");
// import { MysqlError } from "mysql";
import getVerificationCode = require("../helper/getVerificationCode");
import sendEmail = require("../workWithEmail");

// constants ================================================ //
const ROUTER = express.Router();

// main ===================================================== //
ROUTER.route("/")
    .put(async ({ body }, response) => {
        
        let { email } = body;

        let verificationCode = getVerificationCode(5);
        let isSendEmail = sendEmail({
            from: 'robotlastname@mail.ru',
            to: email,
            subject: `
                Здравствуйте! Проверочный код для аутентефикация
                электронной почты на сайте 'Hi' (WebChat)...
            `,
            text: `
                Здравствуйте! Ваш аутентификационный код:
                ${verificationCode}.
            `,
        });

        response.send({
            isSuccess: isSendEmail,
            verificationCode
        });

    });

// export =================================================== //
export = ROUTER;