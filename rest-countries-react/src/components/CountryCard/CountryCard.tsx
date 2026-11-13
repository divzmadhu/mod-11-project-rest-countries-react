import type { Country } from "../../types/Country";

interface CountryCardProps {
    country: Country;
}

export default function CountryCard({ country }: CountryCardProps) {
    return (
        <div className="country-card">
            {country.flags.svg && (
                <img src={country.flags.svg} alt={`${country.name} flag`} />
            )}

            <div className="card-body">
                <h2>{country.name}</h2>
                <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                <p><strong>Region:</strong> {country.region}</p>
                <p><strong>Capital:</strong> {country.capital}</p>
            </div>
        </div>
    );
}

