import mongoose from "mongoose";

const { Schema } = mongoose;

let CounterSchema = new Schema(
  {
    categoryId: { type: Schema.Types.ObjectId, ref: "categories" },
    title: { type: String, unique: true },
    count: { type: Number },
    notes: { type: String, required: false },
  },
  {
    timestamps: true, // This will add createdAt and updatedAt fields automatically
  }
);

export default mongoose.model("counters", CounterSchema);
