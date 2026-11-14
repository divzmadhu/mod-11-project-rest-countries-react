
interface SearchBarProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
}

export default function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
    return (
        <div className="search-container">
            <i className="fa-solid fa-magnifying-glass"></i>

            <input
                type="search"
                id="search-input"
                name="search"
                placeholder="Search for a country..."
                aria-label="Search for a country by name"
                value={searchTerm}
                onChange={(event) => onSearchChange(event.target.value)}
            />
        </div>
    );
}

