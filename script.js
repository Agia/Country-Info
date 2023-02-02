let stuff;
fetch("https://countryapi.io/api/name/austria?apikey=JDi0TGPbrqRCyHdRBVDEJVoP73cKyeehMnzV8PET")
    .then((response) => response.json())
    .then((data) => {
        stuff = data;
        console.log(data)
    });

