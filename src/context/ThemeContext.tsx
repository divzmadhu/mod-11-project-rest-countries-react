import {
    createContext,
    useContext,
    useEffect,
    type ReactNode
} from "react";

import useLocalStorage from "../hooks/useLocalStorage";

// Defines the possible theme values
type Theme = "light" | "dark";

// Defines the values that will be shared through Context
interface ThemeContextValue {
    theme: Theme;
    isDarkMode: boolean;
    toggleTheme: () => void;
}

// Creates the theme context
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

// Defines the children received by ThemeProvider
interface ThemeProviderProps {
    children: ReactNode;
}

// Provides theme information to the application
export function ThemeProvider({ children }: ThemeProviderProps) {

    const [theme, setTheme] = useLocalStorage<Theme>("theme", "light");

    const isDarkMode = theme === "dark";

    // Applies the selected theme to the document body
    useEffect(() => {
        document.body.classList.toggle("dark-mode", isDarkMode);
    }, [isDarkMode]);

    function toggleTheme() {
        setTheme(previous =>
            previous === "dark" ? "light" : "dark"
        );
    }

    return (
        <ThemeContext.Provider
            value={{ theme, isDarkMode, toggleTheme }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

// Custom hook for accessing the theme context
export function useTheme() {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    return context;
}