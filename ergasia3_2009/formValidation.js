
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const thankYouMessage = document.getElementById("thankYouMessage");

    form.addEventListener("submit", function (event) {
        //ακυρωνουμε την ανανεωση της φορμασ μετα την υποβολη
        event.preventDefault();

        //ληψη και επεξεργασια των τιμων απο τα πεδια της φορμας 
        const fullName= form.fullname.value.trim();
        const email= form.email.value.trim();
        const message =form.message.value.trim();

        //ελεγχος εαν εχουν συμπληρωθει ολα τα πεδια
        if (!fullName || !email || !message) {
            alert("Please fill in all required fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        //ευχαριστηριο μηνυμα 
        thankYouMessage.style.display= "block";
        form.style.display = "none";

        //καταγραφη δεδομενων στο console για debugging
        console.log("Form submitted successfully!");
        console.log(`Full Name: ${fullName}`);
        console.log(`Email: ${email}`);
        console.log(`Message: ${message}`);

      
        form.reset();
    });

    //ελεγχος του μειλ 
    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }
});
