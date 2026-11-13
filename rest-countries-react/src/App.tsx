import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import RegionFilter from "./components/RegionFilter/RegionFilter";
import { useState, useEffect } from "react";
import type { Country } from "./types/Country";
// import countryData from "./data/data_backup.json";
import CountryList from "./components/CountryList/CountryList";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import { mapApiCountry } from "./utils/countryMapper";

import "./App.css";

export default function App() {
  const [countries, setCountries] = useState<Country[]>([]);

  // Tracks whether the country data is still loading
  const [loading, setLoading] = useState(true);

  // Stores an error message if fetching countries fails
  const [error, setError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  // Stores the region selected by the user
  const [selectedRegion, setSelectedRegion] = useState("");

  // Stores the country selected by the user
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  // Fetches country data when the App component first loads
  useEffect(() => {
    async function fetchCountries() {
      try {
        let allCountries: Country[] = [];
        let offset = 0;
        let more = true;

        while (more) {
          const response = await fetch(
            `/api/countriesApi?offset=${offset}`
          );

          if (!response.ok) {
            throw new Error("Failed to fetch countries.");
          }

          const result = await response.json();

          const pageCountries = result.data.objects.map(mapApiCountry);

          allCountries = [...allCountries, ...pageCountries];

          more = result.data.meta.more;
          offset += result.data.meta.limit;
        }

        setCountries(allCountries);
        console.log("Total countries loaded:", allCountries.length);

      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Something went wrong."
        );
      } finally {
        setLoading(false);
      }
    }

    fetchCountries();
  }, []);

  // Filter countries based on search text and selected region
  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesRegion = selectedRegion === "" ||
      country.region === selectedRegion;

    return matchesSearch && matchesRegion;
  });
  return (
    <div>
      <Header />
      {loading ? (
        <p>Loading countries...</p>
      ) : error ? (
        <p>{error}</p>
      ) : selectedCountry ? (
        <CountryDetails
          country={selectedCountry}
          countries={countries}
          onBack={() => setSelectedCountry(null)}
          onCountryClick={setSelectedCountry}
        />
      ) : (
        <>
          <div className="input-container">
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
            <RegionFilter
              selectedRegion={selectedRegion}
              onRegionChange={setSelectedRegion}
            />
          </div>
          <CountryList countries={filteredCountries}
            onCountryClick={setSelectedCountry}
          />
        </>
      )}
    </div>
  );
}