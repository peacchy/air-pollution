import countriesData from '../../src/data/countries.json';

class DataApiService {

    getCountryCodeByName(countryName) {
        const country = countriesData.find(p => p.name.toLowerCase() === countryName.toLowerCase());

        return country ? country.code : null;
    }

    getCitiesData(countryCode, pollutionType) {
        const apiUrl = 'https://api.openaq.org/v1/measurements';
        const query = `country=${countryCode}&parameter=${pollutionType}`;
        const orderBy = 'value';
        const sort = 'desc';
        const limit = '5000';

        const requestUrl = `${apiUrl}?${query}&order_by=${orderBy}&sort=${sort}&limit=${limit}`;

        return fetch(requestUrl);
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