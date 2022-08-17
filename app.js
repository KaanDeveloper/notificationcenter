//HTML
var container = document.createElement("div")
container.classList.add("container")
document.body.appendChild(container)

var titleSec = document.createElement("div")
titleSec.classList.add("titleSec")
container.appendChild(titleSec)

var headingTitle = document.createElement("h1")
headingTitle.classList.add("headingTitle")
headingTitle.innerText = "Discover Our Deals"
titleSec.appendChild(headingTitle)

var mainSec = document.createElement("ul")
mainSec.classList.add("mainSec")
container.appendChild(mainSec)

var notificationBox1 = document.createElement("li")
notificationBox1.classList.add("notificationBox1")
var notificationBox2 = document.createElement("li")
notificationBox2.classList.add("notificationBox2")
var notificationBox3 = document.createElement("li")
notificationBox3.classList.add("notificationBox3")
mainSec.appendChild(notificationBox1)
mainSec.appendChild(notificationBox2)
mainSec.appendChild(notificationBox3)

var notificationArea1 = document.createElement("div")
notificationArea1.classList.add("notificationArea1")
var notificationArea2 = document.createElement("div")
notificationArea2.classList.add("notificationArea2")
var notificationArea3 = document.createElement("div")
notificationArea3.classList.add("notificationArea3")
notificationBox1.append(notificationArea1)
notificationBox2.append(notificationArea2)
notificationBox3.append(notificationArea3)

var hideButton = document.createElement("button")
hideButton.classList.add("hideButton")
hideButton.innerText = "X"
container.appendChild(hideButton)

//CSS
container.style.backgroundColor = "white"
container.style.width = "250px"
container.style.height = "300px"
container.style.position = "fixed"
container.style.right = "-250px"
container.style.top = "60%"
container.style.zIndex = 9999999
container.style.overflow = "hidden"
container.style.padding = 0
container.style.borderRadius = "5px"
container.style.transition = "right 0.5s ease-in-out"

titleSec.style.backgroundColor = "#214b9c"

headingTitle.style.color = "white"
headingTitle.style.fontSize = "24px"
headingTitle.style.margin = "0"
headingTitle.style.textAlign = "center"

mainSec.style.display = "flex"
mainSec.style.flexDirection = "column"
mainSec.style.alignItems = "center"
mainSec.style.justifyContent = "center"
mainSec.style.listStyle = "none"

notificationBox1.style.display = "flex"
notificationBox1.style.alignItems = "center"
notificationBox1.style.justifyContent = "space-between"
notificationBox1.style.padding = "0 2px 0 0"
notificationBox1.style.cursor = "pointer"
notificationBox1.style.marginLeft = "2px"

notificationBox2.style.display = "flex"
notificationBox2.style.alignItems = "center"
notificationBox2.style.justifyContent = "space-between"
notificationBox2.style.padding = "0 2px 0 0"
notificationBox2.style.cursor = "pointer"
notificationBox2.style.marginLeft = "2px"
notificationBox2.style.gap = "5px"

notificationBox3.style.display = "flex"
notificationBox3.style.alignItems = "center"
notificationBox3.style.justifyContent = "space-between"
notificationBox3.style.padding = "0 2px 0 0"
notificationBox3.style.cursor = "pointer"
notificationBox3.style.marginLeft = "2px"

notificationArea1.style.marginBottom = "10px"
notificationArea1.style.marginRight = "5px"

notificationArea2.style.marginBottom = "10px"
notificationArea2.style.marginRight = "5px"

notificationArea3.style.marginRight = "5px"

hideButton.style.outline = "none"
hideButton.style.border = "none"
hideButton.style.borderRadius = "50%"
hideButton.style.position = "absolute"
hideButton.style.left = 0
hideButton.style.bottom = 0

//JS
var productNamesList = localStorage.getItem("product-names") ? JSON.parse(localStorage.getItem("product-names")) : []
var productImagesList = localStorage.getItem("product-images") ? JSON.parse(localStorage.getItem("product-images")) : []
var productPricesList = localStorage.getItem("product-prices") ? JSON.parse(localStorage.getItem("product-prices")) : []
localStorage.setItem("product-names", JSON.stringify(productNamesList))
localStorage.setItem("product-images", JSON.stringify(productImagesList))
localStorage.setItem("product-prices", JSON.stringify(productPricesList))
var notificationBoxes = [notificationBox1, notificationBox2, notificationBox3]
var notificationAreas = [notificationArea1, notificationArea2, notificationArea3]
//ADDING PRODUCT TYPES TO LOCAL STORAGE
var products = document.getElementsByClassName("product-card")
for(let i = 0; i < products.length; i++) {
    products[i].addEventListener("click", () => {
        var productNamesList = localStorage.getItem("product-names") ? JSON.parse(localStorage.getItem("product-names")) : []
        var productImagesList = localStorage.getItem("product-images") ? JSON.parse(localStorage.getItem("product-images")) : []
        var productPricesList = localStorage.getItem("product-prices") ? JSON.parse(localStorage.getItem("product-prices")) : []
        if(productNamesList.length < 3) {
            productNamesList.push(products[i].lastChild.lastChild.childNodes[1].textContent)
            productImagesList.push(products[i].lastChild.firstChild.childNodes[1].getAttribute("src"))
            productPricesList.push(products[i].lastChild.lastChild.childNodes[3].firstChild.firstChild.textContent)
            localStorage.setItem("product-names", JSON.stringify(productNamesList))
            localStorage.setItem("product-images", JSON.stringify(productImagesList))
            localStorage.setItem("product-prices", JSON.stringify(productPricesList))
        }
        else {
            productNamesList.push(products[i].lastChild.lastChild.childNodes[1].textContent)
            productImagesList.push(products[i].lastChild.firstChild.childNodes[1].getAttribute("src"))
            productPricesList.push(products[i].lastChild.lastChild.childNodes[3].firstChild.firstChild.textContent)
            productNamesList.shift()
            productImagesList.shift()
            productPricesList.shift()
            localStorage.setItem("product-names", JSON.stringify(productNamesList))
            localStorage.setItem("product-images", JSON.stringify(productImagesList))
            localStorage.setItem("product-prices", JSON.stringify(productPricesList))
        }
        //SHOWING NOTIFICATION CENTER IF CONDITIONS ARE MET
        if(productNamesList.length >= 3 && !document.URL.includes("/etiket/")) {
            showNotificationCenter(productNamesList, productImagesList, productPricesList, notificationAreas, notificationBoxes)
        }
    })
}

//SHOWING NOTIFICATION CENTER IF CONDITIONS ARE MET
if(productNamesList.length >= 3 && !document.URL.includes("/etiket/")) {
    showNotificationCenter(productNamesList, productImagesList, productPricesList, notificationAreas, notificationBoxes)
}

function showNotificationCenter(productNamesList, productImagesList, productPricesList, notificationAreas, notificationBoxes) {
    var newPrice
    for(let i = productNamesList.length - 1; i > productNamesList.length - 4; i--) {
        //SHOWING NOTIFICATIONS ACCORDING TO PRODUCTS THAT USER HAVE VISITED
        var picture = document.createElement("img")
            picture.setAttribute("src", productImagesList[productImagesList.length - 1 - i])
        picture.style.width = "45px"
        picture.style.height = "60px"
        picture.style.marginLeft = "50px"
        picture.style.marginBottom = "10px"
        notificationBoxes[productNamesList.length - 1 - i].append(picture)
        var notificationTitle = document.createElement("h3")
        notificationTitle.innerText = productNamesList[productNamesList.length - 1 - i]
        notificationTitle.style.fontSize = "10px"
        notificationTitle.style.fontWeight = "bold"
        notificationTitle.style.marginTop = "10px"
        notificationTitle.style.textAlign = "left"
        notificationAreas[productNamesList.length - 1 - i].append(notificationTitle)
        newPrice = parseInt(productPricesList[productPricesList.length - 1 - i])
        newPrice = newPrice * 75 / 100
        Math.floor(newPrice)
        var notificationP = document.createElement("p")
        notificationP.innerText = newPrice
        notificationP.style.fontSize = "12px"
        notificationAreas[productNamesList.length - 1 - i].append(notificationP)
    }
    container.style.right = 0
}

//NOTIFICATION CLOSE BUTTON FUNCTION
hideButton.addEventListener("click", () => {
    container.style.right = "-250px"
})