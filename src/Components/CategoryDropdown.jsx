import React, { useState, useRef, useEffect } from "react";

const CategoryDropdown = () => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("");
    const dropdownRef = useRef();

    const categories = ["Web Development", "Design", "Writing", "Marketing"];

    // Click outside close dropdown
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative w-full" ref={dropdownRef}>
            <input
                type="text"
                placeholder="Select Category"
                readOnly
                value={selected}
                onClick={() => setOpen(!open)}
                className="input w-full bg-base-300 cursor-pointer"
            />
            <input type="hidden" name="category" value={selected} />

            {open && (
                <ul className="absolute z-10 w-full mt-1 bg-[#EBF4DD] border border-gray-300 rounded shadow-lg max-h-60 overflow-auto">
                    {categories.map((cat, idx) => (
                        <li
                            key={idx}
                            onClick={() => {
                                setSelected(cat);
                                setOpen(false);
                            }}
                            className="p-2 cursor-pointer hover:bg-[#90AB8B]"
                        >
                            {cat}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CategoryDropdown;
