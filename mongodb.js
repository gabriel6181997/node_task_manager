const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectId();
console.log(id.id.length);
console.log(id.toHexString().length);

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }

    const db = client.db(databaseName);

    db.collection("users").insertOne(
      {
        _id: id,
        name: "Andy",
        age: 27,
      },
      (error, result) => {
        if (error) {
          return console.log("Unable to insert user");
        }

        console.log(result.insertedId);
      }
    );

    db.collection("users").insertMany(
      [
        { name: "Jen", age: 28 },
        { name: "Gunther", age: 27 },
      ],
      (error, result) => {
        if (error) {
          return console.log("Unable to insert documents");
        }

        console.log(result.insertedIds);
      }
    );

    db.collection("tasks").insertMany(
      [
        { description: "task 1", completed: true },
        { description: "task 2", completed: false },
        { description: "task 3", completed: true },
      ],
      (error, result) => {
        if (error) {
          return console.log("Unable to insert tasks");
        }

        console.log(result.insertedIds);
      }
    );
  }
);
