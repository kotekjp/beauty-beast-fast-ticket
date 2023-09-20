const ticketNumberElement = document.getElementById("order-number");
const ticketNumberParameter = new URLSearchParams( window.location.search ).get("num");
console.log(ticketNumberParameter);

if (ticketNumberParameter >= 1 && ticketNumberParameter <= 50) {
	ticketNumberElement.textContent = ticketNumberParameter;
} else {
	ticketNumberElement.textContent = "Error";
}