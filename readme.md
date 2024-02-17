# CRUD-SIMPLE-APP 

## Notes 

👉 First, we run the `npm init -y` command in the terminal to initialize the `package.json` file.

👉 Next, we add a key-value pair in the `package.json` file to run the script file. We add `"serve": "node index.js"`. After applying this, we can run the script file using the `npm run serve` command.

👉 Finally, we install Express.js and require it in the `index.js` file.

## 👉 Code 

```js

// require or import express
const express = require('express');

// initialise the express to app

const app = express();

// initialise a port 

const port = 3000;  // or 8080
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
});

// or
// app.listen(3000, ()=>{
//     console.log(`server is running on port 3000`);
// });

// syntax
/*
app.get('router', (req, res) =>{
    res.send("Hello! from Node api");
 })

 request or req => data which send by client 
 response or res => data which send by server 
 */

// create a get api

app.get('/', (req, res) =>{
   res.send("Hello! from Node api");
});

```

👉 we can use to check or debug the api to check some useful software and extension 

👉 thunderClient
👉 insomnia.rest
👉 postman


# Connect to MongoDB Database

## Db.js Code

```js
const mongoose = require("mongoose");

const URI = "mongodb://127.0.0.1:27017/CRUD-SIMPLE-APP";

 const connectDb = async () => {

    try{

        await mongoose.connect(URI);
        console.log("Database connect successfully");

    }catch(err){

        console.log("Database connection failed");
        // or console.log(err);

    }
 }

 // or using function 
 async function connectDb() {

  try {

    await mongoose.connect(URI);
    console.log("Database connection is successful");

  } 
  catch (error)
   {

    console.error("Database connection is failed");
    process.exit(0);

  }
};

 module.exports = connectDb;



```

## index.js Code

```js
const connectDb = require(./server/utils/Db);

// this is not more useful 
// mongoose.connect("mongodb://127.0.0.1:27017/CRUD-SIMPLE-APP");

connectDb().then(() => {
    const port = 3000;
    app.listen(port, () =>{
        console.log("server is listening on port 3000");
    })
})

```