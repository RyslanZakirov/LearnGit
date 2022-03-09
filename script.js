document.addEventListener("DOMContentLoaded", () => {

    const button = document.querySelector("#closeButton")
    const grid = document.querySelector(".secondGrid")

    button.addEventListener("click", ()=>{

        grid.style.visibility = "hidden"

    })

    document.addEventListener("dblclick", () => {

        grid.style.visibility = "visible"

    })

})