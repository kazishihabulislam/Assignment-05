function toggleButtonColors(activeButtonId) {
    const donationButton = document.getElementById("btn-donation");
    const historyButton = document.getElementById("btn-history");
  
    if (activeButtonId === "btn-donation") {
      donationButton.style.backgroundColor = "#B4F461";
       // Highlight
      historyButton.style.backgroundColor = "#1111114D"; // Dim
    } else if (activeButtonId === "btn-history") {
      historyButton.style.backgroundColor = "#B4F461"; // Highlight
      donationButton.style.backgroundColor = "#1111114D"; // Dim
    }
  }



//   Here are using test example!

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
