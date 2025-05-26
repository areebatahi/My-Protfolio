import React from "react";
import { FaBriefcase } from "react-icons/fa";
import dayjs from "dayjs";

const experience = [
    {
        start: "2023-12-19",
        end: "2025-05-01",
        title: "Web and Mobile App Developement",
        company: "Saylani Mass IT Training",
        description:
            "Developed web and mobile applications, ensured high-performance solutions, and implemented efficient code for business needs.",
    },
    {
        start: "2023-06-01",
        end: "2024-01-01",
        title: "Techno Kids Batch 6",
        company: "Saylani Mass IT Training",
        description:
            "Assisted in frontend development, learned responsive design, and collaborated with the team to build client websites.",
    },
];

const CareerHistory = () => {
    return (
        <section
            id="Courses"
            className="bg-gradient-to-br from-zinc-900 to-zinc-800 text-white py-20 px-4 md:px-12 lg:px-24 overflow-hidden"
        >
            <h2 className="text-4xl font-bold text-center mb-16">Career History</h2>

            <div className="relative max-w-5xl mx-auto space-y-20">
                {experience.map((item, index) => (
                    <div key={index} className="relative flex flex-col md:flex-row items-center gap-6">
                        <div className="relative flex-shrink-0 w-full md:w-1/12 h-4 md:h-48 flex items-center justify-center">
                            <div className="absolute w-full h-1 md:w-1 md:h-48 bg-gradient-to-r md:bg-gradient-to-b from-transparent via-blue-600 to-transparent rounded-full" />
                            <div className="z-10 bg-white text-blue-600 rounded-full p-2 shadow-md">
                                <FaBriefcase size={16} />
                            </div>
                        </div>

                        <div className="w-full text-center md:text-left">
                            <p className="text-sm text-gray-400 mb-1">
                                {dayjs(item.start).format("MMM YYYY")} -{" "}
                                {dayjs(item.end).isValid() ? dayjs(item.end).format("MMM YYYY") : "Present"}
                            </p>
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <p className="text-purple-400 font-medium mb-2">{item.company}</p>
                            <p className="text-gray-400 text-sm">{item.description}</p>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default CareerHistory;
