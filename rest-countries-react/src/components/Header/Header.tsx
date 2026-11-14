import { useTheme } from "../../context/ThemeContext";

export default function Header() {

    // Get the current theme state and toggle function from ThemeContext
    const { isDarkMode, toggleTheme } = useTheme();

       return (
        <header className="header">
            <div className="header-container">
                <h1>Where in the world?</h1>

                <button className="theme-toggle" onClick={toggleTheme}>
                    <i className={`fa-regular ${isDarkMode ? "fa-sun" : "fa-moon"}`}></i>
                    <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
                </button>
                
            </div>
        </header>
    );
}

