function getInputByText(id, value) {
    document.getElementById(id).textContent = value;
  }
  function addToHistory(project, amount) {
    const historyContainer = document.getElementById("transaction-container");
    const historyItem = document.createElement("div");
    historyItem.className = "card bg-gray-100 p-4 my-2 rounded-lg shadow-lg";
    historyItem.innerHTML = `
      <p class="text-base font-semibold"><strong>${amount}</strong> Taka is Donated for flood at ${project} Bangladesh!</p>
      <p class="font-semibold text-gray-700"><strong>Date:</strong> ${new Date().toLocaleString()}</p>
    `;
    historyContainer.appendChild(historyItem);
  }
  
  function addDonation(project, inputFieldId, projectDisplayId) {
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
    getInputByText("account-balance", mainAccountBalance);
    getInputByText(projectDisplayId, projectBalances[project]);
    addToHistory(project, donationAmount);
    // Clear input field and show confirmation
    inputField.value = "";
    alert(`                                             Congrats!🎉
      Thank you for donating ${donationAmount} BDT to the ${project} project! 
                         Your donation makes a difference!`);
  }
  function resetButtonColors() {
    donationBtn.style.backgroundColor = "";
    historyBtn.style.backgroundColor = "";
  }
