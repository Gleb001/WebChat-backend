// import =================================================== //
import mysql = require("mysql");

// constants ================================================ //
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "webchat",
});

// main ===================================================== //
connection.connect((error) => {
    console.log(
        error ?
            error.message :
            "Вы работаете с базой данных!"
    );
});

// export =================================================== //
export = connection;