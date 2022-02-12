import React from 'react'
import icon from "../Images/1140-error-outline.webp";

const Modal = () => {
    return (
        <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center z-50 absolute top-0 right-0 bottom-0 left-0">
            <div className="bg-red-100 text-red-600 border border-red-200 px-2 md:px-16 py-6 md:py-10 rounded-md text-center" role="alert">
                <div className="flex justify-center items-center mb-4">
                    <img src={icon} alt="error" className="w-20" />
                </div>
                <h1 className="text-xl mb-4 font-bold">Failed to load Data from Server</h1>
                <p className="text-sm">Please check your internet connection and try again</p>
            </div>
        </div>
    )
}

export default Modal