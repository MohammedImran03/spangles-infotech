const express=require("express");
const app=express();
const bodyparser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const Config_DataBase=require("./dbConfig");
const {Products_Schema} = require("./Product_Mongoose");
dotenv.config();

const PORT = process.env.PORT;
app.use(cors({
  origin: ['http://localhost:3000',],
  credentials: true
})); 
app.use(express.json());

app.use(bodyparser.urlencoded({ extended: true }));

app.use("/test", (req, res) => {
    res.send("Hello world by server 1!");
  });

// const Product_Router=require("./Router");


app.get("/api/products", async (req, res) => {
    try {
      const result = await get_Products();
      return res.json({
        status: "success",
        result,
      });
    } catch (error) {
      res.json({ status: "error", message: error.message });
    }
  });
  const get_Products = () => {
    return new Promise((resolve, reject) => {
      try {
        Products_Schema.find({})
          .then((data) => resolve(data))
          .catch((error) => reject(error));
      } catch (error) {
        reject(error);
      }
    });
  };

  app.listen(PORT, () => {
    Config_DataBase;
    console.log(`Server Started at ${PORT} 🎉`);
  });