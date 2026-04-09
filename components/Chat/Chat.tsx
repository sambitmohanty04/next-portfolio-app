'use client';
import { useState } from "react";
import Link from "next/link";
import { FaComments, FaTimes } from "react-icons/fa";
import ChatBox from "./ChatBox";

export default function Chat() {

  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div className="fixed bottom-20 right-5 w-80 h-96 bg-white shadow-xl rounded-lg p-3">
          <ChatBox />
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 bg-white/5 hover:bg-blue-500 text-white p-3 rounded-full shadow-lg"
      >
        {open ? <FaTimes /> : <FaComments />}
      </button>
    </>
    // <div className="fixed bottom-15 right-5 z-50">
    //   <Link href="/chat">
    //     <button className="bg-white/5 hover:bg-blue-500 text-white p-3 rounded-full shadow-lg transition duration-300">
    //       <FaComments size={20} />
    //     </button>
    //   </Link>
    // </div>
  );
}