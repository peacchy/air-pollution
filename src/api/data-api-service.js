class DataApiService {

    getCitiesData(city, pollutionType) {
        fetch(`https://api.openaq.org/v1/measurements?country=${city}&parameter=${pollutionType}&order_by=value&sort=desc&limit=5000`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                return data.results.map(p => {
                    return {
                        city: p.city,
                        pollution: p.value,
                        unit: p.unit
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
}

const dataApiService = new DataApiService();
export default dataApiService;