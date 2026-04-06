import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    tags: [String],
    image: String,
    user: String,
  },
  { timestamps: true } // ✅ VERY IMPORTANT
);

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);