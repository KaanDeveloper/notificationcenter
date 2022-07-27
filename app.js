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
container.style.zIndex = 999
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

notificationBox3.style.display = "flex"
notificationBox3.style.alignItems = "center"
notificationBox3.style.justifyContent = "space-between"
notificationBox3.style.padding = "0 2px 0 0"
notificationBox3.style.cursor = "pointer"
notificationBox3.style.marginLeft = "2px"

hideButton.style.outline = "none"
hideButton.style.border = "none"
hideButton.style.borderRadius = "50%"
hideButton.style.position = "absolute"
hideButton.style.left = 0
hideButton.style.bottom = 0

//JS
var productTypesList = localStorage.getItem("product-types") ? JSON.parse(localStorage.getItem("product-types")) : []
var titleWords = []
var notificationBoxes = [notificationBox1, notificationBox2, notificationBox3]
var notificationAreas = [notificationArea1, notificationArea2, notificationArea3]
//ADDING PRODUCT TYPES TO LOCAL STORAGE
var products = document.getElementsByClassName("product-card")
for(let i = 0; i < products.length; i++) {
    products[i].addEventListener("click", () => {
        productTypesList = localStorage.getItem("product-types") ? JSON.parse(localStorage.getItem("product-types")) : []
        titleWords = products[i].lastChild.getAttribute("title").split(' ')
        productTypesList.push(titleWords[titleWords.length - 1])
        localStorage.setItem("product-types", JSON.stringify(productTypesList))
        titleWords = []
        //SHOWING NOTIFICATION CENTER IF CONDITIONS ARE MET
        if(productTypesList.length >= 3 && !document.URL.includes("/etiket/")) {
            showNotificationCenter(productTypesList, notificationAreas, notificationBoxes)
        }
    })
}

//SHOWING NOTIFICATION CENTER IF CONDITIONS ARE MET
if(productTypesList.length >= 3 && !document.URL.includes("/etiket/")) {
    showNotificationCenter(productTypesList, notificationAreas, notificationBoxes)
}

function showNotificationCenter(productTypesList, notificationAreas, notificationBoxes) {
    for(let i = productTypesList.length - 1; i > productTypesList.length - 4; i--) {
        //SHOWING NOTIFICATIONS ACCORDING TO PRODUCTS THAT USER HAVE VISITED
        if(productTypesList[i] == "Ceket") {
            var picture = document.createElement("img")
            picture.setAttribute("src", "https://img-lcwaikiki.mncdn.com/mnresize/600/-/pim/productimages/20221/5679624/v1/l_20221-s2bo78z8-ruj_a.jpg")
            picture.style.width = "75px"
            picture.style.height = "75px"
            picture.style.marginRight = "10px"
            notificationBoxes[productTypesList.length - 1 - i].append(picture)
            var notificationTitle = document.createElement("h3")
            notificationTitle.innerText = "Tüm Ceketlerde 20% İndirim!!"
            notificationTitle.style.fontSize = "12px"
            notificationTitle.style.fontWeight = "bold"
            notificationTitle.style.marginTop = "10px"
            notificationAreas[productTypesList.length - 1 - i].append(notificationTitle)
            var notificationP = document.createElement("p")
            notificationP.innerText = "Tüm Ceketlerde 20%'ye Varan İndirimleri Kaçırma!!"
            notificationP.style.fontSize = "12px"
            notificationAreas[productTypesList.length - 1 - i].append(notificationP)
        }
        else if(productTypesList[i] == "Gömlek") {
            var picture = document.createElement("img")
            picture.setAttribute("src", "https://img-lcwaikiki.mncdn.com/mnresize/600/-/pim/productimages/20221/5662321/l_20221-s2au16z8-uda_a.jpg")
            picture.style.width = "75px"
            picture.style.height = "75px"
            picture.style.marginRight = "10px"
            notificationBoxes[productTypesList.length - 1 - i].append(picture)
            var notificationTitle = document.createElement("h3")
            notificationTitle.innerText = "Tüm Gömleklerde 15% İndirim!!"
            notificationTitle.style.fontSize = "12px"
            notificationTitle.style.fontWeight = "bold"
            notificationTitle.style.marginTop = "10px"
            notificationAreas[productTypesList.length - 1 - i].append(notificationTitle)
            var notificationP = document.createElement("p")
            notificationP.innerText = "Tüm Gömleklerde 15%'ye Varan İndirimleri Kaçırma!!"
            notificationP.style.fontSize = "12px"
            notificationAreas[productTypesList.length - 1 - i].append(notificationP)
        }
        else if(productTypesList[i] == "Pantolon") {
            var picture = document.createElement("img")
            picture.setAttribute("src", "https://img-lcwaikiki.mncdn.com/mnresize/600/-/pim/productimages/20221/5670461/v1/l_20221-s2be61z8-r9j_u.jpg")
            picture.style.width = "75px"
            picture.style.height = "75px"
            picture.style.marginRight = "10px"
            notificationBoxes[productTypesList.length - 1 - i].append(picture)
            var notificationTitle = document.createElement("h3")
            notificationTitle.innerText = "Tüm Pantolonlarda 25% İndirim!!"
            notificationTitle.style.fontSize = "12px"
            notificationTitle.style.fontWeight = "bold"
            notificationTitle.style.marginTop = "10px"
            notificationAreas[productTypesList.length - 1 - i].append(notificationTitle)
            var notificationP = document.createElement("p")
            notificationP.innerText = "Tüm Pantolonlarda 25%'ye Varan İndirimleri Kaçırma!!"
            notificationP.style.fontSize = "12px"
            notificationAreas[productTypesList.length - 1 - i].append(notificationP)
        }
        else if(productTypesList[i] == "Şort") {
            var picture = document.createElement("img")
            picture.setAttribute("src", "https://img-lcwaikiki.mncdn.com/mnresize/600/-/pim/productimages/20221/5533240/l_20221-s24218z8-cuz_a.jpg")
            picture.style.width = "75px"
            picture.style.height = "75px"
            picture.style.marginRight = "10px"
            notificationBoxes[productTypesList.length - 1 - i].append(picture)
            var notificationTitle = document.createElement("h3")
            notificationTitle.innerText = "Tüm Şortlarda 10% İndirim!!"
            notificationTitle.style.fontSize = "12px"
            notificationTitle.style.fontWeight = "bold"
            notificationTitle.style.marginTop = "10px"
            notificationAreas[productTypesList.length - 1 - i].append(notificationTitle)
            var notificationP = document.createElement("p")
            notificationP.innerText = "Tüm Şortlarda 10%'ye Varan İndirimleri Kaçırma!!"
            notificationP.style.fontSize = "12px"
            notificationAreas[productTypesList.length - 1 - i].append(notificationP)
        }
        else if(productTypesList[i] == "Tişört") {
            var picture = document.createElement("img")
            picture.setAttribute("src", "https://img-lcwaikiki.mncdn.com/mnresize/600/-/pim/productimages/20221/5581081/l_20221-s25873z8-cvl_a.jpg")
            picture.style.width = "75px"
            picture.style.height = "75px"
            picture.style.marginRight = "10px"
            notificationBoxes[productTypesList.length - 1 - i].append(picture)
            var notificationTitle = document.createElement("h3")
            notificationTitle.innerText = "Tüm Tişörtlerde 20% İndirim!!"
            notificationTitle.style.fontSize = "12px"
            notificationTitle.style.fontWeight = "bold"
            notificationTitle.style.marginTop = "10px"
            notificationAreas[productTypesList.length - 1 - i].append(notificationTitle)
            var notificationP = document.createElement("p")
            notificationP.innerText = "Tüm Tişörtlerde 20%'ye Varan İndirimleri Kaçırma!!"
            notificationP.style.fontSize = "12px"
            notificationAreas[productTypesList.length - 1 - i].append(notificationP)
        }
        else if(productTypesList[i] == "Sweatshirt") {
            var picture = document.createElement("img")
            picture.setAttribute("src", "https://img-lcwaikiki.mncdn.com/mnresize/600/-/productimages/20201/1/3875172/l_20201-0s3718z8-mfw_a.jpg")
            picture.style.width = "75px"
            picture.style.height = "75px"
            picture.style.marginRight = "10px"
            notificationBoxes[productTypesList.length - 1 - i].append(picture)
            var notificationTitle = document.createElement("h3")
            notificationTitle.innerText = "Tüm Sweatshirtlerde 25% İndirim!!"
            notificationTitle.style.fontSize = "12px"
            notificationTitle.style.fontWeight = "bold"
            notificationTitle.style.marginTop = "10px"
            notificationAreas[productTypesList.length - 1 - i].append(notificationTitle)
            var notificationP = document.createElement("p")
            notificationP.innerText = "Tüm Sweatshirtlerde 25%'ye Varan İndirimleri Kaçırma!!"
            notificationP.style.fontSize = "12px"
            notificationAreas[productTypesList.length - 1 - i].append(notificationP)
        }
        else {
            var notificationTitle = document.createElement("h3")
            notificationTitle.innerText = "Diğer Ürünlerde Kampanyamız Yoktur."
            notificationTitle.style.fontSize = "12px"
            notificationTitle.style.fontWeight = "bold"
            notificationTitle.style.marginTop = "10px"
            notificationTitle.style.textAlign = "center"
            notificationAreas[productTypesList.length - 1 - i].append(notificationTitle)
        }
    }
    container.style.right = 0
}

//NOTIFICATION CLOSE BUTTON FUNCTION
hideButton.addEventListener("click", () => {
    container.style.right = "-250px"
})