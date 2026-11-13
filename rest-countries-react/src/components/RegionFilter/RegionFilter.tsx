import { useState } from "react";

interface RegionFilterProps {
    selectedRegion: string;
    onRegionChange: (region: string) => void;
}

export default function RegionFilter({ selectedRegion, onRegionChange }: RegionFilterProps) {

    // Controls whether the region dropdown is open or closed
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="filter-container">
            <div className="custom-dropdown" id="region-dropdown">

                <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
                    <span className="selected-option">  {selectedRegion || "Filter by Region"}</span>
                    <i className="fa-solid fa-chevron-down"></i>
                </button>

                <ul className="dropdown-menu" hidden={!isOpen}>
                    {["Africa", "Americas", "Asia", "Europe", "Oceania"].map((region) => (
                        <li
                            key={region}
                            onClick={() => {
                                onRegionChange(region);
                                setIsOpen(false);
                            }}
                        >
                            {region}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );


}