const accountBalanceMain = document.getElementById("account-balance");

// Balances for each project
let mainAccountBalance = parseInt(accountBalanceMain.textContent, 10);
let projectBalances = {
  noakhali: 0,
  feni: 0,
  quota: 0,
};

document.getElementById("donate-now").addEventListener("click", (event) => {
  event.preventDefault();
  addDonation("noakhali", "donation-field", "donate-amount");
});

document.getElementById("donate-now-f").addEventListener("click", (event) => {
  event.preventDefault();
  addDonation("feni", "add-donation", "donate-amount-F");
});

document.getElementById("donate-now-a").addEventListener("click", (event) => {
  event.preventDefault();
  addDonation("quota", "donate-donation-a", "donate-amount-a");
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
donationBtn.addEventListener("click", () => {
  resetButtonColors();
  donationBtn.style.backgroundColor = "#B4F461";
});

historyBtn.addEventListener("click", () => {
  resetButtonColors();
  historyBtn.style.backgroundColor = "#B4F461";
});


