<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = htmlspecialchars(trim($_POST['name']));
    $email   = htmlspecialchars(trim($_POST['email']));
    $subject = htmlspecialchars(trim($_POST['subject']));
    $message = htmlspecialchars(trim($_POST['message']));

    $to = "info@drivepass.com";
    $headers  = "From: " . $name . " <" . $email . ">\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $fullMessage = "You have received a new contact form submission:\n\n";
    $fullMessage .= "Name: $name\n";
    $fullMessage .= "Email: $email\n";
    $fullMessage .= "Subject: $subject\n\n";
    $fullMessage .= "Message:\n$message\n";

    if (mail($to, $subject, $fullMessage, $headers)) {
        echo "<script>alert('Message sent successfully! We will contact you soon.'); window.location.href='contact.html';</script>";
    } else {
        echo "<script>alert('Error sending message. Please try again later.'); window.history.back();</script>";
    }
} else {
    header("Location: contact.html");
    exit;
}
?>