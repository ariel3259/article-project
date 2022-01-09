const {Router} = require("express");

const route = Router();

const Users = require("../db/model/Users");

const bcrypt = require("bcrypt");

const {Op} = require("sequelize");

const jwt = require("jsonwebtoken");

//Register an user

route.post("/api/users/register", async (req, res) => {

    if(!req.body.name || !req.body.last_name || !req.body.email || !req.body.password)

        return res.status(400).send("Incomplete data");

    const salt = await bcrypt.genSalt(8);
        
    const passwordHashed = await bcrypt.hash(req.body.password, salt);

    await Users.create({

        name : req.body.name,

        last_name: req.body.last_name,

        email: req.body.email,

        password: passwordHashed
    
    });

    res.send("Congratulations, your account has been created");
});

//Authentificates an user

route.post("/api/users/auth", async (req, res) => {

    if(!req.body.email || !req.body.password)
        
        return res.status(400).send("Incomplete data");

    const userToFind = await Users.findOne({ 

        where: {

            email: {

                [Op.eq]: req.body.email

            }

        }

    });

    if(!userToFind)

        return res.status(400).send("The user doesn't exist");

    const verifyPassword = await bcrypt.compare(req.body.password, userToFind.password);

    if(!verifyPassword)

        return res.status(400).send("Wrong password");

    jwt.sign({ check: true }, "loremloremlorem", { algorithm: "HS256", expiresIn: "30m"}, (err, token) => {

        if(err){

            console.log(err);

            return res.status(500).send("Something is wrong");
    
        }
        
        res.send({

            message: `Welcome ${userToFind.name} ${userToFind.last_name}`,
            
            token
        
        });

    });

});

module.exports = route;