import mongoose, { Schema, models } from "mongoose";

const BlogSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        tags: {
            type: [String],
            default: [],
        },
        image: {
            type: String, 
        },
        user: {
            type: String, 
            required: true,
        },
        date: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true }
)

export default models.Blog || mongoose.model("Blog", BlogSchema);