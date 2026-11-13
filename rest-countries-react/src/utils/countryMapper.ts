import type { Country } from "../types/Country";


// Converts a country object from the API into our existing Country format.
export function mapApiCountry(apiCountry: any): Country {


const nativeNames = Object.values(apiCountry.names.native ?? {});
const firstNativeName = nativeNames[0] as any;

return {
    name: apiCountry.names.common,
    alpha3Code: apiCountry.codes.alpha_3 || "",
    flags: {
        svg: apiCountry.flag.url_svg
    },
    population: apiCountry.population,
    region: apiCountry.region,
    capital: apiCountry.capitals?.[0]?.name ?? "",
    nativeName: firstNativeName?.common ?? apiCountry.names.common,
    subregion: apiCountry.subregion ?? "",
    topLevelDomain: apiCountry.tlds ?? [],
    currencies: apiCountry.currencies ?? [],
    languages: apiCountry.languages ?? [],
    borders: apiCountry.borders ?? []
};
}