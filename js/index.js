// Donation & History button OnClick Function is Here!
// Function to handle button background toggling
// function toggleButtonColors(clickedButtonId) {
//     const donateButton = document.getElementById("btn-donation");
//     const historyButton = document.getElementById("btn-history");
  
//     // if (clickedButtonId === "btn-donation") {
//     //   donateButton.style.backgroundColor = "#B4F461"; // Light green for "Donate"
//       historyButton.style.hover.backgroundColor = "#B4F461"; // Light transparent gray for "History"
//     } else if (clickedButtonId === "btn-history") {
//       historyButton.style.backgroundColor = "#B4F461"; // Light green for "History"
//       donateButton.style.backgroundColor = "rgba(17, 17, 17, 0.3)"; // Light transparent gray for "Donate"
//     }
//   }
  
  // Add event listeners for buttons
//   document.getElementById("btn-donation").addEventListener("click", function () {
//     toggleButtonColors("btn-history");
//     alert("Thank you for your donation!");
//   });
  
//   document.getElementById("btn-history").addEventListener("click", function () {
//     toggleButtonColors("btn-history");
//     alert("Viewing donation history!");
//   });
  




// Function to toggle button colors

  
  // Attach event listeners to buttons
//   document.getElementById("btn-donation").addEventListener("click", () => {
//     toggleButtonColors("btn-donation");
//     alert("You clicked the Donate button!");
//   });
  
//   document.getElementById("btn-history").addEventListener("click", () => {
//     toggleButtonColors("btn-history");
//     alert("You clicked the History button!");
//   });
  
  // Handle the donation form submission
//   document.getElementById("donate-btn").addEventListener("click", function () {
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const amount = document.getElementById("amount").value;
  
//     if (name && email && amount) {
//       alert(`Thank you, ${name}! Your donation of BDT ${amount} has been received.`);
//       // Reset the form
//       document.getElementById("name").value = "";
//       document.getElementById("email").value = "";
//       document.getElementById("amount").value = "";
//     } else {
//       alert("Please fill out all the fields before submitting.");
//     }
//   });
  



// Handle the donation form submission
document.getElementById("btn-donation").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const amount = document.getElementById("amount").value;
  
    if (name && email && amount) {
      alert(`Thank you, ${name}! Your donation of BDT ${amount} has been received.`);
      // Reset the form
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("amount").value = "";
    } else {
      alert("Please fill out all the fields before submitting.");
    }
  });
  

  // Initial account balance
  // Initial account balance and donation total
let accountBalance = 5000; // Assume an initial balance of 5000 BDT
let totalDonations = 0;

// Function to handle donation input
function handleDonation() {
  // Get input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const amount = parseFloat(document.getElementById("amount").value);

  // Validate input
  if (!name || !email || isNaN(amount)) {
    alert("Please fill out all fields and enter a valid donation amount.");
    return;
  }
  if (amount <= 0) {
    alert("Donation amount must be a positive number.");
    return;
  }
  if (amount > accountBalance) {
    alert("Insufficient account balance.");
    return;
  }

  // Update total donations and account balance
  totalDonations += amount;
  accountBalance -= amount;

  // Update the donation banner
  document.getElementById("total-donations").textContent = `BDT ${totalDonations}`;
  document.getElementById("account-balance").textContent = `BDT ${accountBalance}`;

  // Display success message
  alert(`Thank you, ${name}! Your donation of BDT ${amount} has been received.`);

  // Reset the form
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("amount").value = "";
}

// Attach event listener to the donate button
document.getElementById("donate-btn").addEventListener("click", handleDonation);
