import { API_URL } from "../../settings.js";
import { handleHttpErrors } from "../../utils.js";

export async function initCinemaSeats() {
  await loadCinemaSeats();
}

async function loadCinemaSeats() {
  // Get the seat container element
  const seatContainer = document.querySelector(".seat-container");

  // Create an object to store the seat numbers
  const seatNumbers = {};

  async function getUser() {
    const res = await fetch(`${API_URL}/members/user1`);
    const user1 = await res.json();
    console.log("getUser()", user1);
  }
  const getReservations = async () => {
    const res = await fetch(`${API_URL}/reservations/user1`);
    const reservations = await res.json();
    console.log("getReservations()", reservations);
    return reservations;
  };
  const reservations = getReservations();
  console.log("reservations", reservations);
  const user = await getUser();
  console.log("user", user);

  // Call the generateSeats function to generate the seats
  generateSeats();

  const cinemas = {
    1: {
      row: 25,
      column: 16,
    },
    2: {
      row: 20,
      column: 12,
    },
  };

  const sendSeatInfo = async (seatInfo) => {
    const URL = `${API_URL}/reservations`;
    const username = await getUser();
    const reservationRequest = {
      movieId: 1,
      userName: `${username?.username}`,
      date: "2023-12-22",
      seats: seatInfo,
    };
    const fetchOptions = {};
    fetchOptions.method = "POST";
    fetchOptions.headers = { "Content-Type": "application/json" };
    fetchOptions.body = JSON.stringify(reservationRequest);
    try {
      await fetch(URL, fetchOptions).then(handleHttpErrors);
    } catch (ex) {
      const errorMsg = ex.apiError ? ex.apiError.message : ex.message;
      console.log(errorMsg);
    }
    console.log(reservationRequest);
  };

  // Create a function to generate the seats
  async function generateSeats() {
    // Loop through each row
    for (let i = 1; i <= 25; i++) {
      // Create a row container
      const row = document.createElement("div");
      row.classList.add("row-container");

      // Loop through each seat in the row
      for (let j = 1; j <= 16; j++) {
        // Create a seat element
        //const reservations = await getReservations();
        //if(`${String.fromCharCode(64 + i)}${j}` === reservations[0].seats[0]){

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
              console.log("selected seat number", selectedSeatNumbers);

              sendSeatInfo(selectedSeatNumbers);

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

  // Get all the seat elements
  const seats = document.querySelectorAll(".seat");
}