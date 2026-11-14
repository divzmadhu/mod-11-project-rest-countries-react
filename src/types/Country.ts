// Country flag information
export interface CountryFlag {
    svg: string;
}

// Currency information
export interface Currency {
    code: string;
    name: string;
    symbol: string;
}

// Language information
export interface Language {
    bcp47: string;
    iso639_1: string;
    iso639_2b: string;
    iso639_2t: string;
    iso639_3: string;
    name: string;
    native_name: string;
}

// Main country information
export interface Country {
    name: string;
    alpha3Code: string;
    flags: CountryFlag;
    population: number;
    region: string;
    capital: string;
    nativeName: string;
    subregion: string;
    topLevelDomain: string[];
    currencies: Currency[];
    languages: Language[];
    borders: string[];
}
