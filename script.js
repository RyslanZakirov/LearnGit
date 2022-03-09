document.addEventListener("DOMContentLoaded", () => {

    const button = document.querySelector("#closeButton")
    const grid = document.querySelector(".secondGrid")

    button.addEventListener("click", ()=>{

        grid.style.visibility = "hidden"

    })

    document.addEventListener("dblclick", (e) => {

        grid.style.visibility = "visible"
        alert(e.pageX())

    })

})