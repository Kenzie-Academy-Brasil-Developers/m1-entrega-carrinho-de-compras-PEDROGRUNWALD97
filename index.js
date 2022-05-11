const productsCart = [
    {id: 0,name: "Uva Crimson", price: 44.97},
    {id: 1,name: "Vinho Canção", price: 17.92},
    {id: 2,name: "Agua de coco", price: 8.99},
    {id: 3,name: "Mamão" , price: 11.98},
    {id: 4,name: "Agua tônica", price: 16.98},
    {id: 5,name: "Manga Tommy", price: 2.45},
    {id: 6,name: "Melão Taiti", price: 7.99}
    ]

const checkout = [
    {Name:"R$", value:"0.00"}
]

function shopInit() {
    let inicio = document.createElement('main')
    inicio.className =  "products"
    document.body.append(inicio)
    addItemShop()}
shopInit()

function addItemShop(){
    let loja = document.querySelector(".products")
    loja.innerHTML = `
    <h1 class="tituloLoja">Virtual Market</h1>
    <ul class = "shopCartId">
        <li class = "product-name-title">
        <p class = "description">Valor</p>
        <p class = "price">Preço</p>
        </li>
    </ul>`
    let lojaSection = document.createElement('ul')
    lojaSection.className = 'productList'
    document.querySelector(".products").appendChild(lojaSection)   
    let sectionProducts = document.querySelector('.productList')
    productsCart.map((valor)=>{
        sectionProducts.innerHTML+=`
        <li class = "product-item"> 
        <p class = "product-name">`+valor.name+`</p>
        <p class = "product-price">R$ `+valor.price+`</p>
        </li> ` }) 
    Checkout() 
}
function Checkout() {
    let valorFinal = document.createElement('ul')
    valorFinal.className = "ProductDetails"
    document.querySelector('.products').appendChild(valorFinal)
    valorFinal.innerHTML = `
       <li class = "ProductSome">
            <ul class = "priceItens">
                <li class = "priceDescription">Total</li>
                <li class = "priceValue"> 
                    <ul>
                        <li class = "priceCoin">R$</li>
                        <li class = "priceTotal">0.00</li> 
                    </ul>
                </li>
            </ul>
       </li>
       <li class = "ProductSome"><button class = "ButtonEnd">Finalizar Compra</button></li>`
    calcularCompra ()    
}
function calcularCompra(){
    let resultado = 0
    for (let i = 0 ; i < productsCart.length ; i++){
      resultado += productsCart[i].price
    }
    document.querySelector('.priceTotal').innerText = resultado.toFixed(2)
}