/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Benjamin Alexander';
let currentYear = '2023';
let profilePicture = 'images/myself.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById ('name');
const foodElement = document.getElementById ('food');
const yearElement = document.querySelector ('#year');
const imageElement = document.querySelector ('img')


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute ('src', profilePicture);
imageElement.setAttribute ('alt', alt = 'Profile image of ${fullName}');



/* Step 5 - Array */
let foodList = ['Sushi', 'Ice Cream', 'Beef Stroganoff', 'Pizza', 'Pasta Salad'];
let foodAdd = 'Potato Salad';
foodList.push (foodAdd);
foodElement.innerHTML += `<br>${foodList}`;
foodList.shift ();
foodElement.innerHTML += `<br>${foodList}`;
foodList.pop ();
foodElement.innerHTML += `<br>${foodList}`;



