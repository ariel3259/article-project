
const express = require("express");

const db = require("./db/db");

const app = express();

const articles = require("./routes/articles")

const users = require("./routes/users");

const jwt = require("jsonwebtoken");

//Middlewares
app.use(express.json());

//Routes

app.get("/", (req, res) => res.send("Hi word"));

app.use(users)

app.use( (req, res, next) => {

    if(!req.headers.authorization)

        return res.status(403).send("There's no token, no access");

    jwt.verify(req.headers.authorization, "loremloremlorem", (err, decode) => {

        if(err)
            
            return res.status(403).send("Invalid token, no access");

        next();

    });
    
})

app.use(articles);

//Initializing server
app.listen(8000, async () => {
    
    console.log("Server online on port 8000");

    try{

        await db.sync({ force:false });

        console.log("Connected to database");

    }catch(err){

        console.log(err);

    }

});
