document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const result = document.getElementById("result");

    const showEmailResult = async (e) => {
        e.preventDefault();

        // Display a loading message while sending
        result.innerHTML = "Sending email...";

        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            });

            // Check if the response was successful
            if (response.ok) {
                result.innerHTML = "Email sent successfully!";
                form.reset(); // Reset form after successful submission
            } else {
                result.innerHTML = "Sorry, your email couldn't be sent. Please try again later.";
            }
        } catch (error) {
            console.error(error);
            result.innerHTML = "An error occurred. Please try again.";
        }
    };

    form.addEventListener("submit", showEmailResult);
}); 
