// Variable to store the country alpha2 code, from Country API. Hardcoded for testing, until CountryAPI code is implemented
let countryAlphaCode;
// Variables to store English phrases
const phraseOne = "Hello";
const phraseTwo = "Goodbye";
const phraseThree = "Thank you";
// Variable to store and manipulate user input
let country;

// Element variables
let modalTitle = document.querySelector("#modal-title");
let modalList = document.querySelector("#saved-countries");
let visitedNav = document.querySelector(".visited");
let wishListNav = document.querySelector(".wish-list");
let searchInput = document.querySelector("#search");
let searchButton = document.querySelector("#button-search");

//variables to store saved countries
let visitedCountries = [];
let wishList = ["France"];

//on click on Visited navbar item open a list of saved countries
visitedNav.addEventListener("click", function() {

    modalTitle.textContent = "Visited Countries";
    
    if (visitedCountries.length > 0) {
      modalList.textContent = visitedCountries
      console.log("hello");
    }
    // render a message
    else {
       modalList.textContent = "You don't have any Countries on your list"
    }
});

//on click on Wish list  navbar item open a list of saved countries
wishListNav.addEventListener("click", function() {

    modalTitle.textContent = "Wish List";
    
    if (wishList.length > 0) {
      modalList.textContent = wishList
      console.log("Hello")
    }
    // render a message
    else {
       modalList.textContent = "You don't have any Countries on your list"
    }
});

// Event listener for search input, which formats and stores the user input, calls a fetch request to the CountryAPI, and then calls the function to render the data
searchButton.addEventListener("click", function (event) {
    // Prevents default behaviout
    event.preventDefault();

    if (searchInput.value !== "") {
        country = searchInput.value.toLowerCase();
        
        fetch("https://countryapi.io/api/name/" + country + "?apikey=9faUreLJojOnzlUoLLEoVq5QZfM3kHI5UY7kq6xX")
        .then((response) => response.json())
        .then((data) => {
            obtainData(data)
        });
        
    } else {
        return;
    } 
})



function obtainData(data) {
    for (const [countryCode, countryData] of Object.entries(data)) {

        //Capital
        let capitalEL = document.getElementById("capital")
        capitalEL.textContent = countryData.capital

        //Population
        let populationEL = document.getElementById("population")
        populationEL.textContent = countryData.population

        //LanguagesList
        let languagesEL = document.getElementById("languages")
        for (const languageCode in countryData.languages) {
            const element = countryData.languages[languageCode]
            console.log(element)
            for (let i = 0; i < 1; i++) {
                if (Object.keys(countryData.languages).length < 2) {
                    languagesEL.textContent += countryData.languages[languageCode]
                } else {
                    languagesEL.textContent += countryData.languages[languageCode] + ", "
                }
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

        // CountryAlpha2Code - Retrieves data and converts it to a readable format for translate API
        countryAlphaCode = countryData.alpha2Code.toLowerCase();

    }

    // Calls the translate function to translate and render phrases to the page
    getTranslations(phraseOne);
    getTranslations(phraseTwo);
    getTranslations(phraseThree);
};


// Does a fetch request to translate API with fixed, and generated, variables as parameters and renders content to 'Phrases' area of page
function getTranslations(phrase) {
    // Variables to store the translated phrases
    let translatedPhraseOne;
    let translatedPhraseTwo;
    let translatedPhraseThree;

    // Call to translate API using phraseOne
    const encodedParams = new URLSearchParams();
    encodedParams.append("source_language", "en");
    encodedParams.append("target_language", countryAlphaCode);
    encodedParams.append("text", phrase);

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '056b2790e1mshd8bb490ad1003bcp114ba5jsn60210fff2967',
            'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        },
        body: encodedParams
    };

    fetch('https://text-translator2.p.rapidapi.com/translate', options)
    .then(response => response.json())
    .then((input) => {
        
        // Local variables to store HTML elements changed via the function
        let phraseOneElement = document.querySelector("#phrase-one");
        let phraseTwoElement = document.querySelector("#phrase-two");
        let phraseThreeElement = document.querySelector("#phrase-three");
        
        // Compares passed parameter to global values, saves the relavant data and changes the associated HTML element. If not match is found, the function returns;
        if (phrase === phraseOne) {
            translatedPhraseOne = input.data.translatedText;
            phraseOneElement.textContent = `${translatedPhraseOne}`;
            
        } else if (phrase === phraseTwo) {
            translatedPhraseTwo = input.data.translatedText;
            phraseTwoElement.textContent = `${translatedPhraseTwo}`;
            
        } else if (phrase === phraseThree) {
            translatedPhraseThree = input.data.translatedText;
            phraseThreeElement.textContent = `${translatedPhraseThree}`;
            
        } else {
            return;
        }
    })
    .catch(err => console.error(err));
    
}