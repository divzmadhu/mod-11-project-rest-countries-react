import { useState } from "react";

export default function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Toggle between dark and light themes
    function toggleTheme() {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle("dark-mode");
    }
    return (
        <header className="header">
            <div className="header-container">
                <h1>Where in the world?</h1>

                <button className="theme-toggle" onClick={toggleTheme}>
                    <i className={`fa-regular ${isDarkMode ? "fa-sun" : "fa-moon"}`}></i>
                    <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
                </button>

                {/* <button className="theme-toggle">
                    <i className="fa-regular fa-moon"></i>
                    <span>Dark Mode</span>
                </button> */}
            </div>
        </header>
    );
}

