import React from 'react'


const ContactForm = () => {

    return (
        <div
            className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
         
        >
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
            <p className="leading-relaxed mb-5 text-gray-600">
                We’re here to help you elevate your digital presence. </p>
            <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder='Enter your full name...'
                    className="w-full bg-white rounded border border-gray-300 focus:border-gradient-focus focus:ring-2 focus:ring-gradient-focus text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
            </div>
            <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder='Enter your email address...'
                    className="w-full bg-white rounded border border-gray-300 focus:border-gradient-focus focus:ring-2 focus:ring-gradient-focus text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
            </div>
            <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder='Share your thoughts or inquiries...'
                    className="w-full bg-white rounded border border-gray-300 focus:border-gradient-focus focus:ring-2 focus:ring-gradient-focus h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
            </div>
            <button className="bg-gradient-to-r from-indigo-400 to-pink-600 text-white border-0 py-2 px-6 focus:outline-none hover:bg-gradient-to-r hover:from-indigo-500 hover:to-pink-700 rounded text-lg">
                Send Message
            </button>
            <p className="text-xs text-gray-500 mt-3">
                We look forward to connecting with you and exploring how we can help you achieve your digital goals.
            </p>
        </div>
    )
}

export default ContactForm
