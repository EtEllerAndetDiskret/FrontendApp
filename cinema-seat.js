// Get the seat container element
const seatContainer = document.querySelector('.seat-container');

// Create a function to generate the seats
function generateSeats() {
    // Loop through each row
    for (let i = 1; i <= 25; i++) {
        // Create a row container
        const row = document.createElement('div');
        row.classList.add('row-container');

        // Loop through each seat in the row
        for (let j = 1; j <= 16; j++) {
            // Create a seat element
            const seat = document.createElement('div');
            seat.classList.add('seat');

            // Create a seat label element
            const seatLabel = document.createElement('span');
            seatLabel.classList.add('seat-label');
            seatLabel.innerText = `${String.fromCharCode(64 + i)} ${j} `;

            // Add the seat label to the seat element
            seat.appendChild(seatLabel);

            // Add the seat element to the row container
            row.appendChild(seat);
        }

        // Add the row container to the seat container
        seatContainer.appendChild(row);
    }
}

// Call the generateSeats function to generate the seats
generateSeats();

// Get all the seat elements
const seats = document.querySelectorAll('.seat');

// Add a click event listener to each seat element
seats.forEach(seat => {
    seat.addEventListener('click', () => {
        // Toggle the selected class on the seat element
        seat.classList.toggle('selected');
        console.log(seat, "selected");
    });
});

// Get the book button element
const bookBtn = document.querySelector('#book-btn');

// Add a click event listener to the book button element
bookBtn.addEventListener('click', () => {
    // Get all the selected seat elements
    const selectedSeats = document.querySelectorAll('.seat.selected');

    // Log the selected seats to the console
    console.log(selectedSeats);
});