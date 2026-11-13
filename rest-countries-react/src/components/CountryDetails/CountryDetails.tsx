import type { Country } from "../../types/Country";

interface CountryDetailsProps {
    country: Country;
    onBack: () => void;
}

export default function CountryDetails({ country, onBack }: CountryDetailsProps) {
    return (
        <div id="country-details">
            <button onClick={onBack}>← Back</button>

            <div className="country-details-content">
                <img src={country.flags.svg} alt={`${country.name} flag`} />
                <h2>{country.name}</h2>
                <div className="country-info">
                    <p><strong>Native Name:</strong> {country.nativeName || "N/A"}</p>

                    <p><strong>Population:</strong> {country.population.toLocaleString()}</p>

                    <p><strong>Region:</strong> {country.region || "N/A"}</p>

                    <p><strong>Sub Region:</strong> {country.subregion || "N/A"}</p>

                    <p><strong>Capital:</strong> {country.capital || "N/A"}</p>

                    <p><strong>Top Level Domain:</strong> {country.topLevelDomain?.join(", ") || "N/A"}</p>

                    <p>
                        <strong>Currencies:</strong>{" "}
                        {country.currencies?.map((currency) => currency.name).join(", ") || "N/A"}
                    </p>

                    <p>
                        <strong>Languages:</strong>{" "}
                        {country.languages?.map((language) => language.name).join(", ") || "N/A"}
                    </p>
                </div>

                // Displays the countries sharing a border with the selected country
                <div className="border-countries">
                    <strong>Border Countries:</strong>

                    {country.borders.length > 0 ? (
                        country.borders.map((border) => (
                            <span key={border} className="border-country">
                                {border}
                            </span>
                        ))
                    ) : (
                        <span>No bordering countries</span>
                    )}
                </div>
            </div>
        </div>
    );
}