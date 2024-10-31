// Terrence Charamba
// 2024001670
document
  .getElementById("mailingList")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    console.log(`Subscribed with email: ${email}`);
    alert("Thank you for subscribing!");
  });
