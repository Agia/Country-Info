# Country Info

## Description
[**View Demo**](https://agia.github.io/Country-Info/)
</br>
</br>
A web app to find interesting details about a given country.

The app runs in the browser, dynamically updating the HTML and CSS using vanilla JavaScript, and the CountryAPI for country-related data, as well as the Text Translator2 API for some local flavour (or phrases). This allows the user to input a country, and get details such as local currency, official languages used, population, and even the country flag will be rendered. It will also (where available) generate, and render, a list of phrases in the primary language.

The app also provides the option to save entered countries into a 'Wish List', or 'Visited' list, which uses localStorage to persist beyond browser reloads. The user can access their lists at any time using the nav links on the page, which will bring up the relevant list, as a modal, displaying all previous countries saved to that list. They even have the option to clear the list entirely, and start fresh.

## Usage
You can use the app directly via it's Github Pages deployment (found [**here**](https://agia.github.io/Country-Info/) or by using the `View Demo` link above).

**Below is a gif showing the app in use:**

![Gif screenshot showing the country info page in use.](./assets/img/screenshot.gif)

**Screenshots demonstrating the apps responsiveness, at different sizes:**

![Screenshot of the web app at mobile screen size](https://user-images.githubusercontent.com/9097711/218148836-6219ac15-0c70-43c4-8550-4d4fe3b725bd.png)


![Screenshot of the web app at tablet screen size](https://user-images.githubusercontent.com/9097711/218148722-4a446ef6-b5c8-4f85-a87f-f92a494c8b8a.png)

## Collaboration

This was a collaborative project, from start to finish, between [@Agia](https://github.io/Agia), [@Alexis-NG](https://github.io/Alexis-NG) and [@anawada](https://github.io/anawada), where we tasked with creating a web app, based on technologies and skills we had learned thus far, and then implementing that as a group.

Once we settled on an idea, we created a basic wireframe, so that we each had a good sense, in terms of design and structure, what we were aiming for.

We decided to divide the project in such a way that we would each cover a roughly equal amount of the work, as well as it being divided so that we would each have around the same amount of HTML, CSS and JavaScript to work with. We did this by dividing the web app into three main sections:

- The navigation, search, wish list and visited list.
- The hero, search area, and the phrases / translations.
- The country info (country name, flag, population, etc.) and the buttons related to the wish / visited lists.

Although we were each responsible for the structure (HTML), styling (CSS) and function (JavaScript) for each of our sections, we expected some amount of overlap. Therefore we aimed to tackle parts that crossed over significantly by either Zoom, during class hours, or Slack. We also made use of Github's project kanban board to keep track of what we were each working on, and what tasks were still outstanding. 

## Credits

Each of the following were used in this project to a greater, or lesser, degree:

**For functionality:**

- [CountryAPI](https://countryapi.io/) for retrieving country information to populate the country info card area.
- [text-translator2 API](https://rapidapi.com/dickyagustin/api/text-translator2) for retrieving translation data to populate the phrases area.

**For user experience and design:**

- [Bootstrap](https://getbootstrap.com)
- [Google Fonts](fonts.google.com)


**For reference:**

- [MDN](https://developer.mozilla.org/en-US/)
- The documentation of the projects listed above.
