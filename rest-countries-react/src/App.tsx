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
  return (
    <div>
      <Header />
      <p>Total countries: {countries.length}</p>
      <div className="input-container">
        <SearchBar />
        <RegionFilter />
      </div>
      <CountryList countries={countries} />
    </div>
  );
}