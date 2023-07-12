emailjs.init('JMyRvnXrfkHph-60K');
window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        var serviceID = 'service_4ygu22k';

        var templateID = 'template_ohl8ky6';

        emailjs.sendForm(serviceID, templateID, this)
        .then(function() {
            console.log('Wysłano!');
            // Po pomyślnym wysłaniu wiadomości wyświetl okno pop-up
            document.getElementById('popup').style.display = 'block';
            // Czyszczenie formularza
            document.getElementById('contact-form').reset();
        }, function(error) {
            console.log('Błąd wysyłania wiadomości:', error);
        });
    });

    // Dodajemy nasłuchiwacz zdarzeń do przycisku zamykania okna pop-up
    document.getElementById('close-popup').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'none';
    });
}