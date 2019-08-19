import countriesData from '../../src/data/countries.json';

class DataApiService {

    getCountryCodeByName(countryName) {
        const country = countriesData.find(p => p.name === countryName);

        return country ? country.code : null;
    }

    getCitiesData(countryCode, pollutionType) {

        return fetch(`https://api.openaq.org/v1/measurements?country=${countryCode}&parameter=${pollutionType}&order_by=value&sort=desc&limit=5000`);
    }

    getCityDescription(cityName) {
        const apiUrl = 'https://en.wikipedia.org/w/api.php';
        const cors = 'origin=*';
        const format = 'format=json&formatversion=2';
        const query = `action=query&prop=extracts&exintro&explaintext&titles=${cityName}`;
        const requestUrl = `${apiUrl}?${cors}&${format}&${query}`;

        return fetch(requestUrl);
    }
}

const dataApiService = new DataApiService();
export default dataApiService;