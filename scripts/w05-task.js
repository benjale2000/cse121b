/* W05: Programming Tasks */

/* Declare and initialize global variables */
const TemplesElement = document.querySelector('#temples');
let TemplesList = [];
/* async displayTemples Function */
const DisplayTemples = (theTemples) => {
    TemplesList.forEach(TemplesList => {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = TemplesList.templeName;
        let img = document.createElement('img');
        img.src = TemplesList.imageUrl;
        img.alt = TemplesList.location;
        article.appendChild(h3);
        article.appendChild(img);
        TemplesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async ()  => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        TemplesList = await response.json();
    };
    DisplayTemples();
}

/* reset Function */
function reset() {
    document.querySelector('#temples').replaceChildren()
};

/* sortBy Function */
function sortby(temples) {
    reset();
    let filter = document.querySelector('#sortBy').value;
    switch (filter) {
        case "utah":
            DisplayTemples();
            break;

        case "nonutah":
            DisplayTemples();
            break;

        case "older":
            DisplayTemples();
            break;

        case "all":
            DisplayTemples();
            break;
    }

}


getTemples();

/* Event Listener */

document.querySelector('#sortBy').addEventListener("change", () => { sortby(TemplesList)})