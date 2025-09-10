<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name       = htmlspecialchars(trim($_POST['name']));
    $email      = htmlspecialchars(trim($_POST['email']));
    $phone      = htmlspecialchars(trim($_POST['phone']));
    $union_name = htmlspecialchars(trim($_POST['union_name']));
    $position   = htmlspecialchars(trim($_POST['position']));

    $to = "info@driverpass.com"; // you can change to union@driverpass.com if needed
    $subject = "New Union Waitlist Signup";
    $headers  = "From: " . $name . " <" . $email . ">\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $message  = "A new Union Official has joined the waitlist:\n\n";
    $message .= "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Phone: $phone\n";
    $message .= "Union Name: $union_name\n";
    $message .= "Position: $position\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "<script>alert('🎉 Thank you for joining the Union waitlist! We’ll contact you soon.'); window.location.href='union.html';</script>";
    } else {
        echo "<script>alert('❌ Error: Unable to send your request. Please try again later.'); window.history.back();</script>";
    }
} else {
    header("Location: union.html");
    exit;
}
?>