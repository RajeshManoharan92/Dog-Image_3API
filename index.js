var image = document.querySelector("#btn")
var d = document.querySelector("#img")
image.addEventListener("click", myFunction)

function myFunction() {

    fetch("https://dog.ceo/api/breeds/image/random")

        .then((data) => { return data.json() })

        .then((b) => { d.setAttribute("src", b.message) })

}





// Api Used - Animals

// https://dog.ceo/api/breeds/image/random