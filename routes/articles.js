const {Router} = require("express");

const route = Router();

const Articles = require("../db/model/Articles");

const {Op} = require("sequelize");

//Show all articles

route.get("/api/articles", async (req, res) => {

    const articles = await Articles.findAll({
        
        where: {
       
            state:{
                [Op.eq]: 0
            }
       
        }
    
    });

    res.send(articles);

});

//Save an article

route.post("/api/articles", async (req, res) => {

    if(!req.body.description || !req.body.price || !req.body.stock) return res.status(400).send("Incomplete Data");
   
    const article = {

        description: req.body.description,

        price: req.body.price,

        stock: req.body.stock,

        state: 0
    }

    await Articles.create(article);

    res.send("Saved an article");
    



});

//Update an article

route.put("/api/articles", async (req, res) => {

    if(!req.body.description || !req.body.price || !req.body.stock || !req.body.id) 

        return res.status(400).send("Incomplete Data");

    await Articles.update({

            description: req.body.description,

            price: req.body.price,

            stock: req.body.stock

    },{

        where: {

            id: {

                [Op.eq]: req.body.id

            }

        } 

    });

    res.send("Updated an article");

});


//Delete an article

route.delete("/api/articles", async (req, res) => {

    if(!req.headers.id)

        return res.status(400).send("Incomplete data");

    await Articles.destroy({
         
        where: {

            id: {

                [Op.eq]: req.headers.id

            }

        }

    });

    res.send("Deleted an article");

})


module.exports = route;