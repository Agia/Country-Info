let country = "Norway";
// "9faUreLJojOnzlUoLLEoVq5QZfM3kHI5UY7kq6xX"
// "http://nadir.yabirgb.com/austria.json"
// "https://countryapi.io/api/name/"+country+"?apikey="
// "https://countryapi.io/api/all?apikey=YOUR-APIKEY"
/* fetch("https://countryapi.io/api/name/" + country + "?apikey=9faUreLJojOnzlUoLLEoVq5QZfM3kHI5UY7kq6xX")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        obtainData(data)
    }); */
console.log(norway)
obtainData(norway)

function obtainData(data) {
    for (const [countryCode, countryData] of Object.entries(data)) {
        //console.log(countryCode)
        //console.log(countryData.capital)

        //Capital
        let capitalEL = document.getElementById("capital")
        capitalEL.textContent = countryData.capital

        //Population
        let populationEL = document.getElementById("population")
        populationEL.textContent = countryData.population

        //Languages
        let languagesEL = document.getElementById("languages")
        for (const languageCode in countryData.languages) {
            const element = countryData.languages[languageCode]
            console.log(element)
            for (let i = 0; i < 1; i++) {
                languagesEL.textContent += countryData.languages[languageCode] + ", "
            }
        }

        //Region
        let regionEL = document.getElementById("region")
        regionEL.textContent = countryData.region

        //Currency
        let currencyEL = document.getElementById("currency")
        for (const currencyCode in countryData.currencies) {
            const currency = countryData.currencies[currencyCode]
            console.log(currency.name)
            currencyEL.textContent += currency.name
        }

        //Flag
        let flagEL = document.getElementById("flag")
        flagEL.setAttribute("src", countryData.flag.medium);

        //CountryName
        let countryNameEL = document.getElementById("countryName")
        countryNameEL.textContent = countryData.name
    }
};