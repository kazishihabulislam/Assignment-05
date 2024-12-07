const accountBalanceMain = document.getElementById("account-balance");

// Balances for each project
let mainAccountBalance = parseInt(accountBalanceMain.textContent, 10);
let projectBalances = {
  noakhali: 0,
  feni: 0,
  quota: 0,
};
function updateElementText(id, value) {
  document.getElementById(id).textContent = value;
}
function addToHistory(project, amount) {
  const historyContainer = document.getElementById("transaction-container");
  const historyItem = document.createElement("div");
  historyItem.className = "card bg-gray-100 p-4 my-2 rounded-lg shadow-lg";
  historyItem.innerHTML = `
    <p class="text-base"><strong>${amount}</strong> Taka is Donated for flood at ${project} Bangladesh!</p>
    <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
  `;
  historyContainer.appendChild(historyItem);
}

function handleDonation(project, inputFieldId, projectDisplayId) {
  const inputField = document.getElementById(inputFieldId);
  const donationAmount = parseInt(inputField.value, 10);

  // Validate input
  if (isNaN(donationAmount) || donationAmount <= 0) {
    alert("Please enter a valid donation amount.");
    return;
  }

  if (donationAmount > mainAccountBalance) {
    alert("Insufficient funds in the main account.");
    return;
  }
  mainAccountBalance -= donationAmount;
  projectBalances[project] += donationAmount;

  // Update the UI
  updateElementText("account-balance", mainAccountBalance);
  updateElementText(projectDisplayId, projectBalances[project]);
  addToHistory(project, donationAmount);

  // Clear input field and show confirmation
  inputField.value = "";
  alert(`                        Congrats!🎉
    Thank you for donating ${donationAmount} BDT to the ${project} project! 
                       Your donation makes a difference!`);

}
document.getElementById("donate-now").addEventListener("click", (event) => {
  event.preventDefault();
  handleDonation("noakhali", "donation-field", "donate-amount");
});

document.getElementById("donate-now-f").addEventListener("click", (event) => {
  event.preventDefault();
  handleDonation("feni", "add-donation", "donate-amount-F");
});

document.getElementById("donate-now-a").addEventListener("click", (event) => {
  event.preventDefault();
  handleDonation("quota", "donate-donation-a", "donate-amount-a");
});

// Toggle Donation and History Sections
document.getElementById("show-donation-btn").addEventListener("click", () => {
  document.getElementById("main-content").classList.remove("hidden");
  document.getElementById("show-history").classList.add("hidden");
});

document.getElementById("show-history-btn").addEventListener("click", () => {
  document.getElementById("main-content").classList.add("hidden");
  document.getElementById("show-history").classList.remove("hidden");
});
// Select the buttons
const donationBtn = document.getElementById("show-donation-btn");
const historyBtn = document.getElementById("show-history-btn");

function resetButtonColors() {
  donationBtn.style.backgroundColor = ""; 
  historyBtn.style.backgroundColor = "";
}

donationBtn.addEventListener("click", () => {
  resetButtonColors(); 
  donationBtn.style.backgroundColor = "#B4F461"; 
});

historyBtn.addEventListener("click", () => {
  resetButtonColors(); 
  historyBtn.style.backgroundColor = "#B4F461";
});
