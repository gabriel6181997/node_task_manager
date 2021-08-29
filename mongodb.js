const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }

    const db = client.db(databaseName);

    db.collection("users").findOne({_id: new ObjectId("612985fead86e250571938f5")}, (error, user) => {
      if(error){
        return console.log("Unable to fetch");
      }
      console.log(user);
    })

    db.collection("users").find({age: 27}).toArray((error,users) => {
      console.log(users);
    })

    db.collection("tasks").findOne(
      { _id: new ObjectId("61278de7adcb9d80a3174b59") },
      (error, task) => {
        if (error) {
          return console.log("Unable to fetch");
        }
        console.log(task);
      }
    );

    db.collection("tasks")
      .find({ completed: false })
      .toArray((error, tasks) => {
        console.log(tasks);
      });
  }
);
