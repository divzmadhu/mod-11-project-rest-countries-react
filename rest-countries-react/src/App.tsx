import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import RegionFilter from "./components/RegionFilter/RegionFilter";
import { useState } from "react";
import type { Country } from "./types/Country";
import countryData from "./data/data_backup.json";
import CountryList from "./components/CountryList/CountryList";

import "./App.css";

export default function App() {
  const [countries, setCountries] = useState<Country[]>(countryData);
  const [searchTerm, setSearchTerm] = useState("");
  // Stores the region selected by the user
  const [selectedRegion, setSelectedRegion] = useState("");

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
      <p>Total countries: {countries.length}</p>
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
      <CountryList countries={filteredCountries} />
    </div>
  );
}