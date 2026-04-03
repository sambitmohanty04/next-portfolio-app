import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";

// Single Blog
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectDB();

  const blog = await Blog.findById(params.id);

  return NextResponse.json({ success: true, blog });
}

// Update the Blog
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectDB();

  const body = await req.json();

  const updatedBlog = await Blog.findByIdAndUpdate(
    params.id,
    body,
    { new: true }
  );

  return NextResponse.json({ success: true, updatedBlog });
}

// Delete Blog
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectDB();

  await Blog.findByIdAndDelete(params.id);

  return NextResponse.json({ success: true });
}