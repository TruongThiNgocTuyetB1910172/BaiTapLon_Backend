// const mongoose = require("mongoose");

// const postSchema = mongoose.Schema({
//   name: String,
//   qty: Number,
//   price: Number,
//   detail: String,
//   image: String,
//   category: {
//     type: ObjectId,
//     ref: "Category",
//   },
//   created: {
//     type: Date,
//     default: Date.now,
//   },
// });

// module.exports = mongoose.model("product", postSchema);

const {
    model,
    Schema,
    Schema: {
      Types: { ObjectId },
    },
  } = require("mongoose");
  
  const schema = new Schema({
    name: {
      type: String,
      default: "",
    },
    detail: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: "",
    },
    qty: {
      type: Number,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      ref: "category",
    },
  });
  
  module.exports = model("product", schema);
  