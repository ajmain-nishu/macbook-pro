/////////////macbookpro specification funtion///////////
function macBookSpecification(inputId, price) {
    const macbookCostText = document.getElementById(inputId)
    const macbookCost = (macbookCostText.innerText = parseInt(price))
    macbookCostText.innerText = macbookCost
    return macbookCost
    
}

// //////////best price function////////////
function bestPrice() {
    const bestPriceText = document.getElementById('best-price')
    const bestPriceCost = bestPriceText.innerText
    const bestPrice = parseInt(bestPriceCost)
    return bestPrice
}

/////////total price function/////////////
function totalPrice() {
    const extraMemoryCost = parseInt(document.getElementById('extra-memory-cost').innerText)
    const extraStorageCost = parseInt(document.getElementById('extra-storage-cost').innerText) 
    const deliveryCharge = parseInt(document.getElementById('delivery-charge').innerText) 
    const totalCost  = bestPrice() + extraMemoryCost + extraStorageCost + deliveryCharge
    document.getElementById('total-price').innerText = totalCost
    document.getElementById('promocode-total-price').innerText = totalCost
}

////////memory storage//////////////
document.getElementById('memory-btn-8').addEventListener('click', function () {
    macBookSpecification('extra-memory-cost', 0)
    totalPrice()
})

document.getElementById('memory-btn-16').addEventListener('click', function () {
    macBookSpecification('extra-memory-cost', 180)
    totalPrice()
})


/////////ssd storage////////////////
document.getElementById('ssd-storage-256').addEventListener('click', function () {
    macBookSpecification('extra-storage-cost', 0)
    totalPrice()
})

document.getElementById('ssd-storage-512').addEventListener('click', function () {
    macBookSpecification('extra-storage-cost', 100)
    totalPrice()
})

document.getElementById('ssd-storage-1').addEventListener('click', function () {
    macBookSpecification('extra-storage-cost', 180)
    totalPrice()
})


/////////delivery charge////////////
document.getElementById('delivery-aug-25').addEventListener('click', function () {
    macBookSpecification('delivery-charge', 0)
    totalPrice()
})

document.getElementById('delivery-aug-21').addEventListener('click', function () {
    macBookSpecification('delivery-charge', 20)
    totalPrice()
})


///////promo code section////////////
document.getElementById('submit-button').addEventListener('click', function () {
    const inputFieldText = document.getElementById('input-field')
    const inputField = inputFieldText.value
    inputFieldText.value = ''
    const promoTotalPrice = document.getElementById('promocode-total-price')
    const promoPrice = promoTotalPrice.innerText
    if (inputField == 'stevekaku') {
        const promoCalculate = (parseFloat(promoPrice) * 20) / 100
        const discountPrice =  parseFloat(promoPrice) - promoCalculate
        promoTotalPrice.innerText = discountPrice
        document.getElementById('submit-button').disabled = true
    }
})