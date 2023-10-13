import { API_URL } from "../../settings.js";


export async function initCalender(id) {
    await loadCalender();
}

async function loadCalender(){
    const calender = await fetch(API_URL + "/movies").then((res) => res.json());

// Create the parent container div
const containerDiv = document.createElement('div');
containerDiv.style.position = 'relative'; // To allow absolute positioning

// Create the image element (background)
const image = document.createElement('img');
image.src = 'pages/book-ticket/Biografsædder.jpg';
image.width = 1220;
image.height = 700;

// Create a div for the background image
const backgroundDiv = document.createElement('div');
backgroundDiv.style.position = 'absolute';
backgroundDiv.style.zIndex = '-1';
backgroundDiv.style.width = '100%';
backgroundDiv.style.height = '100%';
backgroundDiv.appendChild(image);

// Create a container for the text, input, and button
const contentContainer = document.createElement('div');
contentContainer.style.position = 'relative'; // To allow absolute positioning
contentContainer.style.display = 'flex';
contentContainer.style.flexDirection = 'column';
contentContainer.style.alignItems = 'center';
contentContainer.style.justifyContent = 'center';
contentContainer.style.minHeight = '100vh';

// Create the h1 element (text)
const h1 = document.createElement('h1');
h1.textContent = 'Vælg venligst den dato du vil se film:';
h1.style.color ='white';

// Create the date-time container div
const dateTimeDiv = document.createElement('div');
dateTimeDiv.className = 'date-time';

// Create the label element
const label = document.createElement('label');
label.setAttribute('for', 'date');
label.textContent = 'Dato:';
label.style.color = 'white';

// Create the input element
const input = document.createElement('input');
input.type = 'date';
input.id = 'date';
input.name = 'date';
input.required = true;

// Set the minimum date using JavaScript
const currentDate = new Date().toISOString().split('T')[0];
input.setAttribute('min', currentDate);

// Create the "Book billet" link
const bookBilletLink = document.createElement('a');
bookBilletLink.href = '/pages/Showing-time/Pick-showing-time.html';
bookBilletLink.textContent = 'Book billet';
bookBilletLink.className = 'button';
bookBilletLink.style.marginTop = '10px';
//bookBilletLink.href = "/showings"

// Append the elements to the content container
contentContainer.appendChild(h1);
contentContainer.appendChild(dateTimeDiv);
dateTimeDiv.appendChild(label);
dateTimeDiv.appendChild(input);
contentContainer.appendChild(bookBilletLink);

// Append the background div behind the content container
containerDiv.appendChild(backgroundDiv);
containerDiv.appendChild(contentContainer);

// Append the container div to the document body
document.body.appendChild(containerDiv);

// Append the CSS link to the document head
document.head.appendChild(cssLink);

}


