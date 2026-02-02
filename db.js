
const { MongoClient, ServerApiVersion } = require('mongodb');
const url = process.env.MONGODB_URL;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


require('dotenv').config()
const mongoose = require('mongoose')

const URL = process.env.MONGODB_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(URL)
        console.log("MongoDB connected successfully")
    } catch (error) {
        console.log("MongoDB connection failed:", error.message)
        process.exit(1);
    }
}

module.exports = connectDB;





/*const mongoose = require('mongoose')
const URL =process.env.MONGO_URL;
const connectDB = async () =>{
    try {
        await mongoose.connect(URL)
        console.log("connect successfully")
    } catch (error) {
        console.log(error,"connection failed")
    }
}

module.exports = connectDB;*/ 



/*
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://backend_user:<db_backend12>@cluster0.rmsfajn.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
*/