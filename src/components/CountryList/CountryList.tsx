import type { Country } from "../../types/Country";
import CountryCard from "../CountryCard/CountryCard";

interface CountryListProps {
    countries: Country[];
    onCountryClick: (country: Country) => void;
}


export default function CountryList({ countries, onCountryClick }: CountryListProps) {
    return (
        <div className="display-container">
            {countries.length > 0 ? (
                countries.map((country) => (
                    <CountryCard
                        key={country.alpha3Code || country.name}
                        country={country}
                        onClick={() => onCountryClick(country)}
                    />
                ))
            ) : (
                <p className="no-results">No countries found. Please try another search.</p>
            )}
        </div>
    );
}

