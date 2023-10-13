import { API_URL } from "../../settings.js";


export async function initConfirmation(){
   
document.getElementById("confirmation-details").innerHTML = `
<div class="confirmation">
        <h1>Booking Confirmation</h1>
        <h3>Ticket Confirmation #: 321412421 (generate confirmation number/booking id)</h3>
        <div class="details-container">
            <div class="personal-details">
                <h2>Personal Details</h2>
                <p><strong>Name:</strong> Sadek Al</p>
                <p><strong>Email:</strong> Sade...@hotmail.com</p>
            </div>
            <div class="billing-details">
                <h2>Billing Details</h2>
                <p><strong>Total Price:</strong> $65.00</p>
                <p><strong>Payment Method:</strong> Visa **** **** **** 1234</p>
            </div>
            </div>

        
        <div class="movie-content" id="movie-content">

            
            <div class="movie-info">
                <div class="ticket-icon">
                    <img src="/pages/images/ticket-icon.jpeg" alt="Ticket Icon">
                </div>
                <p><strong>Movie:</strong> Avengers: Endgame (3h 2m)</p>
                <p><strong>Date:</strong> October 10, 2023</p>
                <p><strong>Time:</strong> 2:30 PM </p>
                <p><strong>Room:</strong> Room A </p>
                <p><strong>Seats:</strong> B:02, B:04, B:06</p>
                <div class="qr-code-container" id="ticket-qr-code"></div>
                <div class="movie-button">
                    <button onclick="window.print()">Print</button>
                    <button onclick="capturePage()">Download ticket</button>
                </div>
                


                
            </div>
            <div class="movie-poster">
                <img src="/pages/images/avengers.jpeg" alt="Movie Poster">
            </div>
        </div>
        <div class="billing-info">
            <h2>Purchase Details</h2>
    <table>
        <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Price</th>
            <th>Total</th>
        </tr>
        <tr>
            <td>Child</td>
            <td>2</td>
            <td>$10.00 each</td>
            <td>$20.00</td>
        </tr>
        <tr>
            <td>Adult</td>
            <td>3</td>
            <td>$15.00 each</td>
            <td>$45.00</td>
        </tr>
        <tr>
            <td colspan="3"><strong>Total Price:</strong></td>
            <td>$65.00</td>
        </tr>
    </table>
        </div>
        <div class="footer-info">
            <p>If you have any questions or need assistance, please <a href="contact.html">contact us</a>.</p>
            <a href="/" class="back-to-home">Back to Homepage</a>
        </div>
    </div>
    `;
 }
/*
 
    var qrCodeContainer = document.getElementById("ticket-qr-code");

    var ticketInfo = {
        bookingID: "321412421", // Example booking ID
        movie: "The Movie Title (get from api)", // Example movie title
        date: "October 10, 2023", // Example date
        time: "2:30 PM", // Example time
        room: "Room A (get from booking)", // Example room
        seats: "A1, A2, A3 (get from booking)" // Example seats
    };

    var qr = new QRCode(qrCodeContainer, {
        text: JSON.stringify(ticketInfo),
        width: 200,
        height: 200,
    });


function downloadPage() {
// Clear the QR code container
var qrCodeContainer = document.getElementById("ticket-qr-code");
qrCodeContainer.innerHTML = '';

// Generate and add the new QR code
var ticketInfo = {
    bookingID: "321412421",
    movie: "The Movie Title",
    date: "October 10, 2023",
    time: "2:30 PM",
    room: "Room A",
    seats: "A1, A2, A3"
};

var qr = new QRCode(qrCodeContainer, {
    text: JSON.stringify(ticketInfo),
    width: 200,
    height: 200,
});}



function capturePage() {
var element = document.getElementById('movie-content');
element.scrollIntoView();

// Remove buttons temporarily
var buttons = document.querySelectorAll('.movie-button button');
buttons.forEach(function(button) {
    button.style.display = 'none';
});

setTimeout(function() {
    domtoimage.toPng(element)
        .then(function (dataUrl) {
            var img = new Image();
            img.src = dataUrl;
            var imgWindow = window.open('', '_blank');
            imgWindow.document.write('<img src="' + dataUrl + '"/>');

            // Restore buttons after capturing the image
            buttons.forEach(function(button) {
                button.style.display = 'inline-block';
            });
        })
        .catch(function (error) {
            console.error('Error capturing middle part:', error);
        });
}, 500); // Delay of 1 second (1000 milliseconds)

// Download the page
var confirmationHTML = document.documentElement.outerHTML;
var blob = new Blob([confirmationHTML], { type: 'text/html' });
var url = URL.createObjectURL(blob);
var a = document.createElement('a');
a.href = url;
a.download = 'booking_confirmation.html';
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
window.URL.revokeObjectURL(url);
}


    */  
