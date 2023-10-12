/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myprofile = {

    Name: "Benjamin Alexander",
    Photo: "images/myself.jpg",
    FavoriteFoods: [
        'Burgers',
        'Sushi',
        'Chicken Alfredo',
        'Beef Stroganoff',
        'Cookies'
    ],
    Hobbies: [
        'Video Games',
        'Reading Books',
        'Watching TV shows',
        'Watching movies',
        'Standing in the Rain'
    ],
    PlacesLived: []
};


/* Populate Profile Object with placesLive objects */
myprofile.PlacesLived.push(
    {
        place: 'Logan, Utah',
        length: '5 years'
    }
);
myprofile.PlacesLived.push(
    {
        place: 'Bend, Oregon',
        length: '18 years'
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myprofile.Name;
/* Photo with attributes */
document.querySelector('#photo').setAttribute = myprofile.Photo;

/* Favorite Foods List*/
myprofile.FavoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myprofile.Hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myprofile.PlacesLived.forEach((place) => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt, dd)
});

