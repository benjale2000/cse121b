/* Variables */
let fullName = 'Benjamin Alexander';
let currentYear = '2024';
let profilePicture = 'images/myself.jpg';

/* Element Variables */
const nameElement = document.getElementById ('name');
const foodElement = document.getElementById ('food');
const yearElement = document.querySelector ('#year');
const imageElement = document.querySelector ('img')


/* Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute ('src', profilePicture);
imageElement.setAttribute ('alt', alt = 'Profile image of ${fullName}');



/* Array */
let foodList = ['Sushi', 'Ice Cream', 'Beef Stroganoff', 'Pizza', 'Pasta Salad'];
let foodAdd = 'Potato Salad';
foodList.push (foodAdd);
foodElement.innerHTML += `<br>${foodList}`;
foodList.shift ();
foodElement.innerHTML += `<br>${foodList}`;
foodList.pop ();
foodElement.innerHTML += `<br>${foodList}`;



