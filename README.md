# article-project
  An api rest wroten in nodejs with express, sequalize and jsonwebtoken
  
## Requeriments

### Envoriment: 
    
    . nodejs lts(16.13.0)
    
    . npm (8.1.0)
    
 ### Modules: 
 
    . bcrypt (5.0.1)
    
    . cors (2.8.5)
    
    . express (4.17.2)
    
    . jsonwebtoken (8.5.1)
    
    . mysql2 (2.3.3)
    
    . sequelize (6.12.5)
    
## Install modules

  . npm i 

## Routes

### Articles
   
   . GET http://localhost:8000/api/articles : get all articles. Needs a token(authorization) from header request
   
   . POST http://localhost:8000/api/articles : storages an article. Needs a token(authorization) from header request, and description, price and stock from body request. 
   
   . PUT http://localhost8000/api/articles : update an article. Needs a token(authorization) from header request, and description, price, stock and id from body request.
   
   . DELETE http://localhost:8000/api/articles : delete an article. Needs a token(authorization) from header request and id from body request.
   
### Users

  . POST http://localhost:8000/api/users/register : register an user. Needs a name, last_name, email and password from body request
  
  . POST http://localhost:8000/api/users/auth : authentificates an user. Needs an email and password from body request.
  
