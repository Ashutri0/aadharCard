// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
document
  .getElementById("codeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;

    // Generate a random 16-digit unique code
    const uniqueCode = generateUniqueCode();

    // Display the user card in the modal
    document.getElementById("cardName").textContent = name;
    document.getElementById("cardDOB").textContent = dob;
    document.getElementById("cardAddress").textContent = address;
    document.getElementById("cardPhone").textContent = phone;
    document.getElementById("cardNumber").textContent = uniqueCode;
    modal.style.display = "block";
  });

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Function to generate a random 16-digit unique code
function generateUniqueCode() {
  const characters = "0123456789";
  let uniqueCode = "";
  for (let i = 0; i < 16; i++) {
    const index = Math.floor(Math.random() * characters.length * Math.random());
    uniqueCode += characters[index];
  }
  return uniqueCode;
}
