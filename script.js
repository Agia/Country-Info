let country = "Norway";
// "9faUreLJojOnzlUoLLEoVq5QZfM3kHI5UY7kq6xX"
// "http://nadir.yabirgb.com/austria.json"
// "https://countryapi.io/api/name/"+country+"?apikey="
// "https://countryapi.io/api/all?apikey=YOUR-APIKEY"
fetch("https://countryapi.io/api/name/"+country+"?apikey=9faUreLJojOnzlUoLLEoVq5QZfM3kHI5UY7kq6xX")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        obtainData(data)
    });
//console.log(norway)
//obtainData(norway)

function obtainData(data) {
    for (const [countryCode, countryData] of Object.entries(data)) {
        //Key es el atributo, que en este caso seria at (austria), nuestro countryCode y value el valor de ese atributo, el countryData
        console.log(countryCode)
        console.log(countryData.capital)
        let capitalEL = document.getElementById("capital")
        capitalEL.textContent = countryData.capital
        let populationEL = document.getElementById("population")
        populationEL.textContent = countryData.population
        let languagesEL = document.getElementById("languages")
        for (const property in countryData.languages) {
            const element = countryData.languages[property]
            console.log(element)

        }
        languagesEL.textContent = countryData.languages
        let regionEL = document.getElementById("region")
        regionEL.textContent = countryData.region
        let currencyEL = document.getElementById("currency")
        currencyEL.textContent = countryData.currencies
    }
};

//guardar la respuesta en un .json y subirla a github (crear una cuenta nueva por si acaso) y borrarla