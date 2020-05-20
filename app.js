const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

const ticketPrice = parseInt(movieSelect.nodeValue);

container.addEventListener('click', function (e) {
	if (
		e.target.classList.contains('seat') &&
		!e.target.classList.contains('occupied')
	) {
		e.target.classList.toggle('selected');

		const updateSelectedCount = function () {
			const selectedSeats = document.querySelectorAll(
				'.row.seat.selected'
			);

			const selectedSeatsCount = selectedSeats.length;

			count.innerText = selectedSeatsCount;
			total.innerText = selectedSeatsCount * ticketPrice;
		};
	}
});
