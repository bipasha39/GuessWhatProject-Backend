# GuessWhatProject-Backend
/////......Step by step.......///////
Special links for getting more about backend packages and command lines are
https://sequelize.org/master/index.html                      
https://github.com/sequelize/cli


Creating a empty folder in the local machine
Go into the folder                                                     
Git init                                                           
Npm init                                                                          
Install NPM packages we need to install sequelize,nodemon,express,                                                                                       
Postgres, sequelize-cli                                                                                                        
 a. For Installing Sequelize - npm install sequelize                                                                
 b. For installing Nodemon- npm install nodemon                                                                                                       
 c. For installing express- npm install express                                                                                        
 d. For installing postgres- npm install pg                                                                          
 e. For installing sequelize-cli- npm install sequelize-cli                                                                                

Sequelize init- It's going to create all folders automatically                                                               
 a. npx sequelize init                                                                                                   
 b. npx sequelize-cli model:generate --name Word --attributes value:string                                                                                 
 c. Create new Database in postgres                                                                                                      
 d. Go to config folder and open config.json.Edit development object with username, password, database name and dialect:Postgres                                 
 e. Run migration→ npx sequelize-cli db:migrate                                                                                                         
 f. Run seeders→ npx sequelize-cli db:seed:all                                                                                                           
 g. You can undo all seeders using the command “ npx sequelize-cli db:seed:undo:all”                                                                                 
 h. Add this line in scripts of package.json "dev": "nodemon ./index.js"                                                                            
 i. npm run dev                                                                                                                             
 j. Check your endpoints in Postman                                                                                                              
