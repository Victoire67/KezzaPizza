import msql from "mysql2";

const connexion = msql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "PizzaDb", 
})

export default connexion.promise();