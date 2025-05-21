import React from "react";
const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col md:flex-row items-center justify-between 
                 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100
                 transition-colors duration-500
                 md:pl-20 md:pr-10
                 pt-20 md:pt-0
                 max-w-full"
            style={{
                // On desktop: subtract navbar width (56px) from total width
                maxWidth: '100vw',
            }}
        >
            {/* Left content */}
            <div className="flex-1 flex flex-col justify-center space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Hello, I'm{" "}
                    <span className="text-indigo-600 dark:text-indigo-400">Your Name</span>
                </h1>
                <p className="text-gray-700 dark:text-gray-300 max-w-md text-lg">
                    I am a passionate Web Developer specializing in building amazing user-centric websites and applications.
                </p>
                <div>
                    <a
                        href="#projects"
                        className="inline-block bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 
                       text-white font-semibold py-3 px-6 rounded-lg transition"
                    >
                        View My Projects
                    </a>
                </div>
            </div>

            {/* Right content */}
            <div className="flex-1 flex justify-center mt-10 md:mt-0">
                <img
                    src="https://i.pravatar.cc/300" // Replace with your profile image
                    alt="Profile"
                    className="w-64 h-64 rounded-full object-cover border-4 border-indigo-600 dark:border-indigo-400 shadow-lg transition-colors duration-500"
                />
            </div>
        </section>
    );
};

export default Home;

