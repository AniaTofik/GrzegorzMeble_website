<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "grzegorzmeble@poczta.onet.pl";
    $subject = "Nowa wiadomość z formularza kontaktowego";

    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "Content-Type: text/plain; charset=utf-8";

    $body = "Imię i nazwisko: $name\nEmail: $email\n\nWiadomość:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo "<p style='text-align:center; font-size:1.2rem;'>Dziękujemy za wiadomość. Skontaktujemy się z Tobą wkrótce!</p>";
    } else {
        echo "<p style='text-align:center; color:red;'>Wystąpił błąd. Spróbuj ponownie później.</p>";
    }
} else {
    http_response_code(405);
    echo "Metoda niedozwolona.";
}
?>
