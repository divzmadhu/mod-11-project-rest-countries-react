import { useState, useEffect } from "react";

export default function Header() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    // Updates the page theme and saves the preference
    useEffect(() => {
        document.body.classList.toggle("dark-mode", isDarkMode);

        localStorage.setItem(
            "theme",
            isDarkMode ? "dark" : "light"
        );
    }, [isDarkMode]);

    // Toggle between dark and light themes
    function toggleTheme() {
        setIsDarkMode(previous => !previous);
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

