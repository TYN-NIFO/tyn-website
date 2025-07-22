import React from "react";

const Sidebar = ({ authors }) => {
    return (
        <div className="flex flex-col gap-4 p-4 border-r h-screen w-max">
            <div className="flex flex-col gap-5">
                <div className="text-customBlack">Authors</div>

                {authors.map((author, index) => (
                    <div key={author.name} className="flex items-center gap-4">
                        <div className="rounded-full bg-gray-300 flex items-center justify-center">
                            <img
                                src={author.image}
                                alt={author.name}
                                className="rounded-full object-cover w-12 h-12"
                            />
                        </div>
                        <div>
                            <div className="text-xs">{author.name}</div>
                            <div className="text-xs text-customGreyishBlack">{author.role}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
