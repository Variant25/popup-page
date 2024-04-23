var popup = document.getElementById("popup");

function displayPopup() {
  popup.style.display = "flex";
}

function closePopup() {
  popup.style.animation = "popup-disappear 0.5s ease forwards";
  setTimeout(() => {
    popup.style.display = "none";
    popup.style.animation = ""; 
  }, 500);
}

setTimeout(displayPopup, 5000);

function subscribe() {
  var email = document.getElementById("email").value;
  alert("Thank you for subscribing with email: " + email);
  closePopup();
}
