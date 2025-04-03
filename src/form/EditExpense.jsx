// src/components/Modal.jsx (Example file name)
import React, { useEffect } from 'react';

// Reusable Modal Component
// Props:
// - isOpen: boolean - Controls if the modal is visible
// - onClose: function - Called when the modal should be closed (e.g., clicking backdrop or close button)
// - children: ReactNode - The content to display inside the modal (e.g., your edit form)
// - title: string (optional) - Title to display in the modal header

function Modal({ isOpen, onClose, children, title = "Modal Title" }) {

    // Effect to handle Escape key press for closing the modal
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                onClose(); // Call the close handler if Escape is pressed
            }
        };

        // Add event listener only when the modal is open
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
        }

        // Cleanup function to remove the event listener when the modal closes or component unmounts
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]); // Re-run effect if isOpen or onClose changes

    // If the modal is not open, render nothing
    if (!isOpen) {
        return null;
    }

    // Render the modal structure
    return (
        // 1. Backdrop / Overlay
        // - Fixed position to cover the whole screen
        // - Semi-transparent background
        // - z-index to be on top
        // - onClick handler to close modal when clicking outside the content area
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out"
            onClick={onClose} // Close when clicking the backdrop
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title" // Link title for accessibility
        >
            {/* 2. Modal Content Container */}
            {/* - Stops click propagation so clicking inside doesn't close the modal */}
            {/* - Defines width, background, padding, rounded corners, shadow */}
            {/* - Relative position for potential absolute positioning inside (like close button) */}
            <div
                className="relative w-full max-w-lg rounded-lg bg-white p-6 shadow-xl transform transition-all duration-300 ease-in-out scale-95 opacity-0 animate-modal-enter"
                onClick={(e) => e.stopPropagation()} // Prevent backdrop click from triggering inside
            >
                {/* 3. Modal Header (Optional) */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <h2 id="modal-title" className="text-xl font-semibold text-gray-800">
                        {title}
                    </h2>
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        aria-label="Close modal"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* 4. Modal Body */}
                {/* - This is where the 'children' prop (your form) will be rendered */}
                <div className="mt-4">
                    {children}
                </div>

                {/* 5. Modal Footer (Optional) */}
                {/* You might add Save/Cancel buttons here later */}
                {/* <div className="mt-6 flex justify-end gap-3 border-t border-gray-200 pt-4">
                    <button onClick={onClose} className="...">Cancel</button>
                    <button className="...">Save Changes</button>
                </div> */}
            </div>

            {/* Basic CSS Animation (add this to your global CSS or index.css) */}
            <style jsx global>{`
                @keyframes modal-enter {
                    from {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                .animate-modal-enter {
                    animation: modal-enter 0.3s ease-out forwards;
                }
            `}</style>
        </div>
    );
}

export default Modal;
