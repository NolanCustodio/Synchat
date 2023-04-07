//Node
const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcrypt");

//My middlewares
// require("../Middleware/userFunctions");

//Instances
let router = express.Router();
const saltRounds = 10;

const db = mysql.createPool({
    host:       'database',
    user:       'user',
    password:   'root-pass',
    database:   'testdb',
});


router.route("/createUser").post((require, response) =>{
    // console.log('inside new route');
    // response.send("done");

    // const data = require.body;
    // {username, email, password}

    const username = require.body.username;
    const email = require.body.email;
    const password = require.body.password;

    //Find if username is taken
    // isUsernameTaken();

    bcrypt.hash(password, saltRounds, (error, hash) => {
        if (error) {
            console.log(error);
        };

        const sqlInsert = `INSERT INTO users (username, email, password) VALUES ('${username}','${email}','${hash}')`

        console.log(sqlInsert);
        db.query(sqlInsert, (error, result) => {
            if (error) {
                //errors that need to be accounted and redirected
                //username taken
                //email taken
                response.send(error);
            }else{
                response.send('success');
            }
        });
    });
})

router.route("/loginUser").post((require, response) => {
    
    const username = require.body.username;
    const password = require.body.password;

    const sqlSelect = `SELECT * FROM users WHERE username='${username}'`

    db.query(sqlSelect, 
        (error, result) => {
            if (error) {
                response.send({error : error});
            }

            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, res) => {
                    if (res) {
                        require.session.user = result;
                        console.log(require.session.user);
                        response.send(result);
                    }else{
                        response.send({error:error});
                    }
                })
            }else{
                response.send({message: "Username does not exist"});
            }
        }
    );
});

router.route("/sessionLogin").get((require,response) => {
    if (require.session.user) {
        response.send({loggedIn: true, user: require.session.user})
    }else{
        response.send({loggedIn: false})
    }
});

router.route("/sessionLogout").get((require, response) => {
    return
});

module.exports = router;