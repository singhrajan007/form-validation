
    $(document).ready(function() {
        $("#myForm").on("submit", function(event) {
            event.preventDefault(); // Prevent form submission
            let isValid = true;
            var error = "";

            // Validate name
            if ($("#name").val().trim() === "") {
                error += "Name is required.\n";
                isValid = false;
            }

             // Validate email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test($("#email").val())) {
                error += "Please enter a valid email address.\n";
                isValid = false;
            }

            // Validate phone number
            const phonePattern = /^\d{10}$/;
            if (!phonePattern.test($("#phone").val())) {
                error += "Please enter a valid phone number (10 digits).\n";
                isValid = false;
            }

            // Validate Password
            const password = /^(?=.*[A-Za-z])(?=.*[-!@._*#%])(?=.*\d)[A-Za-z\d-!@._*#%]{8,16}$/;
            if (!password.test($("#password").val())) {
                error += "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one special character, and one number.\n";
                isValid = false;
            }
                

            // Validate confirm password
            const confirmPassword = $("#confirmPassword").val();    
            if ($("#password").val() !== confirmPassword) {
                error += "Passwords do not match.\n";
                isValid = false;
            }
            // Pop Up Message after successful submission
            if (isValid) {
                $(".message").css("background-color", "green");
                $(".message").css("display", "block");
                $(".message").html("<p>Form submitted successfully!</p>");
                document.$("#myForm").reset(); // Reset the form
            }
            // Display error message if validation fails
            else {
                $(".message").css("background-color", "red");
                $(".message").css("display", "block");
                $(".message").html("<p>" + error + "</p>");
            }
        });
    });

$(".confirm-password-showhide .trigger-password, .password-showhide .trigger-password").click(function() {
  var c = $(this).parent().attr("class").replace("-showhide", "");
  var obj = $("#" + (c.indexOf("confirm") > -1 ? "confirmPassword" : "password"));
  obj.attr("type", obj.attr("type") == "text" ? "password" : "text");
  $(this).text($(this).text() == "Hide" ? "Show" : "Hide");
});
