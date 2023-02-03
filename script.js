// Commented this out as it makes an API call everytime one of us changes anything - Might be worth copy/pasting it somewhere local if needed and deleting it from repo?

// let stuff;
// fetch("https://countryapi.io/api/name/austria?apikey=JDi0TGPbrqRCyHdRBVDEJVoP73cKyeehMnzV8PET")
//     .then((response) => response.json())
//     .then((data) => {
//         stuff = data;
//         console.log(data)
//     });


// Variable to store the country alpha2 code, from Country API. Hardcoded in the meantime for testing
let countryAlphaCode = "fr";

// Variables to store English phrases
const phraseOne = "Hello";
const phraseTwo = "Goodbye";
const phraseThree = "Thank you";
// Variables to store the translated phrases (will move to local scope when done with testing)
let translatedPhraseOne;
let translatedPhraseTwo;
let translatedPhraseThree;
// Temporary variable for testing translate API output
let countryData;

// Does a fetch request to translate API with fixed, and generated, variables as parameters and renders content to 'Phrases' area of page
function getTranslations (phrase) {
    
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

            // ? TODO: Remove console.logs when no longer used for testing (Alyssa)
            if (phrase === phraseOne) {
                translatedPhraseOne = input.data.translatedText;
                // console.log(translatedPhraseOne);
            } else if (phrase === phraseTwo) {
                translatedPhraseTwo = input.data.translatedText;
                // console.log(translatedPhraseTwo);
            } else if (phrase === phraseThree) {
                translatedPhraseThree = input.data.translatedText;
                // console.log(translatedPhraseThree);
            } else {
                return;
            }
        })
        .catch(err => console.error(err));

}