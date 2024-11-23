const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require("./routes/product.route.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get('/', (req, res) => {
  res.send('Hello from Node API');
});


mongoose.connect("mongodb+srv://ad4582273:sJwJayNzZAWfv63s@api.vqhfz.mongodb.net/RED-Product?retryWrites=true&w=majority&appName=API")
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log(`Server is running on port 3000`);
    });
  })

  .catch(() => {
    console.log("Connection failed!");

  });