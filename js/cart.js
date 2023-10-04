function getFirstCardDetails() {
    const firstItemName = getItemName('first-item-name');
    const itemPrice = getItemNumber('first-item-price')

    displayClickedItemName(firstItemName);

    // for cart calculation
    const totalPriceInitial = getItemNumber('total-price');
    const totalPrice = itemPrice + totalPriceInitial;

    setItemNumber('total-price', totalPrice);
    btnValidation();
}


function getSecondCardDetails() {
    const secondItemName = getItemName('second-item-name');
    const itemPrice = getItemNumber('second-item-price')

    displayClickedItemName(secondItemName);

    const totalPriceInitial = getItemNumber('total-price');
    const totalPrice = itemPrice + totalPriceInitial;
    setItemNumber('total-price', totalPrice);
    btnValidation();

}
function getThirdCardDetails() {
    const thirdItemName = getItemName('third-item-name');
    const itemPrice = getItemNumber('third-item-price')

    displayClickedItemName(thirdItemName);
 
    const totalPriceInitial = getItemNumber('total-price');
    const totalPrice = itemPrice + totalPriceInitial;
    setItemNumber('total-price', totalPrice);
    btnValidation();

}
function getFourthCardDetails() {
    const fourthItemName = getItemName('fourth-item-name');
    const itemPrice = getItemNumber('fourth-item-price')

    displayClickedItemName(fourthItemName);
 
    const totalPriceInitial = getItemNumber('total-price');
    const totalPrice = itemPrice + totalPriceInitial;
    setItemNumber('total-price', totalPrice);
    btnValidation();

}
function getFifthCardDetails() {
    const fifthItemName = getItemName('fifth-item-name');
    const itemPrice = getItemNumber('fifth-item-price')

    displayClickedItemName(fifthItemName);
 
    const totalPriceInitial = getItemNumber('total-price');
    const totalPrice = itemPrice + totalPriceInitial;
    setItemNumber('total-price', totalPrice);
    btnValidation();

}
function getSixthCardDetails() {
    const sixthItemName = getItemName('sixth-item-name');
    const itemPrice = getItemNumber('sixth-item-price')

    displayClickedItemName(sixthItemName);
 
    const totalPriceInitial = getItemNumber('total-price');
    const totalPrice = itemPrice + totalPriceInitial;
    setItemNumber('total-price', totalPrice);
    btnValidation();

}
// trying coupon discount btn
document.getElementById('coupon-apply-btn').addEventListener('click', function () {
    const typedCoupon = document.getElementById('coupon-field').value;
    if (typedCoupon === 'SELL200') {
        const totalPriceInitial = getItemNumber('total-price');
        const discount = (0.2 * totalPriceInitial).toFixed(2);
        setItemNumber('discount', discount);
        const totalWithDiscount = totalPriceInitial - discount;
        setItemNumber('net-total',totalWithDiscount);
    }
})
// bonus clear all result
document.getElementById('clear-all').addEventListener('click',function(){
    setItemNumber('total-price',00);
    setItemNumber('discount',00);
    setItemNumber('net-total',00);
    const parentElement = document.getElementById('items');
    const childElements = parentElement.getElementsByClassName('child-heading');
    
    const childElementsArray = Array.from(childElements);
    
    childElementsArray.forEach(function(childElement) {
        parentElement.removeChild(childElement);
    });
    
})

// Reusable Function
function getItemName(elementId) {
    const inputField = document.getElementById(elementId);
    const inputFieldString = inputField.innerText;
    return inputFieldString;
}
function getItemNumber(elementId) {
    const inputField = document.getElementById(elementId);
    const inputFieldValue = parseFloat(inputField.innerText);
    const inputFieldValueDecimal = inputFieldValue;
    return inputFieldValueDecimal;
}
function setItemNumber(id, amount) {
    const initialItem = document.getElementById(id);
    initialItem.innerText = amount;
}

function displayClickedItemName(itemName) {
    const parentDiv = document.getElementById('items');
    const h3 = document.createElement('h3');
    h3.classList.add('child-heading');
    const count = parentDiv.childElementCount;
    h3.innerHTML = `${count + 1}. ${itemName} `;
    parentDiv.appendChild(h3);
}

function btnValidation() {
    // purchase btn validation
    const totalPriceCheck = getItemNumber('total-price');
    const purchaseButton = document.getElementById('make-purchase-btn');
    if (totalPriceCheck > 0) {
        purchaseButton.removeAttribute('disabled');
    }
    else {
        purchaseButton.setAttribute('disabled', true);
    }
    // coupon btn validation
    const couponButton = document.getElementById('coupon-apply-btn');
    if (totalPriceCheck >= 200) {
        couponButton.removeAttribute('disabled');
    }
    else {
        couponButton.setAttribute('disabled', true);
    }
}
