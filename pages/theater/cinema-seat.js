// Get the seat container element
const seatContainer = document.querySelector(".seat-container");

// Create an object to store the seat numbers
const seatNumbers = {};

// Create a function to generate the seats
function generateSeats() {
  // Loop through each row
  for (let i = 1; i <= 25; i++) {
    // Create a row container
    const row = document.createElement("div");
    row.classList.add("row-container");

    // Loop through each seat in the row
    for (let j = 1; j <= 16; j++) {
      // Create a seat element
      const seat = document.createElement("div");
      seat.classList.add("seat");

      // Add the seat number to the seat object
      seatNumbers[`${String.fromCharCode(64 + i)}${j}`] = false;

      // Add a click event listener to the seat element
      seat.addEventListener("click", () => {
        // Toggle the selected class on the seat element
        seat.classList.toggle("selected");
        console.log(`clicked ${i}${String.fromCharCode(64 + j)}`);
        // Toggle the seat number in the seat object
        seatNumbers[`${String.fromCharCode(64 + i)}${j}`] =
          !seatNumbers[`${String.fromCharCode(64 + i)}${j}`];

        // Get the booking container element
        const bookingContainer = document.querySelector(".booking-container");

        // Remove any existing selected seats label and confirmation button
        bookingContainer.innerHTML = "";

        // Get all the selected seat numbers
        const selectedSeatNumbers = Object.keys(seatNumbers).filter(
          (seatNumber) => seatNumbers[seatNumber]
        );

        // If there are selected seats, create a selected seats label and confirmation button
        if (selectedSeatNumbers.length > 0) {
          // Create a selected seats label element
          const selectedSeatsLabel = document.createElement("div");
          selectedSeatsLabel.classList.add("selected-seats-label");
          selectedSeatsLabel.innerText = `Selected Seats: ${selectedSeatNumbers.join(
            ", "
          )}`;

          // Add the selected seats label to the booking container
          bookingContainer.appendChild(selectedSeatsLabel);

          // Create a confirmation button element
          const confirmBtn = document.createElement("button");
          confirmBtn.classList.add("confirm-btn");
          confirmBtn.innerText = "Confirm Seats";

          // Add a click event listener to the confirmation button element
          confirmBtn.addEventListener("click", () => {
            // Log the selected seat numbers to the console
            console.log(selectedSeatNumbers);

            // Reset the seat numbers object
            Object.keys(seatNumbers).forEach(
              (seatNumber) => (seatNumbers[seatNumber] = false)
            );

            // Change the class of the selected seats to "booked"
            seats.forEach((seat) => {
              if (seat.classList.contains("selected")) {
                seat.classList.remove("selected");
                seat.classList.add("booked");
              }
            });

            // Remove the selected seats label and confirmation button
            bookingContainer.innerHTML = "";
          });

          // Add the confirmation button to the booking container
          bookingContainer.appendChild(confirmBtn);
        }
      });

      // Add the seat element to the row container
      row.appendChild(seat);
    }

    // Add the row container to the seat container
    seatContainer.appendChild(row);
  }
}
console.log(seatNumbers);
// Call the generateSeats function to generate the seats
generateSeats();

// Get all the seat elements
const seats = document.querySelectorAll(".seat");
