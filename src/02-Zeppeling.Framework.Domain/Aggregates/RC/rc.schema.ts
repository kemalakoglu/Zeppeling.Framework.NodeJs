import { Schema } from "mongoose";
const RCSchema = new Schema({
  code: String,
  message: String,
  insertDate: {
    type: Date,
    default: new Date()
  },
  updateDate: {
    type: Date,
    default: new Date()
  }
});

export default RCSchema;