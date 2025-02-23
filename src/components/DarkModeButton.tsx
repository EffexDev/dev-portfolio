import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import Brightness6Icon from '@mui/icons-material/Brightness6';

function DarkmodeButton() {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        // Always start with light theme
        document.documentElement.classList.add("dark");
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    return (
        <div className="fixed bottom-4 right-4">
            <Button onClick={toggleTheme} className="bg-gray-800 text-white dark:bg-white dark:text-black p-1 text-sm">
                <Brightness6Icon />
            </Button>
        </div>
    );
}

export default DarkmodeButton;
