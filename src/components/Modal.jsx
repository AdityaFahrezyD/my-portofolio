// src/components/Modal.jsx
import React from "react";

function Modal({ isOpen, onClose, title, children }) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative max-h-[90vh] w-[90vw] max-w-3xl rounded-2xl border border-sky-500/40 bg-slate-950 p-4 shadow-2xl"
                onClick={(e) => e.stopPropagation()} // biar klik dalam modal nggak nutup
            >
                <div className="mb-3 flex items-center justify-between gap-4">
                    {title && (
                        <h3 className="text-sm font-semibold text-slate-100">{title}</h3>
                    )}
                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-full border border-slate-600 px-2 py-1 text-xs text-slate-300 hover:border-sky-400 hover:text-sky-300"
                    >
                        ✕ Close
                    </button>
                </div>

                <div className="max-h-[75vh] overflow-auto">{children}</div>
            </div>
        </div>
    );
}

export default Modal;
