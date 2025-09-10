<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name  = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $city  = htmlspecialchars(trim($_POST['city']));

    $to = "info@driverpass.com";
    $subject = "New Driver Waitlist Signup";
    $headers  = "From: " . $name . " <" . $email . ">\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $message  = "A new driver has joined the waitlist:\n\n";
    $message .= "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Phone: $phone\n";
    $message .= "City: $city\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "<script>alert('🎉 Thank you for joining the waitlist! We’ll contact you soon.'); window.location.href='driver.html';</script>";
    } else {
        echo "<script>alert('❌ Error: Unable to send your request. Please try again later.'); window.history.back();</script>";
    }
} else {
    header("Location: driver.html");
    exit;
}
?>