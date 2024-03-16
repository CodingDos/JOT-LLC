import mongoose from "mongoose";

const { Schema } = mongoose;

let CategorySchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "users" }, //Every Category will reference the user id
    title: { type: String, unique: true },
  },
  {
    timestamps: true, // This will add createdAt and updatedAt fields automatically
  }
);

export default mongoose.model("categories", CategorySchema);
