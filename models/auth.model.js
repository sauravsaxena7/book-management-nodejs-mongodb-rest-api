import { hash } from "bcrypt";
import mongoose, { Schema, model } from "mongoose";

const schema = new Schema({
      name: {
          type: String,
          required: true,
      },
      username: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
        select: true,
      }
},
{
    timestamps: true
});

schema.pre("save", async function (next) {
  if (!this.isModified("password"))  next();
  this.password = await hash(this. password, 10);
  next();
});



export const Author = mongoose.models.Author || model("Author", schema);
