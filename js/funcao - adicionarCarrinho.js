function ready() {
    const addToCartButtons = document.getElementsByClassName("u-full-width button-primary button input adicionar-carrinho")
    for (var i = 0; i < addToCartButtons.lenght; i++)
        addToCartButtons[i].addEventListener("click", addProductToCart)
}

function addProductToCart(event)
const button = event.target
console.log(button)