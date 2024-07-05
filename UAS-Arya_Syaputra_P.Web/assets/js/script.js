// Formulir Newsletter
const form = document.querySelector('#newsletter form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah reload halaman

  const emailInput = document.querySelector('#newsletter input[type="email"]');
  const email = emailInput.value.trim();

  if (!email || !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
    alert('Masukkan alamat email yang valid');
    return;
  }

  alert('Terima kasih telah berlangganan newsletter!');
  emailInput.value = ''; // Kosongkan input email
});
// JavaScript functions for transaction processing
function processTransaction() {
  const hotel = document.getElementById('hotel').value;
  const checkInDate = document.getElementById('checkIn').value;
  const checkOutDate = document.getElementById('checkOut').value;

  if (hotel && checkInDate && checkOutDate) {
      console.log(`Booking hotel ${hotel} from ${checkInDate} to ${checkOutDate}`);
      alert(`Pesanan berhasil! Hotel: ${hotel}, Check-In: ${checkInDate}, Check-Out: ${checkOutDate}`);
  } else {
      alert('Silakan lengkapi semua bidang sebelum memesan.');
  }
}
