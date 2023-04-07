
//Make these functions so that index can import the function

app.post("/db/event/insert", (require, response) => {
    // console.log(require.body);
    const incomingData = require.body;

    // get following data from front-end
    const eventName = incomingData.eventName;
    const eventTopic = incomingData.eventTopic

    const sqlInsert = `INSERT INTO events (eventName, eventTopic) VALUES ('${eventName}', '${eventTopic}')`;

    db.query(sqlInsert, (error, result) =>{
        if (error) {
            console.log(error);
        }else{
            console.log("success");
            // console.log(response);
            // return result;
            response.send("success")
        }
    });
});

app.get("/db/event/get", (require, response) => {

    const sqlSelect = `SELECT * FROM events`;

    db.query(sqlSelect, (error, result) => {
        if (error) {
            console.log(error);
        }else{
            console.log(result);
            response.send(result);
        }
    })

});