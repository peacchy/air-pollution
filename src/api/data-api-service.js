import countriesData from '../../src/data/countries.json';

class DataApiService {

    getCountryCodeByName(countryName) {
        return countriesData.filter(p => p.name === countryName).code;
    }

    getCitiesData(countryName, pollutionType) {
        const countryCode = this.getCountryCodeByName(countryName);

        fetch(`https://api.openaq.org/v1/measurements?country=${countryCode}&parameter=${pollutionType}&order_by=value&sort=desc&limit=5000`)
            .then((response) => {
                return response.json();
            })
            .then(data => {
                return data.results.map(p => {
                    return {
                        city: p.city,
                        pollution: p.value,
                        unit: p.unit,
                        pollutionType
                    }
                }).filter((value, index, self) => {
                    const record = self.find(c => c.city === value.city);
                    return self.indexOf(record) === index;
                }).slice(0, 10);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getCityDescription(cityName) {
        const apiUrl = 'https://en.wikipedia.org/w/api.php';
        const cors = 'origin=*';
        const format = 'format=json&formatversion=2';
        const query = `action=query&prop=description&titles=${cityName}`;
        const requestUrl = `${apiUrl}?${cors}&${format}&${query}`;

        fetch(requestUrl)
            .then(response => {
                return response.json();
            })
            .then(data => {
                return data.query.pages.find(p => p.title === cityName).description;
            })
            .catch((error) => {
                console.log(error);
            });
    }


}

const dataApiService = new DataApiService();
export default dataApiService;