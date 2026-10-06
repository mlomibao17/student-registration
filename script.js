// ============================================

// Form
const registrationForm = document.getElementById("registrationForm");

// Input fields
const studentName = document.getElementById("studentName");
const studentNumber = document.getElementById("studentNumber");
const email = document.getElementById("email");
const workshop = document.getElementById("workshop");

// Student type
const studentTypeRegular = document.getElementById("studentTypeRegular");
const studentTypeScholar = document.getElementById("studentTypeScholar");

// Terms and Conditions
const terms = document.getElementById("terms");

// Error messages
const nameError = document.getElementById("nameError");
const studentNumberError = document.getElementById("studentNumberError");
const emailError = document.getElementById("emailError");
const workshopError = document.getElementById("workshopError");
const termsError = document.getElementById("termsError");

// Fee displays
const registrationFee = document.getElementById("registrationFee");
const discount = document.getElementById("discount");
const finalFee = document.getElementById("finalFee");

// Buttons
const registerBtn = document.getElementById("registerBtn");
const clearBtn = document.getElementById("clearBtn");

// Registration result
const registrationResult = document.getElementById("registrationResult");

// Summary fields
const summaryName = document.getElementById("summaryName");
const summaryStudentNumber = document.getElementById("summaryStudentNumber");
const summaryEmail = document.getElementById("summaryEmail");
const summaryWorkshop = document.getElementById("summaryWorkshop");

registrationForm.addEventListener("submit", function (event) {
event.preventDefault();

if (!validateForm()) {
registrationResult.hidden = true;
return;
}

updateFees();
showRegistrationSummary();
});


workshop.addEventListener("change", updateFees);

studentTypeRegular.addEventListener("change", updateFees);

studentTypeScholar.addEventListener("change", updateFees);


clearBtn.addEventListener("click", function () {
studentName.value = "";
studentNumber.value = "";
email.value = "";

workshop.selectedIndex = 0;

studentTypeRegular.checked = false;
studentTypeScholar.checked = false;

terms.checked = false;

