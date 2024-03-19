import mongoose from "mongoose";

const { Schema } = mongoose;

let CategorySchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "users" }, //Every Category will reference the user id
    title: { type: String },
  },
  {
    timestamps: true, // This will add createdAt and updatedAt fields automatically
  }
);

// Create a compound index for userId and title to ensure uniqueness across this combination
CategorySchema.index({ userId: 1, title: 1 }, { unique: true });

export default mongoose.model("categories", CategorySchema);
