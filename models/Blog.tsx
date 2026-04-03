import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    tags: [String],
    image: String,
    user: String,
    date: Date,
  },
  { timestamps: true }
);

export default mongoose.models.Blog ||
  mongoose.model("Blog", BlogSchema);