import type { Country } from "../../types/Country";
import CountryCard from "../CountryCard/CountryCard";

interface CountryListProps {
    countries: Country[];
}

export default function CountryList({ countries }: CountryListProps) {
    return (
        <div className="display-container">
            {countries.map((country) => (
                <CountryCard key={country.alpha3Code || country.name} country={country} />
            ))}
        </div>
    );
}

