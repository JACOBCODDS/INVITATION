function rsvp() {
  // Get the RSVP message element
  const response = document.getElementById("response");
  
  // Reveal the thank-you message
  response.classList.remove("hidden");

  // Optionally disable the button after clicking
  const button = document.querySelector("button");
  button.disabled = true;
  button.textContent = "RSVP Received";
}
