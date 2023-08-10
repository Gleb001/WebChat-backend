// import =================================================== //
import nodemailer = require("nodemailer");
import type { Transporter, SendMailOptions } from "nodemailer";

// types ==================================================== //
interface userDataType {
    user: string,
    pass: string
}
type getTransporterType = ({
    user, pass
}: userDataType) => Transporter

// constants ================================================ //
const getTransporter: getTransporterType = ({
    user, pass
}) => {
    return nodemailer.createTransport({
        host: "smtp.mail.ru",
        port: 465,
        secure: true,
        tls: { rejectUnauthorized: false, },
        auth: { user, pass }
    })
};
const sendEmail = async (mailOptions: SendMailOptions) => {

    let transporter = getTransporter({
        user: "robotlastname@mail.ru",
        pass: "Vzb3efr0jQmQLTH1Fj8w",
    });

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log("Сообщение отправлено успешно!");
        console.log(info);
        return true;
    } catch (error) {
        console.log("Ошибка в отправку сообщение на почту для верификации почты!");
        console.log(error);
        return false;
    }

};

// export =================================================== //
export = sendEmail;