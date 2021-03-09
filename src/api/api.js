//Base URL. API from koronavirus.hr

const baseUrl = "https://www.koronavirus.hr/json/?action=";

//World and Croatia data from first day
export const globalCovid = () => `${baseUrl}podaci`;

//World and Croatia data last day
export const globalLastCovid = () => `${baseUrl}podaci_zadnji`;

//Croatia's data from first day for provinces
export const croatiaCovid = () => `${baseUrl}po_danima_zupanijama`;

//Croatia's data from provinces last day
export const croatiaLastCovid = () => `${baseUrl}po_danima_zupanijama_zadnji`;
