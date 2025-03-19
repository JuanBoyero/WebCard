document.addEventListener('DOMContentLoaded', function() {
    const confirmButton = document.getElementById('confirm-button');

    confirmButton.addEventListener('click', function() {
        const guestName = prompt("Por favor, ingresa tu nombre:");
        if (guestName) {
            const message = `Confirmo mi asistencia a los XV de Rena!\nInvitados: ${guestName}`;
            const whatsappNumber = '+54 3385596506';
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappLink, '_blank');
        } else {
            alert("Por favor, ingresa un nombre válido.");
        }
    });
});