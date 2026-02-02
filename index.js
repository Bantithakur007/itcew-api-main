require("dns").setDefaultResultOrder("ipv4first");
require("dotenv").config();
const mongoose = require("mongoose");
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./db");

const app = express();
const PORT = process.env.PORT || 8080;

const corsOption = {
  origin: true,
  methods: "GET,POST,PUT,DELETE,PATCH",
  credentials: true,
};

app.use(cors(corsOption));
app.use(cookieParser());
app.use(express.json());

app.use("/api", require("./Routes/Data"));
app.use("/api", require("./Routes/GetStudent"));
app.use("/api", require("./Routes/AdminRoutes"));

app.get("/", (req, res) => {
  res.send("hello world");
});

// ✅ DB connect + server start (ONLY ONCE)
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Server start failed ❌", err.message);
  });



/*require("dotenv").config();

console.log("ENV CHECK 👉", process.env.MONGODB_URL);

require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const connectDB = require('./db')
connectDB();

const app = express()
const PORT = process.env.PORT || 8080;

const corsOption = {
    origin: true,
    methods: "GET,POST,PUT,DELETE,PATCH",
    credentials: true
}

app.use(cors(corsOption))
app.use(cookieParser())
app.use(express.json())

app.use('/api', require("./Routes/Data"))
app.use('/api', require("./Routes/GetStudent"))
app.use('/api', require("./Routes/AdminRoutes"))

app.get('/', (req, res) => {
    res.send("hello world")
})

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
})



/*require('dotenv').config()
const express = require('express')
const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 8080;
const connectDB = require('./db')
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');




const corsOption = {
    origin: true,
    methods: "GET,POST,PUT,DELETE,PATCH",
    credentials: true
}
// Cloudinary Configuration



app.use(cors(corsOption))
app.use(cookieParser());
app.use(express.json())

app.use('/api', require("./Routes/Data"))
app.use('/api', require("./Routes/GetStudent"))
app.use('/api', require("./Routes/AdminRoutes"))



app.get('/', (req, res) => {
    res.send("hello world")
})

connectDB()
app.listen(PORT, () => {
    console.log(`app is listening on the port ${PORT} `)
})*/