import { useState } from "react";

export default function useLocalStorage<T>(
    key: string,
    initialValue: T
) {
    const [storedValue, setStoredValue] = useState<T>(() => {
        const item = localStorage.getItem(key);

        return item !== null
            ? JSON.parse(item)
            : initialValue;
    });

    function setValue(value: T | ((previous: T) => T)) {
        setStoredValue(previous => {
            const newValue =
                typeof value === "function"
                    ? (value as (previous: T) => T)(previous)
                    : value;

            localStorage.setItem(key, JSON.stringify(newValue));

            return newValue;
        });
    }

    return [storedValue, setValue] as const;
}