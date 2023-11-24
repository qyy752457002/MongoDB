const { MongoClient } = require("mongodb");

// Connection URL
const url = "mongodb://localhost:27017/";

const client = new MongoClient(url);

async function run() {
  try {
    // Get fruit DB
    const database = client.db('fruitsDB');
    // Get fruits collection
    const collection = database.collection('fruits');

    console.log("Connected successfully to the server")
    
    // const query = [
    //     {
    //         name: "Apple",
    //         score: 8,
    //         review: "Great fruit"
    //     },

    //     {
    //         name: "Orange",
    //         score: 6,
    //         review: "Kinda sour"
    //     }, 

    //     {
    //         name: "Banana",
    //         score: 9,
    //         review: "Great stuff!"
    //     }

    // ];

    // await collection.insertMany(query);
    const fruits = await collection.find({}).toArray();
    console.log("Found the following records:");
    console.log(fruits);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);