const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Products_Schema = new Schema(
  {
    productname: {
      type: String,
    },
    sizes:{
        type:Array,
    },
    categories:{
        type:Array,
    },
    Price_range:{
        type:String,
    },
    Actual_Price:{
        type:String,
    },
    IS_Available:{
        type: String,
    },
}
);

module.exports = {
  Products_Schema: mongoose.model("products", Products_Schema),
};
