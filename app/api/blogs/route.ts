import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";

// ✅ CREATE BLOG
export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    const blog = await Blog.create({
      title: body.title,
      description: body.description,
      tags: body.tags,
      image: body.image,
      user: body.user,
    });

    return NextResponse.json({
      success: true,
      blog,
    });
  } catch (error: any) {
    console.error("POST ERROR:", error);

    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}

// ✅ GET BLOGS
export async function GET() {
  try {
    await connectDB();

    const blogs = await Blog.find().sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      blogs,
    });
  } catch (error: any) {
    console.error("GET ERROR:", error);

    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}