import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "cheldean",
    password:"1234",
    database:"blogs"
})