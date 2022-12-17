const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")

const dolar = 5.16
const euro = 5.26
const bitcoin = 96744.56



const convertValues = () => {
    const inputReais = document.getElementById("input-real").value
    const realValueText = document.getElementById("real-value-text")
    const currencyValueText = document.getElementById("currency-value-text")

    realValueText.innerText = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReais)

    if (select.value === "US$ Dolár Americano") {
        currencyValueText.innerText = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReais * dolar)
    }

    if(select.value === "€ Euro"){
        currencyValueText.innerText = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReais * euro)
    }
    if (select.value === "Bitcoin"){
        currencyValueText.innerText= inputReais / bitcoin.toFixed(3)

    }
}




changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if (select.value === 'US$ Dolár Americano') {
        currencyName.innerHTML = "Dolár Americano"
        currencyImg.src = "./assets/estados-unidos.png"
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    convertValues()
    
    
}

button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)


