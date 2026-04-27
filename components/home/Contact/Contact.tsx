"use client";
import React, { useState } from 'react';
import toast from "react-hot-toast";
import { BsEnvelope } from "react-icons/bs";
import { FiPhoneCall, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type Errors = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const Contact = () => {

    // const [ form, setForm ] = useState({
    //     name : "",
    //     email : "",
    //     phone : "",
    //     message : ""
    // })

    
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     setForm({...form, [e.target.name] : e.target.value })
    // }

    // const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();

    //     const res = await fetch('/api/contact', {
    //         method : 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body : JSON.stringify(form)
    //     })

    //     const data = await res.json();

    //     if(data.success) {
    //         toast.success("Message sent successfully");
    //     } else {
    //         toast.error("Failed to upload message");
    //     }

    //     setForm({
    //         name: "",
    //         email: "",
    //         phone: "",
    //         message: ""
    //     });
    // }
    const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        // Restrict phone input
        if (name === "phone" && !/^\d*$/.test(value)) return;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));

        // ✅ Clear error while typing
        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

  // Validation Function
  const validate = (): Errors => {
    const newErrors: Errors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  // Handle Submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);

        // ✅ Show toast for validation
        toast.error("Please fill all required fields correctly");

        return; // ❗ stop API call
    }

    try {
        setLoading(true);

        const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
        });

        const data = await res.json();

        if (data.success) {
        toast.success("Message sent successfully");

        setForm({
            name: "",
            email: "",
            phone: "",
            message: "",
        });

        setErrors({});
        } else {
        toast.error("Failed to upload message");
        }
    } catch (error) {
        toast.error("Something went wrong");
    } finally {
        setLoading(false);
    }
    };

  return (
    <>
        <div className='py-16' id="contact">
            <div className='w-[90%] sm:[w-70%] md:w-[80%] lg:w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 
            items-center'>
                {/* ---------text-------- */}
                <div>
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-200'>
                        Schedule a call with me
                    </h1>
                    <p className='text-gray-400 mt-6 text-base sm:text-lg'>
                        Reach out to me today and let's discauss how I can 
                        help you achieve your goals.
                    </p>
                    <div className='mt-7'>
                        <div className='flex item-center space-x-3 mb-4'>
                            <FiPhoneCall className='w-7 h-7 text-cyan-300' />
                            <p className='text-xl font-semibold text-gray-400'>
                                +91 907-823-4876
                            </p>
                        </div>
                        <div className='flex item-center space-x-3 mb-4'>
                            <BsEnvelope className='w-7 h-7 text-cyan-300' />
                            <p className='text-xl font-semibold text-gray-400'>
                                sambit.jitu11@gmail.com
                            </p>
                        </div>
                        <div className='flex item-center space-x-3 mb-4'>
                            <FiMapPin className='w-7 h-7 text-cyan-300' />
                            <p className='text-xl font-semibold text-gray-400'>
                            Bhubaneswar, India
                            </p>
                        </div>
                    </div>
                    {/* ------social icons------ */}
                    <div className='flex items-center mt-7 space-x-3'>
                        <div className='w-10 h-10 bg-blue-950/60 flex items-center justify-center rounded-full
                        cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300'>
                            <FaFacebookF className='w-5 h-5 text-white' />
                        </div>
                        <div className='w-10 h-10 bg-blue-950/60 flex items-center justify-center rounded-full
                        cursor-pointer flex-col hover:bg-sky-800 transition-all duration-300'>
                            <FaLinkedinIn className='w-5 h-5 text-white' />
                        </div>
                        <div className='w-10 h-10 bg-blue-950/60 flex items-center justify-center rounded-full
                        cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300'>
                            <FaXTwitter className='w-5 h-5 text-white' />
                        </div>
                    </div>
                </div>
                {/* ----form---- */}
                <div className='md:p-10 p-5 bg-[#10102e] rounded-lg'>
                    <form onSubmit={handleSubmit} className="mx-auto">
                        <div className="pb-2">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full h-12 px-4 text-white outline-none rounded-md text-sm placeholder:text-sm placeholder:text-white/70 border border-white/20 bg-[#23234b]"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>

                        <div className="pb-2">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full h-12 px-4 text-white outline-none rounded-md text-sm placeholder:text-sm placeholder:text-white/70 border border-white/20 bg-[#23234b]"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>

                        <div className="pb-2">
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone"
                                value={form.phone}
                                maxLength={10}
                                onChange={handleChange}
                                className="w-full h-12 px-4 text-white outline-none rounded-md text-sm placeholder:text-sm placeholder:text-white/70 border border-white/20 bg-[#23234b]"
                            />
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                        </div>

                        <div>
                            <textarea
                                name="message"
                                placeholder="Enter Message"
                                value={form.message}
                                onChange={handleChange}
                                className="w-full h-32 px-4 py-2 mt-2 text-white outline-none rounded-md text-sm placeholder:text-sm placeholder:text-white/70 border border-white/20 bg-[#23234b] resize-none"
                            />
                            {errors.message && (
                                <p className="text-red-500 text-sm">{errors.message}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900  transition-all duration-300 cursor-pointer text-white rounded-full text-sm"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact