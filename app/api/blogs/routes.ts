import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Blog from '@/models/Blog';


// Create Blog Section
export async function POST(req : Request) {
    try {
        await connectDB();

        const body = await req.json();

        const blog = await Blog.create({
            title : body.title,
            description : body.description,
            tags: body.tags,
            image: body.image,
            user: body.user,
            date : new Date()
        })
        return NextResponse.json({ success: true, blog });
    } catch(error) {
        return NextResponse.json({ success: false, error });
    }
}

// Get Blogs
export async function get(req : Request) {
    try {
        await connectDB();
        
        const blogs = await Blog.find().sort({ createdAt: -1 });

        return NextResponse.json({ success: true, blogs });
    } catch(error) {
        return NextResponse.json({ success: false, error });
    }
}