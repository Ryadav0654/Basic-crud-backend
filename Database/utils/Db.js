const mongoose = require("mongoose");

const URI = "mongodb://localhost:27017/CRUD-SIMPLE-APP";


const connectDb = async () => {
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

// using function 


// async function connectDb() {
//   try {

//     await mongoose.connect(URI);
//     console.log("Database connection is successful");

//   } 
//   catch (error)
//    {

//     console.error("Database connection is failed");
//     process.exit(0);

//   }
// };

module.exports = connectDb;
