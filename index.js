

const billInput = document.querySelector('.bill-input');
const customTip = document.querySelector('.custom-tip');
const tipsPercentage = document.querySelectorAll('.tips-percentage');
const totalNumberOfPeople = document.querySelector('.number-of-people-input');
const showError = document.querySelector('.error-heading');

const showingTipAmount = document.querySelector('.showing-tip-amount');
const showingTotalPersonAmount = document.querySelector('.showing-total-person-amount');
const resetBtn = document.querySelector('.reset-btn');

// BILL VALUE 

billInput.addEventListener('input', (e) => {
    let showBill = e.target.value;
    if (showBill <= 0) {
        billInput.value = ''
    }
})

// NUMBER OF PEOPLE 

totalNumberOfPeople.addEventListener('input', (e) => {
    let showPeople = e.target.value;
    if (showPeople <= 0) {
        totalNumberOfPeople.value = ''
        showError.classList.remove('none')
        showError.style.color = 'red'
        totalNumberOfPeople.classList.add('error')
    } else {

        showError.classList.add('none')
        totalNumberOfPeople.classList.remove('error')
    }
})

// BILL CALCULATOR 

function billCalculator(tip) {

    let billAmount = Number(billInput.value)
    let totalPeople = Number(totalNumberOfPeople.value)
    let bill = billAmount / totalPeople
    let totalBill = bill * tip / 100;
    console.log(billAmount)
    if (billInput.value === '' || totalNumberOfPeople.value === '') {

        showingTipAmount.innerHTML = "$0.00"
        showingTotalPersonAmount.innerHTML = "$0.00"
    } else {

        showingTipAmount.innerHTML = "$" + totalBill.toFixed(2)
        showingTotalPersonAmount.innerHTML = "$" + (bill + totalBill).toFixed(2)
    }

}

// TIP PERCENTAGE 

tipsPercentage.forEach((elem) => {
    elem.addEventListener('click', () => {
        customTip.value = ''
        if (elem.innerHTML === '5%') {
            billCalculator(5);
            elem.classList.add('active-percentage')
            tipsPercentage.forEach((elem) => {
                if (elem.innerHTML !== '5%') {

                    elem.classList.remove('active-percentage')
                }
            })
        } if (elem.innerHTML === '10%') {
            billCalculator(10)
            elem.classList.add('active-percentage')
            tipsPercentage.forEach((elem) => {
                if (elem.innerHTML !== '10%') {

                    elem.classList.remove('active-percentage')
                }
            })
        } if (elem.innerHTML === '15%') {
            billCalculator(15)
            elem.classList.add('active-percentage')
            tipsPercentage.forEach((elem) => {
                if (elem.innerHTML !== '15%') {

                    elem.classList.remove('active-percentage')
                }
            })
        } if (elem.innerHTML === '25%') {
            billCalculator(25)
            elem.classList.add('active-percentage')
            tipsPercentage.forEach((elem) => {
                if (elem.innerHTML !== '25%') {

                    elem.classList.remove('active-percentage')
                }
            })
        } if (elem.innerHTML === '50%') {
            billCalculator(50)
            elem.classList.add('active-percentage')
            tipsPercentage.forEach((elem) => {
                if (elem.innerHTML !== '50%') {

                    elem.classList.remove('active-percentage')
                }
            })
        }
    })
})

// CUSTOM TIP 

customTip.addEventListener('input', (e) => {
    tipsPercentage.forEach((elem) => {

        elem.classList.remove('active-percentage')

    })
    let newCustomTip = e.target.value
    if (newCustomTip < 0) {
        customTip.value = ''
        billCalculator();
    } else if (newCustomTip > 100) {
        customTip.value = 100
        billCalculator(100);
    } else {

        billCalculator(newCustomTip);
    }

})

// RESET BUTTON 

resetBtn.addEventListener('click', () => {
    window.location.reload();
})

/////////////////////////////////////////////////////////////////////////////////////////////////