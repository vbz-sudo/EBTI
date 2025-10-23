<?php
// Recipient email
$to = "markkaomam@gmail.com";

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Determine form type
    $form_type = isset($_POST['form_type']) ? $_POST['form_type'] : 'contact';

    // Collect data based on form type
    if ($form_type == 'contact') {
        $name = strip_tags(trim($_POST["name"]));
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $subject = strip_tags(trim($_POST["subject"]));
        $message = strip_tags(trim($_POST["message"]));

        $email_subject = "Contact Form Submission: $subject";
        $email_body = "Name: $name\n";
        $email_body .= "Email: $email\n";
        $email_body .= "Subject: $subject\n";
        $email_body .= "Message:\n$message\n";

    } elseif ($form_type == 'application') {
        $fullname = strip_tags(trim($_POST["fullname"]));
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $program = strip_tags(trim($_POST["program"]));
        $message_text = strip_tags(trim($_POST["message"]));

        $email_subject = "Admission Application Submission: $fullname";
        $email_body = "Full Name: $fullname\n";
        $email_body .= "Email: $email\n";
        $email_body .= "Program of Interest: $program\n";
        $email_body .= "Personal Statement:\n$message_text\n";
    }

    // Email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send the email
    if (mail($to, $email_subject, $email_body, $headers)) {
        // Redirect or show success message
        echo "<script>alert('Thank you! Your message has been sent successfully.'); window.location.href='".$_SERVER['HTTP_REFERER']."';</script>";
    } else {
        echo "<script>alert('Oops! Something went wrong, please try again later.'); window.location.href='".$_SERVER['HTTP_REFERER']."';</script>";
    }

} else {
    // Not a POST request
    header("Location: index.html");
    exit;
}
?>
