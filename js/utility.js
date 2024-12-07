function getInputById(id) {
    const donateInput = document.getElementById(id).value;
    const donateInputNumber = parseFloat(donateInput);

    // Check if the input is a valid number
    if (isNaN(donateInputNumber)) {
        return 0;
    }
    return donateInputNumber;
}

function getTextById(id) {
    const donateBalance = document.getElementById(id).innerText;
    const donateBalanceNumber = parseFloat(donateBalance);

    // Check if the innerText is a valid number
    if (isNaN(donateBalanceNumber)) {
        return 0;
    }
    return donateBalanceNumber;
}

function showBtnById(id){
        document.getElementById('show-history').classList.add('hidden');
        document.getElementById('main-content').classList.add('hidden');
        document.getElementById(id).classList.remove('hidden');
}

