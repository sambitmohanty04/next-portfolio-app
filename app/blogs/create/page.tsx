"use client";
import React, { useState } from "react";

const CreateBlog = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    tags: "",
    user: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          tags: form.tags
            .split(",")
            .map((tag) => tag.trim())
            .filter((tag) => tag !== ""),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Request failed");
      }

      alert("✅ Blog Created Successfully");

      setForm({
        title: "",
        description: "",
        image: "",
        tags: "",
        user: "",
      });
    } catch (error: any) {
        console.error(error);
        alert("⚠️ " + error.message);
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black px-4 pt-24 flex justify-center">
      
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          ✍️ Create Blog
        </h2>

        <input
          type="text"
          placeholder="Title"
          value={form.title}
          className="w-full mb-3 p-3 rounded bg-white/10 text-white"
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        <textarea
          placeholder="Description"
          value={form.description}
          className="w-full mb-3 p-3 rounded bg-white/10 text-white"
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Image URL"
          value={form.image}
          className="w-full mb-3 p-3 rounded bg-white/10 text-white"
          onChange={(e) =>
            setForm({ ...form, image: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Tags (react, nextjs)"
          value={form.tags}
          className="w-full mb-3 p-3 rounded bg-white/10 text-white"
          onChange={(e) =>
            setForm({ ...form, tags: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Author"
          value={form.user}
          className="w-full mb-4 p-3 rounded bg-white/10 text-white"
          onChange={(e) =>
            setForm({ ...form, user: e.target.value })
          }
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 py-3 rounded text-white"
        >
          {loading ? "Publishing..." : "🚀 Publish"}
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;